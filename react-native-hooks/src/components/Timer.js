import React, {useEffect,useRef,useState} from "react";
import { View, Text } from "react-native";
import Button from "./Button";

const Timer = () => {
    const[count, setCount] = useState(0)
    const timer = useRef(0)

    useEffect(() => {
        const interval =setInterval(()=> {
            timer.current += 1;
            console.log("Timer : ", timer.current)
        
        },1000)
        
        return () => clearInterval(interval)
},[])
    
    return (<View>
                <Text>
            Count : {count}
                </Text>
                <Button
                    title="+"
                    onPress={()=> setCount(prev=>prev+1)}
                    />
            </View>)
}

export default Timer