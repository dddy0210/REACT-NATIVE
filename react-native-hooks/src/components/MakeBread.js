import React,{useState} from "react";
import { View,Text,Button } from "react-native";

const MakeBread = () => {
    const[coffeeStatus, setCoffeeStatus ]=useState('커피 대기 중..')
    const[breadStatus, setBreadStatus ]=useState('빵 대기 중..')
    const[breakfastStatus, setBreakfastStatus ]=useState('아직 식사 준비되지 않음')

    const makeCoffee = async () => {
        setCoffeeStatus('커피 만들기 시작!')
        await new Promise(resolve => setTimeout(resolve, 2000))// 2초 기다림 
        setCoffeeStatus('커피 완성')
    }

    const makeBread = async () => {
        setBreadStatus('빵 굽기 시작!')
        await new Promise(resolve => setTimeout(resolve, 3000))// 3초 기다림 
        setBreadStatus('빵 완성')
    }

    const makeBreakfast = async () => {
        setBreakfastStatus('아침 식사 준비중 ...')
        await makeCoffee() //커피만들기
        await makeBread() //빵 만들기 
        setBreakfastStatus('아침 식사 완성 ')
    }

    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent:'center'}}>
            <Text style={{fontSize:24, marginBottom:10}}>{coffeeStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breadStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breakfastStatus}</Text>
            <Button title="아침 식사 준비하기" onPress={makeBreakfast}/>
        </View>
    )
}

export default MakeBread;
