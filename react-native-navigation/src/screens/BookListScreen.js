import React from 'react';
import { Pressable } from 'react-native';
import { Text,View, ScrollView } from 'react-native';


const BookListScreen = ({navigation}) => {
    const books = [
        {id:'1', title: '홍길동전', description: '이것은 홍길동전의 설명입니다.'},
        {id:'2', title: '콩쥐팥쥐', description: '이것은 콩쥐팥쥐의 설명입니다.'},
        {id:'3', title: '신데렐라', description: '이것은 신데렐라의 설명입니다.'},
        {id:'4', title: '우투리전', description: '이것은 우투리전의 설명입니다.'},
        {id:'5', title: '운수좋은날', description: '이것은 운수좋은날의 설명입니다.'},
    ]

    return(
        <ScrollView style={{flex : 1, padding:20}}>
            <Text>도서목록</Text>
            {books.map((item)=>(
                <View
                    key={item.id}
                    style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        marginBottom: 10,
                    }}
                >
                    <Text style={{fontSize:18, marginBottom:5}}>{item.title}</Text>
                    <Pressable
                        onPress={() => navigation.navigate('BookDetail',{title:item.title,description:item.description})}
                    >
                        <Text>상세보기</Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

export default BookListScreen;
