import Foundation
import Capacitor

@objc public class LegacyFilesystemImplementation: NSObject {
    public typealias ProgressEmitter = (_ bytes: Int64, _ contentLength: Int64) -> Void

    @objc public func downloadFile(call: CAPPluginCall, emitter: @escaping ProgressEmitter, config: InstanceConfiguration?) throws {
        call.resolve(["error": "downloadFile not implemented"])
    }
}
