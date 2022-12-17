import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleHabits from "../components/TitleHabits";
import { BsTrash } from 'react-icons/bs';

export default function Habits(){
    return (
        <ContainerHabits>
       <Header/>

        <TitleHabits />
     

        <RegisterHabits>
            <ContainerInputHabits>


                <HabitsInput placeholder="nome do hábito"/>

                <ButtonDayStyle>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
                <ButtonDays><p>D</p></ButtonDays>
              
                </ButtonDayStyle>

                <CancelSaveContainer>
                <p>Cancelar</p>
                <SaveButton> <p>Salvar</p> </SaveButton>
                </CancelSaveContainer>
                
            </ContainerInputHabits>
        </RegisterHabits>

        <HabitsSaved>
            <TextTrash>
                <p>Ler 1 capítulo de livro</p>
                <BsTrash color="#666666" />
            </TextTrash>
            <ButtonDayStyle>
            <ButtonDays><p>D</p></ButtonDays>
            <ButtonDays><p>D</p></ButtonDays>
            <ButtonDays><p>D</p></ButtonDays>
            </ButtonDayStyle>
        </HabitsSaved>
        

        <StyledText>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            
        </StyledText>

       <Footer />
            
        </ContainerHabits>
        
    )
}

//cor do botao ativado: background-color: #CFCFCF, color:white;

const ContainerHabits = styled.div`
background-color: #E5E5E5;
height:100vh;
`

const RegisterHabits = styled.div`
width: 340px;
height: 180px;
border-radius: 5px;
background-color: white;
display: flex;
margin-left: 18px;
margin-top: 20px;
`
const ContainerInputHabits = styled.div`
display: flex;
flex-direction: column;
`

const HabitsInput = styled.input`
        margin-left: 14px;
        margin-top: 18px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        ::placeholder { 
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #DBDBDB;
        padding-left: 11px; 
    }
`
const ButtonDayStyle = styled.div`
display:flex;
margin-left: 9px;
`
const ButtonDays = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  margin-left: 5px;
  margin-top: 8px;
  
  p{
    color: #D4D4D4;
    align-items: center;
  }
  
`

const CancelSaveContainer = styled.div`
height: 85px;
width: 320px;
display: flex;
justify-content: flex-end;
margin-top: 29px;
align-items: center;
p{
    color: #52B6FF;
    font-size: 16px;
    
}
`
const SaveButton = styled.button`
width: 84px;
height: 35px;
background-color: #52B6FF;

border: 1px solid #52B6FF;
border-radius: 5px;
margin-left: 23px;
p{
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
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
const HabitsSaved = styled.div`
width: 340px;
height: 91px;
background-color: white;
border-radius: 5px;
margin-left: 17px;
margin-top: 20px;
`
const TextTrash = styled.div`
width: 320px;
height: 15px;
display: flex;
justify-content: space-between;
padding-top: 17px;
p{ 
 margin-left: 15px;
 color: #666666;
}
`