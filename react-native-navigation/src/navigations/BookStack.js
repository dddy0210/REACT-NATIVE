import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/BookMainScreen';
import BookListScreen from '../screens/BookListScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

//1. 스택을 만든다.
const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return(
    // 2. 화면을 담기 위한 Navigator를 만든다.
    <Stack.Navigator>
        {/* 3. 화면을 담는다 */}
        <Stack.Screen name="BookMain" component={MainScreen} />
        <Stack.Screen name="BookList" component={BookListScreen}/>
        <Stack.Screen name="BookDetail" component={BookDetailScreen}/>
    </Stack.Navigator>
    )
}

export default BookStackNavigation;