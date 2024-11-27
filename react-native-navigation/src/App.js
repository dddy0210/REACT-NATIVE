import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BookStackNavigation from './navigations/BookStack';
import StackNavigation from './navigations/Stack'
import UserStackNavigator from './navigations/UserStack';
import TabNavigator from './navigations/Tab';
import ChatTabNavigator from './navigations/ChatTab';
import DrawerNavigation from './navigations/Drawer';
// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items : center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <ChatTabNavigator />
        </NavigationContainer>
    )
}

export default App;