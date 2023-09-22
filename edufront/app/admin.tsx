import React from "react";
import { StyleSheet, Image, Pressable, Button } from "react-native";
import { router } from "expo-router";
import { Text, View } from "../components/Themed";
import SvgQRCode from "react-native-qrcode-svg";

function Simple() {
  return <SvgQRCode value="789" />;
}

export default function Admin() {
  const [openQRCode, setOpenQRCode] = React.useState(false);

  function createQRCode() {
    console.log("createQRCode");
    setOpenQRCode(true);
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => createQRCode()} style={styles.buttonBack}>
        <Text style={styles.text}> Create a QR code </Text>
      </Pressable>
      {openQRCode && (
        <View>
          <Text style={styles.date}>QR code</Text>
          <Simple />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  buttonBack: {
    marginTop: 60,
    marginLeft: 20,
    color: "blue",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
  },
  date: {
    fontSize: 18,
    color: "black",
  },
});
