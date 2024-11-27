import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatListScreen,ChatDetailScreen } from "../screens/ChatScreens";

const ChatStack = createStackNavigator();

const ChatStackNavigator = () => {
    return(
    <ChatStack.Navigator>
        <ChatStack.Screen name="ChatList" component={ChatListScreen}/>
        <ChatStack.Screen 
            name="ChatDetail" 
            component={ChatDetailScreen}/>
    </ChatStack.Navigator>
    )
}

export default ChatStackNavigator;