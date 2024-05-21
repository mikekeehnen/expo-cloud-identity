package expo.modules.cloudidentity

import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import android.accounts.AccountManager
import android.app.Activity

private const val USER_IDENTITY_CODE = 1

class ExpoCloudIdentityModule : Module() {
    private var pendingPromise: Promise? = null

    override fun definition() = ModuleDefinition {
        Name("ExpoCloudIdentity")

        AsyncFunction("getUserIdentity") { _: String?, accountType: String?, promise: Promise ->
            val intent = AccountManager.newChooseAccountIntent(
                null,
                null,
                arrayOf(accountType ?: "com.google"),
                "Please sign in to continue",
                null,
                null,
                null
            )

            pendingPromise = promise

            currentActivity.startActivityForResult(intent, USER_IDENTITY_CODE)
        }

        OnActivityResult { _, (requestCode, resultCode, intent) ->
            if (requestCode != USER_IDENTITY_CODE || pendingPromise == null) {
                return@OnActivityResult
            }

            val promise = pendingPromise!!

            if (resultCode == Activity.RESULT_OK && intent != null) {
                try {
                    val accountName = intent.getStringExtra(AccountManager.KEY_ACCOUNT_NAME)
                    promise.resolve(accountName)
                } catch (e: Exception) {
                    promise.reject("[ExpoCloudIdentity]", e.message, e)
                }
            }
        }
    }

    private val currentActivity: Activity
        get() = requireNotNull(appContext.currentActivity) { "Current activity is null" }
}

