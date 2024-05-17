import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCloudIdentity.web.ts
// and on native platforms to ExpoCloudIdentity.ts
import ExpoCloudIdentityModule from './ExpoCloudIdentityModule';
import ExpoCloudIdentityView from './ExpoCloudIdentityView';
import { ChangeEventPayload, ExpoCloudIdentityViewProps } from './ExpoCloudIdentity.types';

// Get the native constant value.
export const PI = ExpoCloudIdentityModule.PI;

export function hello(): string {
  return ExpoCloudIdentityModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCloudIdentityModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCloudIdentityModule ?? NativeModulesProxy.ExpoCloudIdentity);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCloudIdentityView, ExpoCloudIdentityViewProps, ChangeEventPayload };
