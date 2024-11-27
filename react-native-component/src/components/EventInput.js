import React,{useState} from "react";
import { View,Text,TextInput } from "react-native";

const EventInput = () => {

    //text를 저장할 state
    const [text,setText] = useState('');
    
    //event.nativeEvent를 통해 문자열을 얻어와야한다.
    const _onChange = event => (event.nativeEvent.text);
    //컴포넌트의 텍스트가 변경됐을 때 문자열만 인수로 전달 
    const _onChangeText = text => setText(text);

    return(
        <View>
            <Text style={{margin:10, fontSize: 30}}>text: {text}</Text>
            <TextInput
                style={{borderWidth:1, padding:10, fontSize:20}}
                placeholder="Enter the Text"
                //onChange={_onChange}/>  
                onChangeText={_onChangeText}
                />
        </View>
    )

}
export default EventInput;