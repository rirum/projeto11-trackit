import logo from "../assets/logo-trackit.png";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext/Context";


export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ status, setStatus ] = useState(false); // status para entrar e loading

    const navigate = useNavigate();
    
    const {setToken, setUser} = useContext(AppContext);


   function signIn(event) {
        event.preventDefault();
        setStatus(true);

        const object = {
            email,
            password,
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post((URL), object);
        promise.then((response) => {            
            setUser({
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                email: response.data.email,
                password: response.data.password,
                token: response.data.token
            })            
            setToken(response.data.token);
            
            setStatus(false)
            navigate("/hoje")            

        })
        promise.catch((error) => {
            alert(error.response.data.message);
            window.location.reload()
            

        })
      }


    return(
        <>
        <ContainerLogo> 
            <img src={logo} alt="logo"/> 
        </ContainerLogo>
        <form disabled={status} onSubmit={signIn}>
        <LoginInputs disabled={status} data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
        <LoginInputs disabled={status} data-test="password-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="senha" required />
        
       
        
        {!status ? <StyledButton disabled={status} type="submit" data-test="login-btn"> <p>Entrar</p></StyledButton> :
        <LoadingButton disabled={true}> <ThreeDots color="#FFFFFF" height="50" width="50" wrapperStyle={{}} wrapperClassName="" visible={true}/> </LoadingButton>
        }   
        </form>

        <Link to="/cadastro" style={{textDecoration:'none'}}>
        <SignUpLink data-test="signup-link"><p>N??o tem uma conta? Cadastre-se</p></SignUpLink>
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