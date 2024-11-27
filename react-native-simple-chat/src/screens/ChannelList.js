import React,{useContext, useState, useEffect} from 'react'
import styled,{ThemeContext} from 'styled-components'
import {FlatList} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import moment from 'moment'
import {db} from '../utils/firebase'
import { 
    onSnapshot,
    collection,
    query,
    orderBy } from 'firebase/firestore'



    const Container = styled.View`
    flex:1;
    background-color:${({theme})=>theme.background};
`
const ItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    border-bottom-width:1px;
    border-color:${({theme})=>theme.listBorder};
    padding:15px 20px;
`
const ItemTextContainer = styled.View`
    flex:1;
    flex-direction:column;
`
const ItemTitle = styled.Text`
    font-size:20px;
    font-weight:600;
`
const ItemDescription = styled.Text`
    font-size:16px;
    margin-top:5px;
    color:${({theme})=>theme.listDescription};
`
const ItemTime = styled.Text`
    font-size:12px;
    color:${({theme})=>theme.listTime};
`
//FlatList에는 3가지 속성이 필요하다.
//1. 렌더링할 항목의 데이터를 배열로 전달.
//2. 전달된 배열의 항목을 이용해 항목을 렌더링 하는 함수
//3. 각 항목에 키를 추가하기 위해 고유한 값을 반환하는 함수

// const channels = [];

// //채널을 100개 생성
// for(let idx = 1; idx <= 100; idx++){
//     channels.push({
//         id:idx,
//         title:`title ${idx}`,
//         description:`description ${idx}`,
//         createdAt: idx,
//     })
// }
const getDateOrTime = ts => {
    //현재 시간을 가져와 하루의 시작 지점으로 설정
    //startOf("day") : 2024-11-18 00:00:00;
    const now = moment().startOf("day");
    //주어진 타임스탬프(ts)를 가져와 "하루의 시작 지점 (00:00:00)"으로 설정
    const target = moment(ts).startOf("day");
    //현재 날짜와 주어진 날짜의 시간 차이를 계산하여
    //차이가 0일이면 같은날, 0보다 크면 과거 날짜다.
    //조건에 따라 날짜 형식을 선택 (다른 날은 "MM/DD", 같은 날은 "HH:mm"형식)
    return moment(ts).format(now.diff(target,"day") > 0 ? "MM/DD" : "HH:mm");
}

//React.memo()
//React에서 제공하는 고차 컴포넌트로, 컴포넌트의 렌더링을 최적화 하기위해 사용한다.
//컴포넌트가 받는 props가 변겨오디지 않았다면 리렌더링을 건너뛰게 해주는 기능
const Item = React.memo(({item: {id,title,description,createdAt},onPress})=>{
    const theme = useContext(ThemeContext);
    console.log(`Item : ${id}`);

    return(
        <ItemContainer onPress={() => onPress({id,title})}>
            <ItemTextContainer>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemTextContainer>
            <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.listIcon}
            />
        </ItemContainer>
    )
})

const ChannelList = ({navigation}) => {
    const [channels,setChannels] = useState([]);
    useEffect(()=>{
        //qeury()
        //Firestore에서 데이터 조회를 위한 쿼리를 생성
        //collection()로 참조한 컬렉션에서 orderBy 조건에 따라 정렬된 데이터를 가져온다.
        const collectionQuery = query(
            collection(db,"channels"),
            orderBy("createdAt","desc")
        );
        //실시간 데이터 구독을 시작
        //onSnapshot() : 실시간으로 데이터가 추가, 수정, 삭제되거나 조건에 맞게 변경이 되면
        //자동으로 최신의 데이터를 받을 수 있다.
        const unsubscribe = onSnapshot(collectionQuery, (snapshot)=>{
            const list = [];
            //쿼리의 결과에서 객체를 하나씩 꺼내서 list에 저장
            snapshot.forEach(doc=>{
                list.push(doc.data());
            });
            //state에 저장
            setChannels(list);
        })
        //클린업 함수로, useEffect()가 다시 실행되거나 컴포넌트가 언마운트 될 때 실행
        return () => unsubscribe();
    },[])

    const _handleItemPress = params => {
        navigation.navigate("Channel",params);
    }

    return(
        <Container>
            <FlatList
                //각 항목의 고유 키를 지정하는 함수
                //"id" 필드를 가져와 문자열로 변환하여 key로 사용
                keyExtractor={item => item["id"]}
                //리스트에 렌더링할 데이터 배열
                data={channels}
                //각 항목을 렌더링하는 데 사용할 함수
                //"item"객체를 item 컴포넌트에 전달하고, 클릭스 _handleItemPress를 호출
                renderItem={({item})=>(
                    <Item item={item} onPress={_handleItemPress} />
                )}

                windowSize={3}
            />
        </Container>
    )
}
export default ChannelList