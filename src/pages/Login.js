import logo from "../assets/logo-trackit.png";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
    return(
        <>
        <ContainerLogo> 
            <img src={logo} alt="logo"/> 
        </ContainerLogo>
        
        <LoginInputs placeholder="email"></LoginInputs>
        <LoginInputs placeholder="senha"></LoginInputs>

        <StyledButton> <p>Entrar</p></StyledButton>

        <SignUpLink><p>Não tem uma conta? Cadastre-se</p></SignUpLink>
        
        </>
    )
}

const ContainerLogo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 180px;
height: 180px;
margin-top: 68px;
margin-bottom: 36px;
`

const LoginInputs = styled.input `
        width: 303px;
        height: 45px;
        display: flex;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        flex-direction: column;
        padding-left: 11px;
        margin-bottom: 6px;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        &::placeholder {
            font-size: 20px;
            color: grey;
            padding-left: 11px; 
        }
`
const StyledButton = styled.button`
width: 303px;
height:45px;
background-color: #52B6FF;
border: 5px solid #52B6FF;
border-radius: 5px;
font-family: 'Lexend Deca', sans-serif;
    p{
        color: white;
        font-size: 21px;
    }
`
const SignUpLink = styled.div`
font-size: 14px;
color: #52B6FF;
margin-top: 25px;
`