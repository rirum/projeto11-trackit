import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic() {
    
    return(
        <ContainerHabits>
            <Header/>

            <TextHistoric>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </TextHistoric>
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
    margin-bottom: 17px;
    margin-left: 17px;
}
p{ 
    color: #666666;
    font-size: 18px;
    margin-left: 15px;
}
`