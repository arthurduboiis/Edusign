import React, { useRef } from "react";
import { router } from "expo-router";
import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";
import { View, StyleSheet, Text,  } from "react-native";
interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Signature: React.FC<Props> = () => {
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = (signature: string) => {
    console.log(signature);
    router.replace("/scan")
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleEnd = () => {
    ref.current?.readSignature();
  };

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Signature</Text>
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        autoClear={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Signature;
