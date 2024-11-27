import React from "react";
import styled from "styled-components";
import User from "./components/User";
//import UserContext,{UserProvider} from "./contexts/User";
import Input from "./components/Input";
import ThemeProvider from "./contexts/ThemeContext";
import ThemedComponent from "./components/ThemedComponent.js";
import { CartProvider } from "./contexts/CartContext.js";
import CartScreen from "./components/CartScreen.js";
import HomeScreen from "./components/HomeScreen.js";
import { UserProvider } from "./contexts/UserContext.js";

const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items : center;
`;

const App = () => {
    return(
    <UserProvider>
    <Container>
        <HomeScreen />
    </Container>
    </UserProvider>
    )
}

export default App;