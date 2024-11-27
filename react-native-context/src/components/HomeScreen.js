import React, {useContext} from "react";
import { View,Text,Button } from "react-native";
import UserContext from "../contexts/UserContext";

const HomeScreen = () => {
    const {user,login,logout} =useContext(UserContext)

    return(
        <View style={{flex : 1, justifyContent: "center" , alignItems:'center'}}>
            {user ? (
                <>
                <Text>Welcom, {user.name}</Text>
                <Button title = "logout" onPress={logout}/>
                </>
            ):(
                <Button title = "login" onPress={login}/>
            )}                
        </View>
    )
}
export default HomeScreen