import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TRANSPARENT = "transparent";

const Container = styled.Pressable`
    background-color : ${({theme, isFilled}) =>
        isFilled ? theme.buttonBackground : TRANSPARENT};
    align-items : center;
    border-radius : 4px;
    width: 100%;
    padding : 10px;
    opacity : ${({disabled}) => (disabled ? 0.5 : 1)};
`
const Title = styled.Text`
    height : 30px;
    line-height : 30px;
    font-size : 16px;
    color: ${({theme, isFilled})=> isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
`
//props로 넘겨받은 isFilled값에 따라서 버튼 내부를 채우거나 투명하게 처리하는 버튼
const Button = ({containerStyle, title, onPress, isFilled,disabled}) => {
    return(
        <Container
            style={containerStyle}
            onPress={onPress}
            isFilled={isFilled}
            disabled={disabled} //활성화 여부를 결정
        >
            <Title isFilled={isFilled}>{title}</Title>
        </Container>
    )
}

//isFilled를 넘겨받지 않으면 기본값으로 true를 넣는다.
Button.defaultProps = {
    isFilled: true,
}

Button.propTypes = {
    containerStyle : PropTypes.object,
    title : PropTypes.string,
    onPress : PropTypes.func.isRequired,
    isFilled : PropTypes.bool,
    disabled : PropTypes.bool,
}

export default Button;