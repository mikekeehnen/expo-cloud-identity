import * as React from 'react';

import { ExpoCloudIdentityViewProps } from './ExpoCloudIdentity.types';

export default function ExpoCloudIdentityView(props: ExpoCloudIdentityViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
