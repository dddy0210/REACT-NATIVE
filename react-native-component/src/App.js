import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyComponent';
import Counter from './components/Counter';
import ToggleText from './components/Toggle';
import Total from './components/Total';
import ItemList from './components/ItemList';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import Button from './components/PressableTest';

const App = () => {

    let arr=[1,2,3,4,5,6,7,8,9,10]
    let fruits = ['사과','바나나','당근','키위','복숭아','딸기']

    return(
        <View
            style={{
                flex:1,
                backgroundColor:'#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* <Text style={{fontSize:30, marginBottom:10}}>Button Component</Text>
            <Button title="button" color="black" onPress={() => alert('Click!!')} />  
            <Components  title="Button" onPress={() => alert('props')}/> */}
            {/* 부모 컴포넌트에서 자식 컴포넌트를 사용하면서 속성으로 props를 전달하는 방법외에
            컴포넌트 사이에서 값을 입력해서 전달하는 방법도 있다. */}
            {/* <Components  title="Button" onPress={() => alert('children')}>Children Props</Components>
            <Components onPress={() => alert('default')} /> */}
            {/* <Counter /> */}
            {/* <Total  arr={arr}/>
            <ItemList fruits={fruits} />
            <ToggleText /> 
            <EventButton />
            <EventInput />*/}
            <Button title = "pressable" />
        </View>
        
    )
}

export default App;