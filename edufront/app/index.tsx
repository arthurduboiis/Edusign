import { Text, View } from "../components/Themed";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  ImageSourcePropType,
} from "react-native";
import { router } from "expo-router";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import edusign from "../assets/images/edusign.png";
import flatconnection from "../assets/images/flatconnection.png";
import flatcheck from "../assets/images/flatcheck.png";
import flatcalendar from "../assets/images/flatcalendar.jpg";

const CARD_WIDTH = Dimensions.get("window").width - 20;
const CARD_HEIGHT = Dimensions.get("window").height * 0.35;

type CardType = {
  name: string;
  description: string;
  imgsrc: ImageSourcePropType;
};

const cards = [
  { name: "Scan It",
    description: "Scan your document with your phone camera",
    imgsrc: flatconnection
  },
  { name: "Check It",
    description: "Check your document",
    imgsrc: flatcheck
  },
  { name: "Manage", 
    description: "Manage your document",
    imgsrc: flatcalendar
  }
];

export default function LoginPage() {
  function login() {
    console.log("login");
    router.replace("/home");
  }

  const renderCard = (views: CardType[]): React.JSX.Element[] => {
    const { cardStyle } = styles;

    return views.map((card) => {
      return (
        <View style={cardStyle} key={card.name}>
          <Text style={styles.title}>{card.name}</Text>
          <Text style={styles.text} >{card.description}</Text>
          <Image source={card.imgsrc} />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Image source={edusign} style={{ width: 150, marginBottom: 100 }} />
      <View style={styles.swipebox}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
          index={1}
          showPagination
          data={cards}
          paginationStyleItemActive={{ backgroundColor: "#FFC107" }}
          paginationStyleItemInactive={{ backgroundColor: "lightgray" }}

        >
          {renderCard(cards)}
        </SwiperFlatList>
      </View>
      <View style={styles.logincontainer}>
        <TextInput style={styles.input} placeholder="Student Email" />
        <TextInput style={styles.input} placeholder="password" />
        <Pressable style={styles.loginButton} onPress={login}>
          <Text>Login</Text>
        </Pressable>
      </View>
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
  logincontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  swipebox: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingVertical: 50,
    borderRadius: 15,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: 350,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC107",
    paddingVertical: 10,
    width: 70,
    borderRadius: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    fontSize: 16,
    color: "gray",
    paddingVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
