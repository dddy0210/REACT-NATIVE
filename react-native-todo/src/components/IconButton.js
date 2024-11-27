import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { images } from "../image";

const Icon = styled.Image`
    tint-color: ${({ theme, completed}) => completed ? theme.done: theme.text};
    width:30px;
    height:30px;
    margin:10px;
`
const IconButton = ({type, onPressOut ,id , completed}) => {

    const _onPressOut =() => {
        onPressOut(id)
    }
    return(
        <Pressable onPressOut={_onPressOut}>
            <Icon source={type} completed={completed} />
        </Pressable>
    )
}

IconButton.defaultProps ={
    onPressOut : () => {}
}
//propTypes
//컴포넌트의 props가 예상된 타입을 따르는지 검사 
IconButton.propTypes = {
    type:PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut:PropTypes.func,
    id:PropTypes.string,
    completed:PropTypes.bool,
}


export default IconButton;