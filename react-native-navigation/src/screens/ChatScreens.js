import React from "react";
import { Text,Button } from "react-native";

//탭 네비게이션에서 사용할 화면
export const FriendScreen = () => {
    return(
        <Text> 친구 목록입니다.</Text>
    )
}

export const SettingsScreen = () => {
    return(
        <Text> 설정화면입니다.</Text>
    )
}

//스택 네비게이션에서 사용할 화면
export const ChatListScreen = ({navigation}) => {
    return(
        <>
            <Button 
                title="채팅방 이동하기" 
                onPress = {() => navigation.navigate('ChatDetail')}>
               
            </Button>
        </>
    )
}

export const ChatDetailScreen = () => {
    return(
        <>
            <Text>채팅방화면입니다.</Text>
        </>
    )
}

