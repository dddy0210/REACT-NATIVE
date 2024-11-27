import React from 'react'
import { View, Text } from "react-native";
const ItemList = ({fruits}) => {

  return (
    <View>
    {fruits.map((item, index) => (
      <Text key={index}> {item} </Text>
    ))}
  </View>
);
}

export default ItemList