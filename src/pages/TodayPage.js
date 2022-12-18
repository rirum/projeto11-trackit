import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BsCheck} from "react-icons/bs"
import dayjs from "dayjs";

export default function TodayPage() {
    
    return(
        <ContainerHabits>
            <Header/>

            <TextHistoric>
                <h1>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>
            </TextHistoric>

            <HabitsWrapper>
                <TextTodayWrapper>
                <h2>Ler 1 capítulo de livro</h2>
                <p>Sequência atual:</p>
                <p>Seu recorde:</p>
                </TextTodayWrapper>
                <ButtonCheckWrapper>
                <BsCheck color="white" size={70}/>
                </ButtonCheckWrapper>
            </HabitsWrapper>

            <Footer />
        </ContainerHabits>
       
    )
}

const ContainerHabits = styled.div`
background-color: #E5E5E5;
height:100vh;
`

const TextHistoric = styled.div`
margin-top: 92px;
width: 375px;
h1{
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 3px;
    margin-left: 17px;
}
p{ 
    color: #BABABA;
    font-size: 18px;
    margin-left: 15px;
    margin-bottom: 18px;
}
`
const HabitsWrapper = styled.div`
width: 340px;
height: 94px;
margin-top: 10px;
background-color: white;
border-radius: 5px;
display: flex;
margin-left: 18px;
justify-content: space-between;
h2{
    font-size: 20px;
    color: #666666;
    margin-left: 15px;
    margin-bottom: 6px;
}
p{
    font-size:12px;
    color: #666666;
    margin-left: 15px;
    margin-top: 4px;
}
`
const TextTodayWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 13px;

`

const ButtonCheckWrapper = styled.div`
width: 69px;
height: 69px;
background-color: #8FC549; //#8FC549 //#E7E7E7
display: flex;
margin-top: 13px;
margin-right: 13px;
border-radius: 5px;

`
