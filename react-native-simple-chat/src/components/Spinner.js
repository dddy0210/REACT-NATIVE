import {useContext} from 'react'
import { ActivityIndicator } from 'react-native'
import styled ,{ThemeContext} from 'styled-components'

//ActivityIndicator : 로딩중임을 시각적으로 표현할 때 사용하는 컴포넌트
//스피너 모양의 애니메이션을 제공, 데이터를 불러오는 동안 사용자에게 진행상태 알려주는데 유용 

const Container = styled.View`
    position : absolute;
    z-index : 2;
    opacity : 0.3;
    width : 100%;
    height : 100%;
    justify-content : center;
    background-color : ${({theme})=> theme.spinnerBackground}    
`
const Spinner =() =>{
    const theme = useContext(ThemeContext)
    return(
        <Container>
            <ActivityIndicator size={'large'} color={theme.spinnerIndicator}/>
        </Container>
    )
}

export default Spinner;