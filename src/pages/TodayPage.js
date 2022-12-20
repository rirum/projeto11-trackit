import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BsCheck} from "react-icons/bs"
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext/Context";
import axios from "axios";

export default function TodayPage() {
    let count = 0;

    let dia = dayjs().locale("pt-br").format("dddd, DD/MM")
    dia = dia[0].toUpperCase() + dia.substring(1).replace('-feira', '');

    const {configuration, setPercentage, percentage, token} = useContext(AppContext);    
        
    const [ todayHabits, setTodayHabits ] = useState([]);

    useEffect(() => {
        const URL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        const promise = axios.get((URL), configuration);

        promise.then((response) => {            
            setTodayHabits(response.data);
            let count = 0;
            for(let i = 0; i<response.data.length; i++){
                if(response.data[i].done){
                    count++;
                }
            }
            let percent = (count / response.data.length) * 100;
            if (isNaN(percent)) {
                percent = 0;
            }
            setPercentage(percent.toFixed());            
        });
        
        promise.catch((error) => console.log(error));

    }, [ configuration, setTodayHabits, setPercentage ]);

    function changeHabitDone(habit){
        let urlParams = '';

        if(habit.done){
            urlParams = 'uncheck';
        }else{
            urlParams = 'check';
        }

        const URL =  `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${urlParams}`;
        
        const promise = axios.post(URL, null, configuration);

        promise.then((_) => getTodayHabits());
        promise.catch((error) => console.log(error));
    }

    function getTodayHabits(){
        const URL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        const promise = axios.get((URL), configuration);

        promise.then((response) => {            
            setTodayHabits(response.data);
            let count = 0;
            for(let i = 0; i<response.data.length; i++){
                if(response.data[i].done){
                    count++;
                }
            }
            let percent = (count / response.data.length) * 100;
            if (isNaN(percentage)) {
                percent = 0;
            }
            setPercentage(percent.toFixed());            
        });
        
        promise.catch((error) => console.log(error));
    }
    
    return(
        <ContainerHabits>
            <Header/>

            <TextHistoric>
               <div data-test="today"><h1>{dia}</h1></div>
                <TextHistoricWrapper data-test="today-counter" isGreen={true}>            
                 { percentage > 0 && <p>{percentage}% dos hábitos concluídos</p>}
                 </TextHistoricWrapper> 
                 { percentage < 1 && <p>Nenhum hábito concluído ainda</p>} 
                
            </TextHistoric>

            { todayHabits.map((habit) => 
                <HabitsWrapper data-test="today-habit-container">
                    <TextTodayWrapper>
                        <h2>{ habit.name }</h2>
                        <TextWrapper data-test="today-habit-name" ><p>Sequência atual:</p>
                        <ParaHabit data-test="today-habit-sequence" isGreen={ habit.currentSequence > 0 }>
                         { habit.currentSequence } dias
                        </ParaHabit>
                        </TextWrapper>
                        <TextWrapper data-test="today-habit-record"><p>Seu recorde:</p>
                        
                        <ParaHabit isGreen={ habit.currentSequence >= habit.highestSequence && habit.highestSequence > 0  }>
                            { habit.highestSequence } dias
                        </ParaHabit>
                        </TextWrapper>
                          
                    </TextTodayWrapper>
                    <ButtonCheckWrapper data-test="today-habit-check-btn" done={ habit.done.toString() } onClick={ () => changeHabitDone(habit) }>
                        <BsCheck color="white" size={70}/>
                    </ButtonCheckWrapper>
                </HabitsWrapper>
        )}
            

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
const TextHistoricWrapper =styled.div`
p{
color: ${(props) => props.isGreen ? "#8FC549" : "#666666"}; 
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
margin-top: 13px;
`

const TextWrapper = styled.div`
width: 160px;
display: flex;
flex-direction: row;
p{
    font-size:12px;    
    margin-left: 15px;
    color: #666666;
    margin-top: 4px;
      
}
`
const ParaHabit = styled.div`
    font-size:12px;    
    margin-left: 3px;
    margin-top: 4px;
    color: ${(props) => props.isGreen ? "#8FC549" : "#666666"}; 
`
const ButtonCheckWrapper = styled.div`

width: 69px;
height: 69px;
background-color: ${(props) => props.done === 'true' ? "#8FC549" : "#E7E7E7" };
display: flex;
margin-top: 13px;
margin-right: 13px;
border-radius: 5px;

`
