import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AcountContext } from "./context/AcountsContexts/AcountsContext";
import useFetchData from "./context/API";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
const Tab = createBottomTabNavigator();

const Home = () => {
  const [Data, setData] = useState([]);
  const { state, dispatch } = useContext(AcountContext);
  const getAllData = async () => {
    const data = await useFetchData("posts");
    setData(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={(e) =>
          dispatch({ type: "GET_ACOUNTS_DATA", payload: "tested again" })
        }
      >
        <Text> Click Me</Text>
      </TouchableOpacity>
      <FlatList
        data={Data}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={{ height: 200, width: 200 }}
              />
              {/* <Text>{item.subTitle}</Text> */}
              {/* {item.image.map((it) => {
                return (
                  <Image
                    source={{ uri: `http://localhost:5000/${it.url}` }}
                    style={{ height: 200, width: 200 }}
                  />
                );
              })} */}
            </View>
          );
        }}
      />
    </View>
  );
};
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ContactPage}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AboutPage}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
