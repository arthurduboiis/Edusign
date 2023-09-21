import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "./Themed";
import book from "../assets/images/book.jpg";
import ok from "../assets/images/ok.jpg";
import { CourseType } from "../types/types";

export default function CourseInfo({ course }: { course: CourseType }) {
  return (
    <View style={styles.container}>
      <Image source={book} style={{ width: 60,height:60  }}/>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.date}>
          {course.hourStart} - {course.hourEnd}
        </Text>
      </View>
      <Image source={ok} style={{ width: 30,height:30 }} />
    </View>
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
