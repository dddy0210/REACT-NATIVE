import React from 'react'
import { View, Text } from "react-native";
const Total = ({arr}) => {
    
const sum = arr.reduce((a, num) => a+num)

  return (
    <View>
        <Text>Total : {sum}</Text>
    </View>
  )
}

export default Total