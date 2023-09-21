import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import CourseInfo from "../../components/CourseInfo";
import { CourseType } from "../../types/types";

const courses = [
  {
    id: 1,
    name: "Starter Pack",
    hourStart: "10:00",
    hourEnd: "11:00",
  },
  {
    id: 2,
    name: "English",
    hourStart: "11:00",
    hourEnd: "12:00",
  },
  {
    id: 3,
    name: "Math",
    hourStart: "12:00",
    hourEnd: "13:00",
  },
];

export default function TabOneScreen() {
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
