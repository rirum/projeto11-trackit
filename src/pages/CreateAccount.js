import logo from "../assets/logo-trackit.png";
import styled from "styled-components";
import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function CreateAccount() {
    const [email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ password, setPassword ] = useState ('');
    const [status, setStatus] = useState(false);

    const navigate = useNavigate();

    function register(event){
        event.preventDefault();
        setStatus(true);

        const object = { 
            email,
            name,
            image,
            password
        }

        const URL = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up');
        const promise = axios.post((URL), object);
        promise.then((response) => {
            console.log(response.data)
            alert("Usuário criado com sucesso! Faça seu login")
            navigate("/")
            setStatus(false)
        });
        promise.catch((error) => {
            alert(error.response.data.message)
            window.location.reload();
        });
        

    }


   

    

    return(
        <>
        <ContainerLogo> 
            <img src={logo} alt="logo"/> 
        </ContainerLogo>
        <form onSubmit={register}>
        <LoginInputs data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required disabled={status}/>
        <LoginInputs data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={status}/>
        <LoginInputs data-test="user-name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required disabled={status}/>
        <LoginInputs data-test="user-image-input" type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required disabled={status}/>

        {!status ? <StyledButton data-test="signup-btn" state={status}> <p>Cadastrar</p></StyledButton> :
        <LoadingButton disable={true}> <ThreeDots color="#FFFFFF" height="50" width="50" wrapperStyle={{}} wrapperClassName="" visible={true}/> </LoadingButton>
        }   
        </form>

        <Link to="/" style={{textDecoration:'none'}}>
        <SignUpLink data-test="login-link"><p>Já tem uma conta? Faça login!</p></SignUpLink>
        </Link>
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
const LoadingButton = styled.button`
width: 303px;
height:45px;
background-color: #52B6FF;
border: 5px solid #52B6FF;
border-radius: 5px;
font-family: 'Lexend Deca', sans-serif;
opacity: 0.7;
display: flex;
align-items: center;
justify-content: center;
`