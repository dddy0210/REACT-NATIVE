import React,{useContext, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile,ChannelList } from "../screens/index";
import {MaterialIcons} from "@expo/vector-icons"
import { ThemeContext } from "styled-components";

const Tab = createBottomTabNavigator();

//아이콘 컴포넌트
const TabBarIcon = ({focused, name }) => {
    const theme = useContext(ThemeContext);
    return(
        <MaterialIcons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor: theme.tabInactiveColor}
        />
    )
}

//route
//state
//{"index":0,"routeName":["Channel List","Profile"],"type":"tab"...}
const MainTab = ({navigation,route}) => {
    const theme = useContext(ThemeContext);

    useEffect (()=>{
        const titles = route.state?.routeNames||["Channels"];
        const index = route.state?.index||0;
        navigation.setOptions({
            headerTitle:titles[index],
        });
    },[route])
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:theme.tabActiveColor,
                tabBatInactiveTintColor:theme.tabInactiveColor,
                headerTitleAlign:"center",
            }}
        >       
            <Tab.Screen 
                name="Channels" 
                component={ChannelList} 
                options={{
                    tabBarIcon:({focused}) => 
                        TabBarIcon({focused,name:focused?"chat-bubble":"chat-bubble-outline"}),
                    headerRight:()=>(
                        <MaterialIcons 
                            name="add"
                            size={26}
                            style={{margin:10}}
                            onPress={()=>navigation.navigate("Channel Creation")}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile} 
                options={{
                    tabBarIcon:({focused}) => 
                        TabBarIcon({focused,name:focused?"person":"person-outline"})
                }}
            />
        </Tab.Navigator>
    )
}
export default MainTab;