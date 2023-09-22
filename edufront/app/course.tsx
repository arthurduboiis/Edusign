import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Text, View } from "../components/Themed";
import CourseDetails from "../components/CourseDetails";

import { CourseType } from "../types/types";

const fleche = "<-- Back";
const course = {
  id: 1,
  name: "Math",
  teacher: "Mr. Dupont",
  date: "2021-01-01",
  startingDate: "10:00",
  endingDate: "12:00",
  room: 1,
  description: "Math course",
  studentsIds: [1, 2, 3],
};

export default function Course() {
  const [course, setCourse] = React.useState<CourseType | null>(null);
  const { courseId, isScanned } = useLocalSearchParams();


  React.useEffect(() => {
    fetch(`http://10.104.130.133:8000/courses/${courseId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("error not courses found");
        }
      })
      .then((json) => {
        console.log(json);
        setCourse(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);

  function goToHome() {
    console.log("GoToSign");
    console.log(course);
    router.replace("/home");
  }

  function goToSign() {
    if (!course) return;
    router.push({
      pathname: "/signature",
      params: { courseId: course.id },
    } as never);
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonBack} onPress={() => goToHome()}>
        <Text style={styles.text}> {fleche}  {isScanned}</Text>
      </Pressable>
      <CourseDetails course={course} />
      {isScanned !== "true" ? (
        <Pressable style={styles.buttonSign} onPress={() => goToSign()}>
          <Text style={styles.text}> Sign & Scan</Text>
        </Pressable>
      ): 
        <Text style={styles.text}> You are present !</Text>
      
      }
      
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
  buttonSign: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC107",
    paddingVertical: 10,
    width: 170,
    marginLeft: 100,
    marginTop: 50,
    borderRadius: 20,
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
