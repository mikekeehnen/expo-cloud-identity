import { StyleSheet, Text, View } from 'react-native';

import * as ExpoCloudIdentity from 'expo-cloud-identity';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoCloudIdentity.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
