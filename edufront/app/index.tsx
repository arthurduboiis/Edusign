import { Text, View } from "../components/Themed";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { router } from "expo-router";

import { SwiperFlatList } from "react-native-swiper-flatlist";
import edusign from "../assets/images/edusign.png";
import flatconnection from "../assets/images/flatconnection.png";
import flatcheck from "../assets/images/flatcheck.png";
import flatcalendar from "../assets/images/flatcalendar.jpg";
import { UserContext } from "../context/UserContext";
import { AdminType, StudentType, UserContextType } from "../types/types";

const CARD_WIDTH = Dimensions.get("window").width - 20;
const CARD_HEIGHT = Dimensions.get("window").height * 0.35;

type CardType = {
  name: string;
  description: string;
  imgsrc: ImageSourcePropType;
};

const cards = [
  {
    name: "Scan It",
    description: "Scan your document with your phone camera",
    imgsrc: flatconnection,
  },
  { name: "Check It", description: "Check your document", imgsrc: flatcheck },
  { name: "Manage", description: "Manage your document", imgsrc: flatcalendar },
];

export default function LoginPage() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const { currentUser, setCurrentUser } = React.useContext(
    UserContext
  ) as UserContextType;

  React.useEffect(() => {
    if (isLogged) {
      fetch("http://10.104.130.133:8000/students/mail/" + email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 404) {
            console.log("error not students found for this email");
            searchAdmin();
            return null;
          } else return null;
        })
        .then((json) => {
          if (json) {
            setCurrentUser(json);
            router.replace("/home");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isLogged]);

  const searchAdmin = async () => {
    fetch("http://10.104.130.133:8000/admins/mail/" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("error not admins found for this email");
        }
      })
      .then((json) => {
        console.log("is an admin");
        setCurrentUser(json);
        router.replace("/admin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loginFetch = async () => {
    fetch("http://10.104.130.133:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("error cannot be logged in");
        }
      })
      .then((json) => {
        console.log(json);
        setIsLogged(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function login() {
    console.log("login");
    loginFetch();
  }

  const renderCard = (views: CardType[]): React.JSX.Element[] => {
    const { cardStyle } = styles;

    return views.map((card) => {
      return (
        <View style={cardStyle} key={card.name}>
          <Text style={styles.title}>{card.name}</Text>
          <Text style={styles.text}>{card.description}</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Student Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
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
    marginBottom: 300,
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
