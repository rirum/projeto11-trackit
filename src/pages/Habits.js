import styled from "styled-components";
import Header from "../components/Header";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Habits(){
    return (
        <>
       <Header/>

        <StyledTitle>
            <p>Meus hábitos</p>
            <button>+</button>
        </StyledTitle>

        <StyledText>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </StyledText>

        <StyledFooter>
            <p>Hábitos</p>
       <CircularProgressbar></CircularProgressbar>
            
            <p>Hoje</p>
            <p>Histórico</p>
        </StyledFooter>
            
        </>
    )
}

const StyledTitle = styled.div`
width: 375px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 92px;
p{
    color:#126BA5;
    font-size: 22px;
    margin-left: 17px;
}
button {
    width: 40px;
    height: 36px;
    color: white;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
}
`
const StyledText = styled.div`
width: 375px;
p{
    color: #666666;
    margin: 30px 17px 17px 17px;
    font-size: 18px;
}
`

const StyledFooter = styled.div`
position: fixed;
width: 375px;
height: 70px;
background-color: yellow;
bottom: 0px;
display: flex;
justify-content: center;
align-items: center;
`
