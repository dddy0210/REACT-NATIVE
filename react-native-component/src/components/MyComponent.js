import PropTypes from "prop-types";
import React from "react";//리액트를 불러와서 사용할 수 있게 해주는 코드
import { Pressable, Text } from "react-native"; 
//리액트 네이티브에서 제공하는 pressable,text 컴포넌트를 추가


const MyButton = (props) => {
    //MyButton.defaultProps ={
       //title:'Button'
    //}
    MyButton.prototype ={
        title:PropTypes.string.isRequired,
        onPress:PropTypes.func.isRequired
    }
    return(
        <Pressable
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8
        }}
        onPress={()=>props.onPress()}
        >
            <Text style={{color : 'white',fontSize : 24}}>{props.children || props.title}</Text>
        </Pressable>
    )
}

export default MyButton;