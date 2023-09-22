import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Text, View } from "../components/Themed";
import CourseDetails from "../components/CourseDetails";


import { CourseType } from "../types/types";
const fleche = "<-- Back"
const course = {
  id: 1,
  name: "Math",
  teacher: "Mr. Dupont",
  date: "2021-01-01",
  startingDate: "10:00",
  endingDate: "12:00",
  room: 1,
  description: "Math course",
};

export default function Course() {
  function goToHome() {
    console.log("GoToSign");
    console.log(course);
    router.replace("/home");
  }

  return (
    <View style={styles.container}>
        <Pressable style={styles.buttonBack} onPress={() => goToHome()}>
            <Text style={styles.text}> {fleche}</Text>
        </Pressable>
      <CourseDetails course={course} />
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
