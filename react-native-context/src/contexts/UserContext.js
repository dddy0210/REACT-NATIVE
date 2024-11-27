//UserContext로 로그인 상태 관리
//HomeScreen.js에서 로그인 되었으면 welcome 홍길동님
//로그아웃 버튼 or 
//로그인버튼 나오게 만들기 
import React, {createContext, useState}  from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user,setUser] = useState(null)
 
    const login = () => setUser({name:'da ye'})
    const logout = () => setUser(null)

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
        )
}

export default UserContext;