// ==========================================
// MATH AI LAB - HỆ THỐNG CÀI ĐẶT TOÀN DIỆN
// Đồng bộ 100% giữa Trang chủ, 2D và 3D
// ==========================================

const MATH_SETTINGS_KEY = 'mathailab_app_settings';

const DEFAULT_SETTINGS = {
    resolution: 'high',     // 'low' (0.8x), 'medium' (1.0x), 'high' (1.8x), 'ultra' (native)
    uiScale: 'compact',     // 'compact' (1700), 'standard' (1450), 'large' (1150)
    exportQuality: 'fhd'    // 'hd' (1.0x), 'fhd' (1.8x), '4k' (2.8x)
};

function getAppSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem(MATH_SETTINGS_KEY) || '{}');
        return { ...DEFAULT_SETTINGS, ...saved };
    } catch (e) {
        return { ...DEFAULT_SETTINGS };
    }
}

function saveAppSettings(settings) {
    try {
        localStorage.setItem(MATH_SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        console.error('Không thể lưu cài đặt:', e);
    }
    applyAppSettings(settings);
    showSettingsToast('Đã lưu và áp dụng cài đặt thành công!');
}

function getEffectivePixelRatio(resLevel) {
    const dpr = window.devicePixelRatio || 1;
    switch (resLevel) {
        case 'low':
            return 0.8;
        case 'medium':
            return 1.0;
        case 'high':
            return Math.min(dpr, 1.8);
        case 'ultra':
            return Math.max(dpr, 2.2);
        default:
            return Math.min(dpr, 1.8);
    }
}

function getEffectiveViewportWidth(scaleLevel) {
    switch (scaleLevel) {
        case 'compact':
            return 1700;
        case 'standard':
            return 1450;
        case 'large':
            return 1150;
        default:
            return 1700;
    }
}

function applyAppSettings(settings) {
    if (!settings) settings = getAppSettings();

    // 1. Áp dụng UI Scale qua thẻ meta viewport
    const targetWidth = getEffectiveViewportWidth(settings.uiScale);
    let vpMeta = document.querySelector('meta[name="viewport"]');
    if (!vpMeta) {
        vpMeta = document.createElement('meta');
        vpMeta.name = 'viewport';
        document.head.appendChild(vpMeta);
    }
    vpMeta.setAttribute('content', `width=${targetWidth}, user-scalable=no, viewport-fit=cover`);

    // Gắn class vào body để CSS có thể tinh chỉnh nếu cần
    document.body.classList.remove('ui-scale-compact', 'ui-scale-standard', 'ui-scale-large');
    document.body.classList.add(`ui-scale-${settings.uiScale}`);

    // 2. Áp dụng cho 3D (Three.js WebGL renderer)
    if (typeof renderer !== 'undefined' && renderer && typeof renderer.setPixelRatio === 'function') {
        const pr = getEffectivePixelRatio(settings.resolution);
        renderer.setPixelRatio(pr);
        if (typeof onWindowResize === 'function') onWindowResize();
    }

    // 3. Áp dụng cho 2D Canvas
    if (typeof canvas !== 'undefined' && canvas && typeof resize === 'function') {
        window._customPixelRatio = getEffectivePixelRatio(settings.resolution);
        resize(true);
    }

    // 4. Nếu có hàm fitUI, gọi lại fitUI
    if (typeof fitUI === 'function') {
        fitUI();
    }
}

function showSettingsToast(msg) {
    let t = document.getElementById('settingsToast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'settingsToast';
        t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:999999;background:rgba(15,23,42,0.96);color:#38bdf8;border:1px solid rgba(56,189,248,0.5);border-radius:12px;padding:8px 18px;font-size:13px;font-weight:bold;box-shadow:0 10px 30px rgba(0,0,0,0.6);display:flex;align-items:center;gap:8px;pointer-events:none;transition:opacity .3s;';
        document.body.appendChild(t);
    }
    t.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> ${msg}`;
    t.style.opacity = '1';
    t.style.display = 'flex';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
        t.style.opacity = '0';
        setTimeout(() => { t.style.display = 'none'; }, 300);
    }, 2500);
}

// ==========================================
// GIAO DIỆN MODAL CÀI ĐẶT CHUNG (SETTINGS MODAL)
// ==========================================
function openSettingsModal() {
    let modal = document.getElementById('globalSettingsModal');
    if (modal) modal.remove();

    const cur = getAppSettings();

    modal = document.createElement('div');
    modal.id = 'globalSettingsModal';
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 select-none';
    modal.style.cssText = 'background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);';

    modal.innerHTML = `
        <div class="glass-panel w-full max-w-xl rounded-2xl border border-slate-700/80 shadow-2xl p-5 sm:p-6 flex flex-col gap-4 text-slate-100 max-h-[92vh] overflow-y-auto">
            <!-- Header -->
            <div class="flex items-center justify-between border-b border-slate-700/60 pb-3">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-sm font-bold border border-cyan-500/40">
                        <i class="fa-solid fa-gear"></i>
                    </div>
                    <div>
                        <h3 class="text-sm sm:text-base font-bold text-white leading-tight">Cài Đặt Hệ Thống</h3>
                        <p class="text-[11px] text-cyan-400 font-medium">Áp dụng đồng bộ cho toàn bộ ứng dụng</p>
                    </div>
                </div>
                <button type="button" onclick="closeSettingsModal()" class="text-slate-400 hover:text-white p-1 text-lg leading-none transition-colors">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Mục 1: Độ phân giải đồ họa -->
            <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-display text-cyan-400"></i> Độ Phân Giải Đồ Họa</span>
                    <span class="text-[10px] text-slate-400 font-normal">Mật độ điểm ảnh & Khử răng cưa</span>
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button type="button" data-cfg-res="low" onclick="selectCfgOption('res', 'low')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-battery-half text-amber-400 text-sm mb-1"></i>
                        <span class="text-xs font-bold">Thấp</span>
                        <span class="text-[10px] text-slate-400">Tiết kiệm pin</span>
                    </button>
                    <button type="button" data-cfg-res="medium" onclick="selectCfgOption('res', 'medium')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-gauge-simple text-blue-400 text-sm mb-1"></i>
                        <span class="text-xs font-bold">Chuẩn</span>
                        <span class="text-[10px] text-slate-400">1.0x Cân bằng</span>
                    </button>
                    <button type="button" data-cfg-res="high" onclick="selectCfgOption('res', 'high')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-wand-magic-sparkles text-cyan-300 text-sm mb-1"></i>
                        <span class="text-xs font-bold text-cyan-300">Cao</span>
                        <span class="text-[10px] text-slate-400">Mặc định</span>
                    </button>
                    <button type="button" data-cfg-res="ultra" onclick="selectCfgOption('res', 'ultra')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-gem text-purple-400 text-sm mb-1"></i>
                        <span class="text-xs font-bold text-purple-300">Cực Nét</span>
                        <span class="text-[10px] text-slate-400">Max 2K/4K</span>
                    </button>
                </div>
            </div>

            <!-- Mục 2: Kích cỡ giao diện (UI Scale) -->
            <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-up-right-and-down-left-from-center text-emerald-400"></i> Kích Cỡ Giao Diện (UI Scale)</span>
                    <span class="text-[10px] text-slate-400 font-normal">Độ lớn thanh công cụ & đồ thị</span>
                </label>
                <div class="grid grid-cols-3 gap-2">
                    <button type="button" data-cfg-scale="compact" onclick="selectCfgOption('scale', 'compact')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-compress text-cyan-300 text-sm mb-1"></i>
                        <span class="text-xs font-bold">Nhỏ Gọn</span>
                        <span class="text-[10px] text-slate-400">Đồ thị rộng</span>
                    </button>
                    <button type="button" data-cfg-scale="standard" onclick="selectCfgOption('scale', 'standard')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-desktop text-emerald-400 text-sm mb-1"></i>
                        <span class="text-xs font-bold">Vừa Vặn</span>
                        <span class="text-[10px] text-slate-400">Chuẩn tầm mắt</span>
                    </button>
                    <button type="button" data-cfg-scale="large" onclick="selectCfgOption('scale', 'large')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <i class="fa-solid fa-expand text-amber-300 text-sm mb-1"></i>
                        <span class="text-xs font-bold">To Rõ</span>
                        <span class="text-[10px] text-slate-400">Nút & Chữ to</span>
                    </button>
                </div>
            </div>

            <!-- Mục 3: Chất lượng xuất ảnh (Lưu PNG) -->
            <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-image text-amber-400"></i> Chất Lượng Xuất Ảnh (PNG)</span>
                    <span class="text-[10px] text-slate-400 font-normal">Độ phân giải khi bấm "Lưu Ảnh"</span>
                </label>
                <div class="grid grid-cols-3 gap-2">
                    <button type="button" data-cfg-exp="hd" onclick="selectCfgOption('exp', 'hd')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <span class="text-xs font-bold">HD 720p</span>
                        <span class="text-[10px] text-slate-400">File nhẹ gửi nhanh</span>
                    </button>
                    <button type="button" data-cfg-exp="fhd" onclick="selectCfgOption('exp', 'fhd')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <span class="text-xs font-bold text-cyan-300">Full HD 1080p</span>
                        <span class="text-[10px] text-slate-400">Tiêu chuẩn</span>
                    </button>
                    <button type="button" data-cfg-exp="4k" onclick="selectCfgOption('exp', '4k')"
                            class="cfg-btn flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/60 transition-all text-center">
                        <span class="text-xs font-bold text-purple-300">2K / 4K</span>
                        <span class="text-[10px] text-slate-400">Sắc nét để in ấn</span>
                    </button>
                </div>
            </div>

            <!-- Footer nút bấm -->
            <div class="flex items-center justify-between border-t border-slate-700/60 pt-3 mt-1">
                <button type="button" onclick="resetToDefaultSettings()" class="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 font-semibold">
                    <i class="fa-solid fa-rotate-left"></i> Khôi phục mặc định
                </button>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="closeSettingsModal()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all">
                        Hủy
                    </button>
                    <button type="button" onclick="applyAndCloseSettings()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5">
                        <i class="fa-solid fa-check"></i> Lưu & Áp Dụng
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Gán dữ liệu tạm thời
    modal._tempSettings = { ...cur };
    highlightSelectedOptions(modal._tempSettings);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSettingsModal();
    });
}

function selectCfgOption(type, val) {
    const modal = document.getElementById('globalSettingsModal');
    if (!modal || !modal._tempSettings) return;

    if (type === 'res') modal._tempSettings.resolution = val;
    else if (type === 'scale') modal._tempSettings.uiScale = val;
    else if (type === 'exp') modal._tempSettings.exportQuality = val;

    highlightSelectedOptions(modal._tempSettings);
}

function highlightSelectedOptions(s) {
    document.querySelectorAll('[data-cfg-res]').forEach(el => {
        const sel = el.dataset.cfgRes === s.resolution;
        el.classList.toggle('border-cyan-400', sel);
        el.classList.toggle('bg-cyan-500/20', sel);
        el.classList.toggle('text-cyan-200', sel);
    });
    document.querySelectorAll('[data-cfg-scale]').forEach(el => {
        const sel = el.dataset.cfgScale === s.uiScale;
        el.classList.toggle('border-emerald-400', sel);
        el.classList.toggle('bg-emerald-500/20', sel);
        el.classList.toggle('text-emerald-200', sel);
    });
    document.querySelectorAll('[data-cfg-exp]').forEach(el => {
        const sel = el.dataset.cfgExp === s.exportQuality;
        el.classList.toggle('border-purple-400', sel);
        el.classList.toggle('bg-purple-500/20', sel);
        el.classList.toggle('text-purple-200', sel);
    });
}

function resetToDefaultSettings() {
    const modal = document.getElementById('globalSettingsModal');
    if (!modal) return;
    modal._tempSettings = { ...DEFAULT_SETTINGS };
    highlightSelectedOptions(modal._tempSettings);
}

function applyAndCloseSettings() {
    const modal = document.getElementById('globalSettingsModal');
    if (modal && modal._tempSettings) {
        saveAppSettings(modal._tempSettings);
    }
    closeSettingsModal();
}

function closeSettingsModal() {
    const modal = document.getElementById('globalSettingsModal');
    if (modal) modal.remove();
}

// Lắng nghe thay đổi cài đặt từ các trang khác qua storage event
window.addEventListener('storage', (e) => {
    if (e.key === MATH_SETTINGS_KEY && e.newValue) {
        try {
            applyAppSettings(JSON.parse(e.newValue));
        } catch (err) {}
    }
});

// Tự động khởi chạy cài đặt khi tải trang
window.addEventListener('DOMContentLoaded', () => {
    applyAppSettings();
});
