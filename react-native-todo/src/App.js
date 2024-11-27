import React, { useEffect, useState } from "react";
import styled,{ThemeProvider} from "styled-components";
import { theme } from "./theme";
import { StatusBar, Dimensions } from "react-native";
import Input from "./components/Input";
import IconButton from "./components/IconButton";
import { images } from "./image"; 
import Task from "./components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import *as SplashScreen from 'expo-splash-screen'

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items:center;
    justify-content:flex-start;
`

const Title = styled.Text`
    font-size:40px;
    font-weight:600;
    color:${({theme})=>theme.main};
    align-self:flex-start;
    margin:20px;
`

const List = styled.ScrollView`
    flex: 1;
    width: ${({width})=> width - 40}px;
`

export default function App(){

    const[newTask, setNewTask] = useState('');

    const[tasks, setTasks] = useState({})

    //내용을 저장하는 메서드
    const _saveTasks = async tasks => {
        try{
            //JSON.stringify : 문자열을 JSON 형식으로 변환
            await AsyncStorage.setItem('tasks',JSON.stringify(tasks));
        }catch(e){
            console.log(e)
        }
    }

    const _loadTask = async () => {
        const loadTasks = await AsyncStorage.getItem('tasks');
        //JSON.parse : JSON형식을 JS객체로 변환
        setTasks(JSON.parse(loadTasks|| '{}'));
    }



    const width = Dimensions.get('window').width;

    const _handleTextChange = text => {
        setNewTask(text);
    }




    //Todo를 추가하는 함수
    const _addTask = () => {
        //ID는 현재 날짜를 문자열로 만들어서 넣는다.
        const ID = Date.now().toString();
        // 'ID' : { id: 'xx', text: 'xxx', completed: false}
        //[ID] : 객체의 키로 사용할 값을 동적으로 설정
        const newTaskObject = {[ID]:{id:ID, text:newTask, completed:false}}
        setNewTask('');
        _saveTasks({...tasks, ...newTaskObject});
    }

    //Todo를 삭제하는 함수
    const _deleteTask = id => {
        //tasks를 복사하여 새로운 객체를 만든다.
        const currentTask = Object.assign({}, tasks);
        //currentTask객체에서 특정 작업을 삭제
        delete currentTask[id];
        _saveTasks(currentTask);
    }


    //완료 여부를 결정하는 함수
    const _toggleTask = (id) => {
        //tasks에 있는 모든 todo를 복사해서 currentTasks에 대입한다.
        const currentTask = Object.assign({}, tasks);
        //클릭한 todo의 completed속성을 true -> false로 false ->true로 바꾼다.
        currentTask[id]['completed'] = !currentTask[id]['completed']
        //tasks 상태에 반영을 시킨다.
        _saveTasks(currentTask);
    }

    //수정 완료된 TODO를 Tasks에 저장하기
    const _updateTask = item => {
        //객체를 복사해온다.
        const currentTask = Object.assign({},tasks);
        //수정된 내용을 저장한다.
        currentTask[item.id] = item;
        _saveTasks(currentTask);
    }

    const _onBlur = () => {
        setNewTask('');
    }

    useEffect(() => {
        _loadTask();
    },[tasks])


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Title>TODO List</Title>
                <Input 
                    placeholder="+Add Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}/>
                <List width={width}>
                    {Object.values(tasks)
                        .reverse()
                        .map(item =>(
                            <Task 
                                key={item.id} 
                                item={item}
                                deleteTask={_deleteTask}
                                toggleTask={_toggleTask}
                                updateTask={_updateTask}/>
                        ))}
                </List>
            </Container>
        </ThemeProvider>
    )
}