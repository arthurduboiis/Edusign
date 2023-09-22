import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Text, View } from "../components/Themed";
import house from "../assets/images/house.png";
import people from "../assets/images/people.png";
import horloge from "../assets/images/horloge.jpg";

import { CourseType } from "../types/types";

export default function CourseDetails({
  course,
}: {
  course: CourseType | null;
}) {
  return (
    <View style={styles.maincontainer}>
      {course && (
        <>
          <View style={styles.container}>
            <Image source={horloge} style={{ width: 60, height: 60 }} />
            <View style={styles.containerInfo}>
              <Text style={styles.title}>
                {course.startingDate} - {course.endingDate}
              </Text>
              <Text style={styles.date}>{course.date}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Image source={house} style={{ width: 60, height: 60 }} />
            <View style={styles.containerInfo}>
              <Text style={styles.title}>{course.room}</Text>
              <Text style={styles.date}>Room</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Image source={people} style={{ width: 60, height: 60 }} />
            <View style={styles.containerInfo}>
              <Text style={styles.title}>{course.teacher}</Text>
              <Text style={styles.date}>Speaker</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.containerInfo}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.date}>{course.description}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 0.5,
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 160,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  containerInfo: {
    flex: 1,
    flexDirection: "column",
    height: 70,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
