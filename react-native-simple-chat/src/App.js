import React,{useEffect, useState} from "react";
import { StatusBar, Image } from "react-native";
import {Asset} from 'expo-asset'//이미지,오디오,동영상 등 다양한 리소스를 관리하고 미리 로드할 수 있도록 도와준다.
import * as Font from  'expo-font';//사용자 정의 글꼴을 미리 로드하고 사용할 수 있다.
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from "styled-components";
import {theme} from './theme'
import Navigation from "./navigations";
import { images } from './utils/images';
import { ProgressProvider,UserProvider } from "./contexts";


//스플래시 화면이 자동으로 숨겨지지 않도록 설정하여 초기화 작업이 완료될 때까지 유지
SplashScreen.preventAutoHideAsync();

const cacheImages = images => {
    return images.map(image => {
        if(typeof image === 'string'){
            return Image.prefetch(image); //URL로 제공된 이미지의 경우, Image.prefetch로 캐싱
        } else {
            return Asset.fromModule(image).downloadAsync();//로컬파일인 경우, expo-asset에서 제공하는 다운로드 방식으로 캐싱
        }
    })
}

const cacheFonts = fonts => {
    //폰트 캐싱 함수 : 폰트 배열을 받아 각 폰트를 로드
    return fonts.map(font => Font.loadAsync(font));
}

const App = () => {
    const[isReady, setIsReady] = useState(false); //초기화 여부를 추적하는 상태 변수

    useEffect(()=>{
        const prepareResources = async () => {
            try {
                await _loadAssets();//리소스를 로드하는 비동기 함수 호출
            } catch (error) {
                console.log(error);
            } finally{
                setIsReady(true); //로딩이 완료되면 isReady를 true로 변경
                await SplashScreen.hideAsync();//스플래시 화면 숨김
            }
        }
        prepareResources();
    },[]);

    const _loadAssets = async() => {
        const imageAssets = cacheImages([
            require('../assets/splash.png'),
            ...Object.values(images),
        ]);//로컬 스플래시 이미지 캐싱
        const fontAssets = cacheFonts([]); //추가적인 폰트가 있다면 배열에 추가 가능

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    if(!isReady){
        return null;
    }
    return(
        <ThemeProvider theme={theme}>
            <UserProvider>
                <ProgressProvider>
                {/* dark-content 글자와 아이콘이 어두운 색상으로 나온다.*/}
                    <StatusBar barStyle='dark-content' />
                 <Navigation />
             </ProgressProvider>
            </UserProvider>
        </ThemeProvider>
    )
}

export default App;