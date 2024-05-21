import * as ExpoCloudIdentity from "expo-cloud-identity";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [userIdentity, setUserIdentity] = useState<string | null>(null);

  useEffect(() => {
    ExpoCloudIdentity.getUserIdentity().then((id) => {
      setUserIdentity(id);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>User identity: {userIdentity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
