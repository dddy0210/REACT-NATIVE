import { createContext, useState } from "react";

//1.context 생성 및 기본 값 설정 
//기본값으로 user객체와 dispatch함수를 설정 
//user는 사용자의 정보, dispatch는 이름을 업데이트하는 함수로 사용 예정
const UserContext = createContext({
    user : {name:''},
    dispatch: ()=>{},
})

//2.userprovider 컴포넌트를 정의
//usercontext의 값을 제공하는 역할을 한다.
//하위 컴포넌트들이 usercontext에 접근할 수 있게 해줌 
const UserProvider =({children}) => {
    const [name, setName] =useState('dy kim')
//value 객체에는 현재 user의 상태와 상태를 업데이트 할 함수 dispatch를 포함
//dispatch에다가 setname함수를 전달하여 하위 컴포넌트들도 이름을 업데이트 할 수있도록 함 
    const value ={user : {name}, dispatch : setName}

    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
}
//3.consumer 컴포넌트 정의 
//Userconsumer는 usercontext.consumer를 의미 
//하위 컴포넌트에서 userconsumer를 사용하여 usercontext의 값을 접근할 수 있음 
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}
export default UserContext