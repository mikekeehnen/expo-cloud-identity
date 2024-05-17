import ExpoModulesCore
import CloudKit

public class ExpoCloudIdentityModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoCloudIdentity')` in JavaScript.
    Name("ExpoCloudIdentity")

    AsyncFunction("getUserIdentity") { (promise: Promise) in
      let container = CKContainer.default()
      container.fetchUserRecordID { recordID, error in
        if let error = error {
          promise.reject("ERROR_FETCHING", "Error fetching user record ID: \(error.localizedDescription)")
        } else if let recordID = recordID {
          promise.resolve(recordID.recordName)
        } else {
          promise.reject("UNKNOWN_ERROR","Unknown error occurred")
        }
      }
    }
  }
}

