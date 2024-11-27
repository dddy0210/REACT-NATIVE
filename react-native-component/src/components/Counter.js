import React, { useState } from "react";
import { View, Text } from "react-native";
import MyButton from "./MyComponent";

const Counter = () => {
    const [count,setCount] = useState(0);
   

    //숫자 텍스트가 보임
    // +1 이 쓰여있는 버튼(누르면 숫자가 1씩 증가)
    // -1 이 쓰여있는 버튼(누르면 숫자가 1씩 감소)

    return(
        <View style={{alignItems: 'center'}}>
            <Text style={{margin:10,fontSize:40}}>{count}</Text>
            <MyButton title = "+1" onPress={() => setCount(count+1)}/> 
            <MyButton title = "-1" onPress={() => setCount(count-1)}/>
        </View>
    )
}
export default Counter;