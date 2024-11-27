import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStack';
import { FriendScreen,SettingsScreen } from '../screens/ChatScreens';
const ChatTab = createBottomTabNavigator();

const ChtaTabNavigator = () => {
    return(
        <ChatTab.Navigator>
            <ChatTab.Screen name="Friends" component={FriendScreen}/>       
            <ChatTab.Screen name="Chat" component={ChatStackNavigator}/>       
            <ChatTab.Screen name="Settings" component={SettingsScreen}/>       
        </ChatTab.Navigator>
    )
}

export default ChtaTabNavigator;
