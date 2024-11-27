import React,{useState, useEffect, useLayoutEffect, useContext} from 'react';
import styled,{ThemeContext} from 'styled-components';
import { Text,FlatList,Alert } from 'react-native';
import {db, createMessage, getCurrentUser} from '../utils/firebase'
import {Input} from '../components'
import { GiftedChat,Send } from 'react-native-gifted-chat';
import {MaterialIcons} from '@expo/vector-icons'
import{
    collection,
    onSnapshot,
    query,
    doc,
    orderBy,
} from 'firebase/firestore'

const Container = styled.View`
    flex: 1;
    background-color : ${({theme}) => theme.background};
`

const SendButton = props => {
    const theme = useContext(ThemeContext);
    return(
        <Send
            {...props}//부모로부터 전달받은 모든 props를 전달함
            disabled={!props.text}//props.text가 비어있을 경우 버튼이 비활성화됨
            containerStyle={{
                width:44,
                height:44,
                alignItems:'center',
                justifyContent:'center',
                marginHorizontal: 4,
            }}
        >
            <MaterialIcons
                name="send"
                size={24}
                color={props.text ? theme.sendButtonActive : theme.sendButtonInactive}
            />
        </Send>
    )
}

const Channel = ({navigation,route}) => { 
    const theme = useContext(ThemeContext);
    const [message, setMessage] = useState([]);
    const {uid, displayName, photoURL} = getCurrentUser();

    //데이터베이스에서 데이터를 조회
    useEffect(() => {
        //firestore에서 'channels' 컬렉션 아래 특정 채널의 문서를 참조하는 객체 생성
        //route.params.id는 현재 경로에서 전달된 id 파라미터를 사용해 특정 채널을 식별한다.
        const docRef = doc(db, 'channels', route.params.id);

        //docRef.path를 사용해 'channels/{id}/messages'경로의 하위 컬렉션을 참조함
        //messages 컬렉션의 문서들을 createdAt 필드를 기준으로 내림차순으로 정렬
        const collectionQuery = query(
            collection(db, `${docRef.path}/messages`),
            orderBy('createdAt','desc')
        );
        //collectionQuery에는 특정 메시지 컬렉션을 시간순으로 가져올 준비를 한다.

        //onSnapshot은 지정된 쿼리에 대해 실시간 데이터 반영
        //데이터 변경이 발생하면 'snapshot'객체에 변경된 데이터를 전달함
        const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
            console.log('Snapshot size:', snapshot.size); // 문서 개수 확인
            snapshot.forEach((doc) => {
                console.log('Document data:', doc.data()); // 각 문서 데이터 출력
            });
        
            //snapshot.docs는 문서 배열이고, 각 문서에서 데이터를 추출하여 배열로 변환.
            const list = snapshot.docs.map((doc) => doc.data());
            setMessage(list);
        });
        return () => unsubscribe();
    },[])

    //헤더를 각각의 채팅방의 title로 지정
    useLayoutEffect(() => {
        navigation.setOptions({headerTitle: route.params.title || 'Channel'})
    },[])

    const _handleMessageSend = async messageList => {
        const newMessage = messageList[0];
        console.log('message : ',newMessage);
        try {
          await createMessage({ channelId: route.params.id, message: newMessage });
        } catch (e) {
          Alert.alert('Send Message Error', e.message);
        }
      };
    
      return (
        <Container>
          <GiftedChat
            listViewProps={{
              style: { backgroundColor: theme.background },
            }}
            placeholder="Enter a message..."
            messages={message}
            user={{ _id: uid, displayName, avatar: photoURL }}
            onSend={_handleMessageSend}
            alwaysShowSend={true}
            textInputProps={{
              autoCapitalize: 'none',
              autoCorrect: false,
              textContentType: 'none', // iOS only
              underlineColorAndroid: 'transparent', // Android only
            }}
            multiline={false}
            renderUsernameOnMessage={true}
            scrollToBottom={true}
            renderSend={props => <SendButton {...props} />}
           //text: 현재 입력창에 넘어간 텍스트
           //onsend:메시지를 전송할 때 호출되는 함수
           //messageidgenerator: 메시지의 고유 id를 생성하는 함수
           //user: 현재사용자정보 
           //placeholder : 입력창에 기본 안내 텍스트 
           //disabled : 전송 버튼의 활성화 상태 
           //containerstyle:전송 보튼의 스타일
          />
        </Container>
      );
}

export default Channel;