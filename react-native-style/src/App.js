import React, { useState } from 'react'
import {ScrollView, Text, View} from 'react-native'
import { textStyles, viewStyles } from './styles'
import { Contents, Footer, Header } from './components/Layout'
import FlexDirectionTest from './components/flexDirectionTest'
import JustifyContentTest from './components/justifyContentTest'
import AlignItemsTest from './components/AlignItemsTest'
import ShadowBox from './components/ShadowBox'
import StyledComponent from './components/StyledComponent'
import Button from './components/Button'
import styled,{ ThemeProvider } from 'styled-components'
import Input from './components/Input'
import { theme,lightTheme, darkTheme } from './theme'
import { Switch } from 'react-native'

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`
export default function App(){

  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

    return(
        //ThemeProvider에 정의한 props는 하위 컴포넌트에서 받아서 사용할 수있다.
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="Hanbit"/>
                <Button title="React Native"/>
                <Input borderColor="#3498db"/>
                <Input borderColor="#9b59b6"/>
            </Container>
        </ThemeProvider>
    )
}
