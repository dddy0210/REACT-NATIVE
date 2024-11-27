import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    background-color: #ffffff;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

const MainScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>도서 목록 앱</StyledText>
            <Button
                title="도서 목록 보기"
                onPress={() => navigation.navigate('BookList')}
            />
        </Container>
    )
}

export default MainScreen;