import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BoardStack from './navigation/BoardStack';
import { BoardContext } from './context/BoardContext';
 

const App = () => {

    const [boardList, setBoardList] = useState([
        {
          id: '1',
          title: '게시글1',
          author: '작성자1',
          writingTime: '09:00',
          content:'게시글 내용1',
        },
        {
          id: '2',
          title: '게시글2',
          author: '작성자2',
          writingTime: '08:56',
          content:'게시글 내용2',
        },
        {
          id: '3',
          title: '게시글3',
          author: '작성자3',
          writingTime: '08:55',
          content:'게시글 내용3',
        },
        // 추가 데이터...
      ])
    return(
        <BoardContext.Provider value={{boardList, setBoardList}}>
        <NavigationContainer>
                <BoardStack />
        </NavigationContainer>
        </BoardContext.Provider>
    );
}

export default App;