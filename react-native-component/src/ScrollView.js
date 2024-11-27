import React from "react";
import {  ScrollView, View, Text, StyleSheet  } from "react-native";

export default function SV(){
    return(
    <ScrollView style={styles.container}>
        {Array.from({ length: 20 }, (_, i) => (
        <View key={i} style={styles.item}>
          <Text>Item {i+1}</Text>
        </View>
        ))}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center'
    }
  });