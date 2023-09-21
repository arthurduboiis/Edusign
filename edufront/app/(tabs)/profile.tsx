import { StyleSheet, Image, Pressable } from "react-native";
import avatar from "../../assets/images/avatar.png";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabProfileScreen() {
  const onPress = () => {
    alert("You have been logged out");
  };

  return (
    <View style={styles.container}>
      {/* text username + avatar input mail password log out button  */}
      {/* avatar below */}
      <Image
        source={avatar}
        style={{ width: 100, height: 100, marginLeft: 15 }}
      />
      <Text style={styles.title}>Arthur DUBOIS</Text>
      <View style={styles.content}>
        <Text style={styles.textPlaceHolder}>User name</Text>
        <Text style={styles.text}>adubois195</Text>
        <Text style={styles.textPlaceHolder}>Email</Text>
        <Text style={styles.text}>arthur.dubois@my-digital-school.org</Text>
        <Text style={styles.textPlaceHolder}>Password</Text>
        <Text style={styles.text}>**********</Text>

        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "red",
  },
  content: {
    flex: 1,
    width: "70%",
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  title: {
    fontSize: 25,
    paddingTop: 30,
    fontWeight: "bold",
  },
  textPlaceHolder: {
    paddingVertical: 10,
    fontSize: 18,
    color: "grey",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
