package expo.modules.cloudidentity

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoCloudIdentityModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoCloudIdentity')` in JavaScript.
    Name("ExpoCloudIdentity")

    AsyncFunction("getUserIdentity") { _, _, promise: Promise -> 
      val AccountManager = AccountManager.get(context)
      val accounts = AccountManager.getAccountsByType("com.google")
      if (accounts.isNotEmpty()) {
        promise.resolve(accounts[0].name)
      } else {
        promise.reject("ERR_NO_ACCOUNT", "No Google account found on this device.")
      }
    }
  }
}
