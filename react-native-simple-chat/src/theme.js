import { TabActions } from "@react-navigation/native"
import { imageBackground } from "react-native"

const colors = {
    white:"#ffffff",
    black:"#000000",
    grey_0:"#d5d5d5",
    grey_1:"#a6a6a6",
    red:"#e84118",
    blue:"#3679fe"
}

export const theme = {
    
    background:colors.white,
    text:colors.black,
    errorText:colors.red,

    //ImageComponent
    imageBackground:colors.grey_0,
    imageButtonBackground:colors.grey_1,
    imageButtonIcon:colors.white,

    //InputComponent
    label:colors.grey_1,
    inputPlaceholder:colors.grey_1,
    inputBorder:colors.grey_1,
    inputDisabledBackground:colors.grey_0,

    //ButtonComponent
    buttonBackground:colors.blue,
    buttonTitle:colors.white,
    buttonUnfilledTitle:colors.blue,
    buttonLogout:colors.red,
    sendButtonActive:colors.blue,
    sendButtonInactive:colors.grey_1,

    //Navigation
    headerTintColor:colors.black,
    tabActiveColor:colors.blue,
    tabInactiveColor:colors.grey_1,

    //SpinnerComponent
    spinnerBackground:colors.black,
    spinnerIndicator:colors.white,

    //List
    listBorder:colors.grey_0,
    listTime:colors.grey_1,
    listDescription:colors.grey_1,
    listIcon:colors.black,
}
