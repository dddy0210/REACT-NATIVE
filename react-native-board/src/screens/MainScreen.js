import React,{useContext,useEffect} from 'react'
import { BoardContext } from '../context/BoardContext'
import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import axios from 'axios'

//게시글 1개의 컴포넌트
const PostItem = ({title, author, writingTime}) =>{
    return(
        <View style={styles.postContainer}>
            <View style={styles.postContent}>
                <Text style={styles.postTitle}>{title}</Text>
                <View style={styles.postInfo}>
                    <Text style={styles.postAuthor}>{author}</Text>
                    <Text style={styles.postTime}>{writingTime}</Text>
                </View>
            </View>
        </View>
    )  
}

//메인화면
const MainScreen = ({navigation}) => {
    const {setBoardList,boardList} = useContext(BoardContext);

    return(
        <View style={styles.container}>
            <FlatList
                data={boardList}
                renderItem ={({item}) => (
                    <PostItem
                        title={item.title}
                        author={item.author}
                        writingTime={item.writingTime}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <Pressable style={styles.fab} onPress={()=> navigation.navigate('Write')}>
                <AntDesign name="plus" size={24} color="white"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#1e1e1e',
    },
    postContainer:{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        alignItems:'center',
    },
    postContent:{
        flex:1,
    },
    postTitle:{
        color:'#fff',
        fontSize: 16,
        marginnBottom: 4,
    },
    postInfo:{
        flexDirection:'row',
        alignItems: 'center',
    },
    postAuthor:{
        color:'#aaa',
        marginRight: 10,
    },
    postTime:{
        color:'#aaa',
        marginRight: 10,
    },
    fab:{
        position:'absolute',
        width:56,
        height:56,
        borderRadius:28,
        backgroundColor:'#2ecc71',
        alignItems:'center',
        justifyContent:'center',
        right: 50,
        bottom: 80,
    },

})

export default MainScreen;