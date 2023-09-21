import React from "react";
import { router } from "expo-router";
import { StyleSheet, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Text, View } from "../components/Themed";

interface BarCodeData {
  type: string;
  data: string;
}

export default function Scan() {
  const [hasPermission, setHasPermission] = React.useState<Boolean>(false);
  const [type, setType] = React.useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = React.useState(false);
  React.useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeData) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    router.replace("/course")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!permission) {
    requestPermission();
    console.log("No permission");
    console.log(permission);
  }

  function toggleCameraType() {
    console.log("toggleCameraType");
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log(type);
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  camera: {
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 120,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 25,
    width: 100,
    backgroundColor: "#ffc107",
    borderRadius: 5,

    margin: 20,
  },
  button: {},
  text: {
    fontSize: 22,
    color: "black",
  },
});
