import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import CourseInfo from "../../components/CourseInfo";
import { CourseType } from "../../types/types";

const courses = [
  {
    id: 1,
    name: "Starter Pack",
    startingDate: "10:00",
    endingDate: "11:00",
    room: 1,
    teacher: "M. Dupont",
    date: "2021-03-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl ultricies nunc, vitae ultricies nisl nunc eget nisl. Nulla facilisi. Sed euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, vitae ultricies nisl nunc eget nisl. Nulla facilisi. Sed euismod",
  },
  {
    id: 2,
    name: "English",
    startingDate: "11:00",
    endingDate: "12:00",
    room: 2,
    teacher: "M. Dupont",
    date: "2021-03-01",
    description: "copilot pue"
  },
  {
    id: 3,
    name: "Math",
    startingDate: "12:00",
    endingDate: "13:00",
    room: 3,
    teacher: "M. Dupont",
    date: "2021-03-01",
    description: "copilot pue"
  },
];

export default function TabOneScreen() {

  React.useEffect(() => {
    fetch("http://10.104.130.133:8000/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        },
        })
        .then((response) => {
          if( response.status === 200 ) {
            return response.json();
          } else {
            console.log("error not courses found");
          }
        })
        .then((json) => {
          console.log(json);
          // setCourses(json);
        })
        .catch((error) => {
          console.error(error);
        });
        
  }, []);


  const renderCourse = (views: CourseType[]): React.JSX.Element[] => {
    return views.map((course: CourseType) => {
      return <CourseInfo key={course.id} course={course} />;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Username</Text>

      <View style={styles.header}>
        <Text style={styles.subtitle}>Signature</Text>
        <View style={styles.separator} />
      </View>

      {renderCourse(courses)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    flex: 1,
    flexBasis: 2,
    maxHeight:70,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "black",
  },
  separator: {
    borderBottomColor: "#FFC107",
    marginTop: 5,
    borderBottomWidth: 2,
    width: 200,
  },
});
