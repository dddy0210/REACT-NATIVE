import React from 'react';
import {View, Text} from 'react-native'

const BookDetailScreen = ({route}) => {
    const {title, description} = route.params;
    return(
        <View style={{flex : 1, padding : 20}}>
            <Text style={{fontSize: 24, fontWeight:'bold'}}>{title}</Text>
            <Text style={{fontSize: 16, marginTop : 10}}>{description}</Text>
        </View>
    )
}

export default BookDetailScreen;