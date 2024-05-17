import { ConfigPlugin, withEntitlementsPlist } from "expo/config-plugins";

const withCloudIdentity: ConfigPlugin = (config) => {
  config = withEntitlementsPlist(config, (config) => {
    config.modResults = {
      ...config.modResults,
      "com.apple.developer.icloud-container-environment": "Development",
      "com.apple.developer.icloud-services": ["CloudKit"],
    };
    return config;
  });
  return config;
};

export default withCloudIdentity;
