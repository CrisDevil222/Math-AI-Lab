import UIKit
import Foundation
import Capacitor

fileprivate extension CAPPluginCall {
    func getStringOpt(_ key: String) -> String? {
        return (options as? [String: Any])?[key] as? String
    }
    func getArrayOpt(_ key: String) -> [Any]? {
        return (options as? [String: Any])?[key] as? [Any]
    }
    func rejectError(_ message: String, _ code: String? = nil, _ error: Error? = nil) {
        let err = CAPPluginCallError(message: message, code: code, error: error, data: [:] as [String: Any])
        errorHandler?(err)
    }
}

@objc(SharePlugin)
public class SharePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "SharePlugin"
    public let jsName = "Share"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "canShare", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "share", returnType: CAPPluginReturnPromise)
    ]

    @objc func canShare(_ call: CAPPluginCall) {
        call.resolve([
            "value": true
        ])
    }

    @objc func share(_ call: CAPPluginCall) {
        var items = [Any]()

        if let text = call.getStringOpt("text") {
            items.append(text)
        }

        if let url = call.getStringOpt("url"), let urlObj = URL(string: url) {
            items.append(urlObj)
        }

        let title = call.getStringOpt("title")

        if let files = call.getArrayOpt("files") {
            files.forEach { file in
                if let url = file as? String, let fileUrl = URL(string: url) {
                    items.append(fileUrl)
                }
            }
        }

        if items.count == 0 {
            call.rejectError("Must provide at least url, text or files")
            return
        }

        DispatchQueue.main.async { [weak self] in
            let actionController = UIActivityViewController(activityItems: items, applicationActivities: nil)

            if title != nil {
                actionController.setValue(title, forKey: "subject")
            }

            actionController.completionWithItemsHandler = { (activityType, completed, _ returnedItems, activityError) in
                if activityError != nil {
                    call.rejectError("Error sharing item", nil, activityError)
                    return
                }

                if completed {
                    call.resolve([
                        "activityType": activityType?.rawValue ?? ""
                    ])
                } else {
                    call.rejectError("Share canceled")
                }
            }

            var presenter = self?.bridge?.viewController
            while let presented = presenter?.presentedViewController {
                if presented is UIActivityViewController {
                    call.rejectError("Can't share while sharing is in progress")
                    return
                }
                presenter = presented
            }

            if let popover = actionController.popoverPresentationController, let presenterView = presenter?.view {
                popover.sourceView = presenterView
                popover.sourceRect = CGRect(x: presenterView.bounds.midX, y: presenterView.bounds.midY, width: 0, height: 0)
                popover.permittedArrowDirections = []
            }
            presenter?.present(actionController, animated: true, completion: nil)
        }
    }
}
