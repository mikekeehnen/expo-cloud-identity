import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCloudIdentityViewProps } from './ExpoCloudIdentity.types';

const NativeView: React.ComponentType<ExpoCloudIdentityViewProps> =
  requireNativeViewManager('ExpoCloudIdentity');

export default function ExpoCloudIdentityView(props: ExpoCloudIdentityViewProps) {
  return <NativeView {...props} />;
}
