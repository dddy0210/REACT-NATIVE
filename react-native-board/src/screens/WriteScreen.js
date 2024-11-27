import React, {useState,  useContext} from 'react'
import { BoardContext } from '../context/BoardContext'
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native'
import { useLayoutEffect } from 'react'
const WriteScreen = ({navigation}) => {

    const {boardList,setBoardList} = useContext(BoardContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if(!title || !author || !content){
            alert('모든 필드를 입력해주세요');
            return;
        }

        const newBoardItem = {
            id: boardList.length+1,
            title,
            author,
            content,
            writingTime: new Date().toISOString(),
        }

        setBoardList([...boardList, newBoardItem]);
        alert('게시물이 저장되었습니다.');
        navigation.navigate('Main');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => (
                <Pressable style={{marginRight:20}} onPress={handleSave}>
                    <View style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>등록</Text>
                    </View>
                </Pressable>
            )
        })
    })
    
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.label}>제목</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='제목을 입력하세요' 
                    placeholderTextColor='#aaa'
                    onChangeText={setTitle}
                    value={title}
                />
                    
                <Text style={styles.label}>작성자</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='작성자를 입력하세요' 
                    placeholderTextColor='#aaa'
                    value={author}
                    onChangeText={setAuthor}/>
                <Text style={styles.label}>내용</Text>
                <TextInput 
                    style={[styles.input, styles.contentInput]} 
                    placeholder='내용을 입력하세요' 
                    placeholderTextColor='#aaa' 
                    multiline
                    value={content}
                    onChangeText={setContent}/>
            </View>
            <Text>WriteScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1e1e1e',
        padding: 16,
    },
    contentContainer:{
        flex: 1,
    },
    label:{
        color:'#fff',
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        padding: 12,
        borderRadius: 8,
        color:'#fff',
        marginBottom: 16,
    },
    contentInput: {
        height:100,
        textAlignVertical: 'top',
    },
    saveButton:{
        backgroundColor: '#2ecc71',
        paddingVertical:8,
        paddingHorizontal: 16,
        borderRadius:8,
    },
    saveButtonText:{
        color:'#fff',
        fontSize:16,
    }
})

export default WriteScreen;