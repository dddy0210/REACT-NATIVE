//여기 하나에 컴포넌트 3개 만들어서 내보내기
import React from "react";
import {View, Text, Pressable, ScrollView} from 'react-native'
import styled from "styled-components";

const StyledView = styled.View`
    flex: 1;
    justify-content : center;
    align-items : center;
`

const StyledText = styled.Text`
    font-size:20;
    margin-bottom : 20;
`

//HomeScreen 컴포넌트
export const HomeScreen = ({navigation}) => {
    return(
        <StyledView>
            <StyledText>
                유저 프로필 앱
            </StyledText>
            <Pressable
                onPress={() => navigation.navigate('UserList')}
            >
                <Text>유저 목록 보기</Text>
            </Pressable>
        </StyledView>
    )
}

//UserListScreen 컴포넌트
export const UserListScreen = ({navigation}) => {
    const users = [
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
    ];
    return(
        <ScrollView style={{flex:1, padding:20}}>
            <StyledText>유저 목록</StyledText>
            {users.map((user) => (
                <View
                    key={user.id}
                    style={{
                        padding:10,
                        borderBottomWidth:1,
                        borderBottom: 10
                    }}
                >
                    <Text style={{fontSize: 18, marginBottom:5}}>{user.name}</Text>
                    <Pressable
                        onPress={() => 
                            navigation.navigate('UserProfile',{
                                name: user.name,
                                email:user.email
                            })
                        }
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: '#3498db',
                            borderRadius: 5,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color:'white'}}>프로필 보기</Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

//UserProfileScreen 컴포넌트
export const UserProfileScreen = ({route})=>{
    const {name,email} = route.params;
    return(
        <View style={{flex: 1, padding:20}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>{name}</Text>
            <Text style={{fontSize:16, marginTop:10}}>{email}</Text>
        </View>
    )
}
