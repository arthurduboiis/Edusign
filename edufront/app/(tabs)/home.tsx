import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import CourseInfo from "../../components/CourseInfo";
import { CourseType, UserContextType } from "../../types/types";
import { UserContext } from "../../context/UserContext";


export default function TabOneScreen() {
  const [courses, setCourses] = React.useState<CourseType[]>([]);
  const { currentUser, setCurrentUser } = React.useContext(UserContext) as UserContextType;
  const [isPresent, setIsPresent] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch("http://10.104.130.133:8000/courses", {
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
        setCourses(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCourse = (views: CourseType[]): React.JSX.Element[] => {
    return views.map((course: CourseType) => {
      fetch(`http://10.104.130.133:8000/get_presence/${currentUser.id}/${course.id}`, {
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
          setIsPresent(json.presence);
        })
        .catch((error) => {
          console.error(error);
        });
      return <CourseInfo key={course.id} course={course} prenset={isPresent}/>;
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
    maxHeight: 70,
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
