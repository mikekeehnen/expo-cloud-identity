import ExpoCloudIdentityModule from "./ExpoCloudIdentityModule";

export function getUserIdentity(): Promise<string> {
  return ExpoCloudIdentityModule.getUserIdentity();
}
