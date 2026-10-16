import Foundation
import Capacitor

@objc(FilesystemPlugin)
public class FilesystemPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "FilesystemPlugin"
    public let jsName = "Filesystem"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "writeFile", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getUri", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "readFile", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "deleteFile", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "mkdir", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "rmdir", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "readdir", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stat", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "checkPermissions", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "requestPermissions", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "downloadFile", returnType: CAPPluginReturnPromise)
    ]

    private func getDirectoryUrl(_ directory: String?) -> URL {
        let fm = FileManager.default
        switch directory {
        case "CACHE":
            return fm.urls(for: .cachesDirectory, in: .userDomainMask).first ?? fm.temporaryDirectory
        default:
            return fm.urls(for: .documentDirectory, in: .userDomainMask).first ?? fm.temporaryDirectory
        }
    }

    private func resolveUrl(_ path: String, _ directory: String?) -> URL {
        if path.starts(with: "file://"), let url = URL(string: path) {
            return url
        }
        let base = getDirectoryUrl(directory)
        return base.appendingPathComponent(path)
    }

    @objc override public func checkPermissions(_ call: CAPPluginCall) {
        call.resolve(["publicStorage": "granted"])
    }

    @objc override public func requestPermissions(_ call: CAPPluginCall) {
        call.resolve(["publicStorage": "granted"])
    }

    @objc func getUri(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        call.resolve(["uri": fileUrl.absoluteString])
    }

    @objc func writeFile(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let data = (call.options["data"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)

        do {
            let parentDir = fileUrl.deletingLastPathComponent()
            if !FileManager.default.fileExists(atPath: parentDir.path) {
                try FileManager.default.createDirectory(at: parentDir, withIntermediateDirectories: true, attributes: nil)
            }
            try data.write(to: fileUrl, atomically: true, encoding: .utf8)
            call.resolve(["uri": fileUrl.absoluteString])
        } catch {
            call.resolve(["error": error.localizedDescription])
        }
    }

    @objc func readFile(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)

        do {
            let content = try String(contentsOf: fileUrl, encoding: .utf8)
            call.resolve(["data": content])
        } catch {
            call.resolve(["error": error.localizedDescription])
        }
    }

    @objc func deleteFile(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        try? FileManager.default.removeItem(at: fileUrl)
        call.resolve([:])
    }

    @objc func mkdir(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        try? FileManager.default.createDirectory(at: fileUrl, withIntermediateDirectories: true, attributes: nil)
        call.resolve([:])
    }

    @objc func rmdir(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        try? FileManager.default.removeItem(at: fileUrl)
        call.resolve([:])
    }

    @objc func readdir(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        let files = (try? FileManager.default.contentsOfDirectory(atPath: fileUrl.path)) ?? []
        call.resolve(["files": files])
    }

    @objc func stat(_ call: CAPPluginCall) {
        let path = (call.options["path"] as? String) ?? ""
        let directory = (call.options["directory"] as? String) ?? "DOCUMENTS"
        let fileUrl = resolveUrl(path, directory)
        let attrs = try? FileManager.default.attributesOfItem(atPath: fileUrl.path)
        let size = (attrs?[.size] as? Int) ?? 0
        call.resolve(["size": size, "type": "file"])
    }

    @objc func downloadFile(_ call: CAPPluginCall) {
        call.resolve(["error": "downloadFile not implemented"])
    }
}
