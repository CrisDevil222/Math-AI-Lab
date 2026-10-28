@echo off
chcp 65001 > nul
title Cai dat MathAI Lab truc tiep len dien thoai Android

echo =======================================================
echo   DANG CAI DAT MATH AI LAB LEN THIET BI ANDROID (F:\)
echo =======================================================
echo.

cd /d "F:\job\mathailab-mobile\android"

echo [1/3] Kiem tra thiet bi Android ket noi qua USB / Wifi (adb)...
adb devices
echo.

rem Tu dong dat JAVA_HOME chuan
if exist "C:\Program Files\Eclipse Adoptium\jdk-21.0.12.101-hotspot\bin\java.exe" (
    set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-21.0.12.101-hotspot"
) else if exist "C:\Program Files\Android\Android Studio\jbr\bin\java.exe" (
    set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
)

echo [2/3] Dang build va cai truc tiep len may (installDebug)...
call gradlew.bat installDebug

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================
    echo [3/3] CAI DAT THANH CONG! Dang khoi dong ung dung...
    echo =======================================================
    adb shell am start -n com.mathailab.app/.MainActivity
) else (
    echo.
    echo =======================================================
    echo [!] CO LOI TRONG QUA TRINH CAI DAT.
    echo Kiem tra lai xem dien thoai da bat USB Debugging chua nhe!
    echo =======================================================
)

echo.
pause

