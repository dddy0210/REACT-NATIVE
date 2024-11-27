import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, UserListScreen,UserProfileScreen } from '../screens/UsersScreens';

//1. 스택 생성
//생성된 스택으로부터 Navigator,Screen 컴포넌트를 사용할 수 있다.
const UserStack = createStackNavigator();

const UserStackNavigator = () => {
    return(
        <UserStack.Navigator>
            <UserStack.Screen name="UserHome" component={HomeScreen}/>
            <UserStack.Screen name="UserList" component={UserListScreen}/>
            <UserStack.Screen name="UserProfile" component={UserProfileScreen}/>
        </UserStack.Navigator>
    )
}

export default UserStackNavigator;