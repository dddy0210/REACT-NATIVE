import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native'
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) =>({
    placeholderTextColor: theme.main
}))`
    width:${({width}) => width - 40}px
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color:${({theme})=>theme.itemBackground};
    font-size: 25px;
    color: ${({theme})=> theme.text};
`
//props props.placeholder or {placeholder}
const Input = ({placeholder, value, onChangeText, onSubmitEditing,onBlur}) => {
    const width = Dimensions.get('window').width;
    return(
        <StyledInput 
            width={width} 
            placeholder={placeholder} 
            maxLength={50} 
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            keyboardAppearance="dark"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}/>
    )
}

//PropTypes를 이용해 전달되는 값들의 타입과 필수 여부를 지정한다.
Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired
}
export default Input;
