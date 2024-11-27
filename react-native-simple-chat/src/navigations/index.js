import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { Spinner } from '../components'
import { ProgressContext, UserContext } from '../contexts'

const Navigation = () => {
    //useContext(Context)
    //Consumer대신 Provider에서 제공하는 value를 쓸 수 있게 해주는 hook
    const {inProgress} = useContext(ProgressContext);
    const {user} = useContext(UserContext);
    return(
        <NavigationContainer>
            {user?.uid && user?.email ? <MainStack /> : <AuthStack />}
            {/* 네비게이션 컨테이너의 최상위에 스피너를 배치하여, 특정 화면이 아닌
            네비게이션 전반에서 발생하는 로딩 상태를 한 번에 관리하도록 구성 */}
            {inProgress &&<Spinner />}
        </NavigationContainer>
    )
}
export default Navigation
