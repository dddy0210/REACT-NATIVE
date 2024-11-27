//Toggle Text 버튼을 누를 때마다 
//<p>This text can be toggled</p>
//보였다 안보였다 하게 만들기

import React, {useState} from 'react'
import { View, Text, Button } from "react-native";

const ToggleText = () => {

  const [use, setUse] = useState(false);

  return (
    <View>
        {use && <Text style={{marginBottom : 30, textAlign:'center'}}>This text can be toggled</Text>}
        <Button title='Toggle Text' onPress={() => setUse(!use)}/>
    </View>
  )
}

export default ToggleText