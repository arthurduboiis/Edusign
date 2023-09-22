import React, { useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";
import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";
import { View, StyleSheet, Text } from "react-native";
interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Signature: React.FC<Props> = () => {
  const ref = useRef<SignatureViewRef>(null);
  const { courseId } = useLocalSearchParams();

  const handleSignature = (signature: string) => {
    router.push({ pathname: "/scan", params: { courseId: courseId } } as never);
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signature</Text>
      <SignatureScreen
        ref={ref}
        onOK={handleSignature}
        onClear={handleClear}
        autoClear={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default Signature;
