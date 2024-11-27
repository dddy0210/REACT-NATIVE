//사용자가 스크롤을 할 때마다 스크롤 위치 상태로 반환해서 특정구간
//도달했을 때 색을 바꾸자 

import {useState} from "react";

export const useScrollPosition = () => {
    //스크롤 위치를 저장할 state
    const[scrollPosition, setScrollPosition] = useState(0)

    //스크롤 위치를 얻어와서 state 저장할 함수 
    const handleScroll = (event) =>{
        setScrollPosition(event.nativeEvent.contentOffset.y)
    }
    //스크롤 위치와 함수를 반환
    return{scrollPosition, handleScroll}
}