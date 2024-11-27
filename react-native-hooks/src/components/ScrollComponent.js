import React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";
import { useScrollPosition } from "../hooks/useScrollPosition";

const ScrollComponent = () => {
    const {scrollPosition, handleScroll} = useScrollPosition();

    return(
        <ScrollView
            style={[styles.container, {backgroundColor : scrollPosition >100 ? 'lightblue' : 'lightcoral'}]}
            onScroll={handleScroll}
        >
            <View style={styles.content}>
                <Text style ={styles.text}>스크롤 위치에 따라 배경색 바뀜!</Text>
                {/* toFixed(자리수) : 지정된 소수점 자리수에서 반올림 해주고 문자열로 반환하는 메서드 */}
                <Text style ={styles.text}>현재 스크롤 위치: {scrollPosition.toFixed(0)}px</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    content : {
        height: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize : 24,
        color : 'white',
        textAlign: 'center',
        marginVertical: 20,
    }
})

export default ScrollComponent