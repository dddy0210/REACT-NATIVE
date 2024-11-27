import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { Button, Image, Input } from '../components'
import { logout,getCurrentUser,updateUserInfo } from '../utils/firebase'
import { UserContext,ProgressContext } from '../contexts'
import { Alert } from 'react-native'
import { ThemeContext } from 'styled-components'

const Container = styled.View`
    flex : 1;
    background-color : ${({theme})=> theme.background};
    justify-content: center;
    align-items : center;
    padding :  0 20px; 
`

const Profile = () => {

    const {dispatch} = useContext(UserContext);
    const {spinner} = useContext(ProgressContext);
    const theme = useContext(ThemeContext)
    
    //현재 로그인한 유저의 정보를 가져온다.
    const user = getCurrentUser()
    //유저의 프로필 사진 url 가져와서 state에 저장 
    const [photoUrl, setPhotoUrl] =useState(user.photoUrl)

    const _handleLogoutButtonPress = async () => {
        try {
            spinner.start()
            await logout();
        } catch (error) {
            console.log('[Profile] logout : ',error.message);
        } finally{
            dispatch({});
            spinner.stop()
        }
    }
    //수정된 이미지 업로드 
    const _handlePhotoChange = async url => {
        try {
            spinner.start()
            const photoUrl = await updateUserInfo(url)
            setPhotoUrl(photoUrl)
        } catch (error) {
            Alert.alert('Photo Error', error.message)            
        }finally{
            spinner.stop()
        }
    }

    return(
        <Container>
            <Image
                url={photoUrl}
                onChangeImage={_handlePhotoChange}
                showButton
                rounded
                />
            <Input label="Name" value={user.displayName} disabled />
            <Input label="Email" value={user.email} disabled />
            <Button 
                title="logout" 
                onPress={_handleLogoutButtonPress}
                containerStyle={{marginTop: 30, backgroundColor:theme.buttonLogout}}
                />
            
        </Container>
    )
}

export default Profile;