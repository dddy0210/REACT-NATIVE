import React,{useState, useMemo} from "react";
import styled from "styled-components";
import Button from "./Button";

//문자열의 길이를 계산하는 컴포넌트 만들기
const StyledText = styled.Text`
    font-size : 24px;
`

const list = ['JavaScript','Expo','Expo','React Native']

let idx = 0;
const Length = () => {
    const [text,setText] = useState(list[0])
    //const [length,setLength] = useState(list[0].length)

    const getLength = text => {
        console.log(`Target Text: ${text}`)
        return text.length 
    }

    const _onPress =() => {
        ++idx;
        if(idx < list.length) setText(list[idx])
    }

    //text의 값이 바뀔때만 함수가 실행됨 
    const length = useMemo(()=>getLength(text),[text]);

    return(
        <>
            <StyledText>Text : {text}</StyledText>
            <StyledText>Length : {length}</StyledText>
            <Button title="get Length" onPress={_onPress}/>

        </>
    )

}

export default Length;