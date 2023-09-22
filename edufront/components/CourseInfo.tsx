import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Text, View } from "./Themed";
import book from "../assets/images/book.jpg";
import ok from "../assets/images/ok.jpg";
import { CourseType } from "../types/types";

export default function CourseInfo({ course }: { course: CourseType }) {
    function goToSign(course: CourseType) {
        console.log("GoToSign");
        console.log(course);
        router.replace("/signature");
    }


  return (
    <Pressable style={styles.container} onPress={() => goToSign(course)}>
      <Image source={book} style={{ width: 60,height:60  }}/>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.date}>
          {course.startingDate} - {course.endingDate}
        </Text>
      </View>
      <Image source={ok} style={{ width: 30,height:30 }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexBasis: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  containerInfo: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
    color: "black",
  },
});
