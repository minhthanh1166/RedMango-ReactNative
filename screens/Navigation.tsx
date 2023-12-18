import { DarkTheme, DefaultTheme, NavigationContainer, ParamListBase } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import Home from './Home'
import Order from './Order';
import ShoppingCart from './ShoppingCart';
import User from './User';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ColorSchemeName, Pressable, useColorScheme, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

type Props = {}

const Tab = createBottomTabNavigator<ParamListBase>();

const TabsGroup = ({ navigation }: { navigation: any }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerTitleAlign: "center",
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;
                    if (route.name === "@betomoedano") {
                        iconName = focused ? "home" : "home";
                    } else if (route.name === "Order") {
                        iconName = focused ? "isv" : "isv";
                    } else if (route.name === "ShoppingCart") {
                        iconName = focused ? "shoppingcart" : "shoppingcart";
                    } else if (route.name === "User") {
                        iconName = focused ? "user" : "user";
                    }
                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#1DA1F2",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="@betomoedano"
                component={TopTabsGroup}
                options={{
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require("../assets/beto.jpeg")}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                }}
            />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}


// Stack
const HomeStack = createNativeStackNavigator<ParamListBase>();

const HomeStackGroup = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
            {/* <HomeStack.Screen
                name="TweetDetailScreen"
                component={TweetDetailScreen}
                options={{
                    presentation: "modal",
                    headerTitle: "Tweet Details",
                    headerShown: true,
                }}
            /> */}
        </HomeStack.Navigator>
    );
}

// Top Tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: "#1DA1F2",
                },
            }}
        >
            <TopTabs.Screen
                name="main"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <TopTabs.Screen name="Following" component={Order} />
            <TopTabs.Screen name="👀" component={Order} />
        </TopTabs.Navigator>
    );
}

const Drawer = createDrawerNavigator<ParamListBase>();

const DrawerGroup = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeStackGroup} />
            <Drawer.Screen name="Order" component={Order} />
            <Drawer.Screen name="Order1" component={Order} />
            <Drawer.Screen name="Order2" component={Order} />
            <Drawer.Screen name="Order3" component={Order} />
        </Drawer.Navigator>
    );
}

const Navigation: React.FC = (props: Props) => {
    const theme: ColorSchemeName = useColorScheme();
    return (
        <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
            <StatusBar style="auto" />
            <DrawerGroup />
        </NavigationContainer>
    )
}

export default Navigation
