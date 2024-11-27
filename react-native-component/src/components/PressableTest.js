import React from "react";
import { View,Text,Pressable } from "react-native";

const Button = (props) => {
    return (
        <Pressable
          style={{padding: 10, backgroundColor: '#1abc9c'}}
          onPressIn={() => console.log('Press In')}
          onPressOut={() => console.log('Press Out')}
          onPress={() => console.log('Press')}
          onLongPress={() => console.log('Long Press')}
          delayLongPress={3000}
          
          //터치 이벤트가 활성화된 상태를 유지하는 영역 
          //top,bottom,right,left 네가지 속성을 가진다.
          //속성의 값은 픽셀단위로 정의된다. 
          //hitslop : 모든 방향으로 50px씩 터치 가능 영역 확장 
          pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
          hitSlop={50}
          > 
          <Text style={{padding: 10, fontSize: 30}}>{props.title}</Text>
        </Pressable>
      );
    };


    export default Button

