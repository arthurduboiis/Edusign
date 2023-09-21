import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { ExternalLink } from "../../components/ExternalLink";
import { Pressable, useColorScheme, Image } from "react-native";
import logoEdu from "../../assets/images/logoEduPlume.jpg";
import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function HelpBarIcon() {
  return (
    <Link href="https://help.edusign.fr/fr/" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  )
}

function HeaderLeftIcon() {

  return <Image source={logoEdu} style={{ width: 25, height: 25, marginLeft: 15 }} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShadowVisible: false,
        headerTitle: "",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => <HelpBarIcon />,
          headerLeft: () => <HeaderLeftIcon />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => <TabBarIcon name="line-chart" color={color} />,
          headerRight: () => <HelpBarIcon />,
          headerLeft: () => <HeaderLeftIcon />,
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: "Documents",
          tabBarIcon: ({ color }) => <TabBarIcon name="folder" color={color} />,
          headerRight: () => <HelpBarIcon />,
          headerLeft: () => <HeaderLeftIcon />,
        }}
      />
       <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerRight: () => <HelpBarIcon />,
          headerLeft: () => <HeaderLeftIcon />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerRight: () => <HelpBarIcon />,
          headerLeft: () => <HeaderLeftIcon />,
        }}
      />
    </Tabs>
  );
}
