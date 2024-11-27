import React, { useState} from 'react'
import styled from 'styled-components'
import Counter from './components/Counter'
import Form from './components/Form'
import Button from './components/Button'
import Timer from './components/Timer'
import Length from './components/Length'
import Dog from './components/Dog'
import MakeBread from './components/MakeBread'
import ScrollComponent from './components/ScrollComponent'



const Container = styled.View`
    flex : 1;
    background-color : #fff;
    justify-content : center;
    align-items : center;
`

const App = () => {
    const[isVisible, setIsVisible] =useState(true)
    return (
    <Container>
        {/* {isVisible && <Form/>} */}
        {/* 버튼을 누르면 Form컴포넌트를 보였다가 숨겼다가 만들기 
        버튼의 타이틀은 hide 또는 show로 바꾸기 */}
        {/* <Button 
          title={isVisible ? 'Hide' : 'Show'}
          onPress={() => setIsVisible(prev => !prev)}
        /> */}
        {/* <Timer />  */}
        {/* <Length /> */}
        {/* <Dog />
        <MakeBread />  */}
        {/* <ScrollComponent /> */}
        <Counter />
    </Container>)
}

export default App;