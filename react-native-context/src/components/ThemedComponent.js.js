import React, {useContext} from "react";
import {StyleSheet,View,Text, Button} from 'react-native'
import {ThemeContext} from "../contexts/ThemeContext";


const ThemedComponent =() => {
    
    const {isDarkMode, toggleTheme} = useContext(ThemeContext)

    return(
        <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Button title = "Toggle Theme" onPress={toggleTheme} />
        </View>
    )
}
const styles = StyleSheet.create({
    darkContainer : {flex:1, backgroundColor: '#333',justifyContent:'center',alignItems:'center'},
    lightContainer : {flex:1, backgroundColor: '#fff',justifyContent:'center',alignItems:'center'},
    darkText: {color:'#fff'},
    lightText: {color:'#000'},
})

export default ThemedComponent