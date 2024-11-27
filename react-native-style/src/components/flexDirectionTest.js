import React, {useState} from "react";
import {View, Text, Button} from 'react-native'
import {box_styles} from '../styles'

const FlexDirectionTest = () =>{
    const [direction, setDirection] = useState('row');

    return(
        <View style={box_styles.container}>
            <Text style={box_styles.title}> FlexDirection : {direction} </Text>
            {/* 아래의 View에 감싸진 요소들을 flexDirection으로 방향을 설정 */}
            <View style={[box_styles.boxContainer,{flexDirection:direction}]}>
                <View style={box_styles.box}><Text>1</Text></View>
                <View style={box_styles.box}><Text>2</Text></View>
                <View style={box_styles.box}><Text>3</Text></View>
            </View>
            <View style={box_styles.buttons}>
                <Button title="Row" onPress={()=> setDirection('row')} />
                <Button title="Colum" onPress={()=> setDirection('column')} />
                <Button title="Row Reverse" onPress={()=> setDirection('row-reverse')} />
                <Button title="Colum Reverse" onPress={()=> setDirection('column-reverse')} />
            </View>
        </View>
    )
}

export default FlexDirectionTest;