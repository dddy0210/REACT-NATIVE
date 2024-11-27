import React,{useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { images } from "../image";
import Input from "./Input";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
    flex :1;
    font-size:24px;
    color : ${({theme,completed})=> (completed ? theme.done : theme.text)};
    text-decoration-line: ${({completed})=> completed ? 'line-through': 'none'}
`

const Task = ({ item,deleteTask, toggleTask,updateTask })=> {
    //수정상태냐, 아니냐를 가지고 있는 state
    const[isEditing,setIsEditing] = useState(false)

    //수정한 내용을 저장할 state 
    const [text,setText] = useState(item.text)

    const _handleUpdateButtonPress =() => {
        setIsEditing(true)
    }
    const _onSubmitEditing = () => {
        if(isEditing){

            const editedTask = Object.assign({},item,{text})
            setIsEditing(false)
            updateTask(editedTask)
        }
    }

    const _onBlur =() =>{
        if(isEditing){
            setIsEditing(false)
            setText(item.text)
        }
    }
    return isEditing ? (
        <Input
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}
            />
    ) : (
        <Container>
            <IconButton 
            type={item.completed ?images.completed: images.uncomplete } 
            id={item.id}
            onPressOut={toggleTask}
            completed={item.completed}/>

            <Contents completed={item.completed}>{item.text}</Contents>
            {/* 할일 완료시 수정 아이콘 안보이게 <iconButton type={images.update} */}
            {item.completed || (<IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>)}               
            
            <IconButton 
                type={images.delete} 
                id={item.id} 
                onPressOut={deleteTask}
                completed={item.completed}/>
        </Container>
    )
}
Task.PropTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
}

export default Task;