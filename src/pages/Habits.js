import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BsTrash } from 'react-icons/bs';
import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext/Context";
import axios from "axios";

export default function Habits(){
    const { configuration, habits, setHabits } = useContext(AppContext);
    const [ habitsDays, setHabitsDays ] = useState([]);
    const [ status, setStatus ] = useState(false);    
    const [ habitsName, setHabitsName] = useState ("");   
    const [ showForm, setShowForm ] = useState(false); 

    const WEEKARRAY = [
       {name: 'D', id: 0},
       {name: 'S', id: 1},
       {name: 'T', id: 2},
       {name: 'Q', id: 3},
       {name: 'Q', id: 4},
       {name: 'S', id: 5},
       {name: 'S', id: 6},       
    ];
    
    useEffect(() => {
        const URL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
        const promise = axios.get((URL), configuration)

        promise.then((response) => setHabits(response.data));
        promise.catch((error) => console.log(error.response.data));

    }, [ habits, configuration, setHabits ]);
    
    function selectDays(day) {        
        if(habitsDays.includes(day.id)){
            setHabitsDays(habitsDays.filter((habit) => habit !== day.id))
            return
        }
        const days = [...habitsDays, day.id]
        
        setHabitsDays(days)
    }

    function addNewHabit(event){
        event.preventDefault()
        if (habitsDays.length < 1){
            alert("Você precisa escolher pelo menos um dia da semana!")
            return
        }
        const object = {
            name: habitsName,
            days: habitsDays,
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post((URL), object, configuration);
        promise.then((response) => {
            setHabits([...habits,response.data])            
            setHabitsName("")
            setHabitsDays([])
            setShowForm(false);
        })
        promise.catch((error)=> {
            alert(error.response.data.message)            
            setHabitsName("")
            setHabitsDays([])
        })
    }

    function add() {
        setShowForm(true);        
    }

    function cancel() {        
        setShowForm(false);
    }

    function delHabit(habit){
        
        if (window.confirm("Deseja apagar esse hábito?")) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, configuration);            
        } else {
            return
        }
    }
    return (
        <ContainerHabits>
       <Header/>

       <StyledTitle>
        <p>Meus hábitos</p>
        <button data-test="habit-create-btn" onClick={add}>+</button>
        </StyledTitle>     

        {showForm && <RegisterHabits>
            <ContainerInputHabits data-test="habit-create-container">
                
                <form onSubmit={addNewHabit}>
                <HabitsInput data-test="habit-name-input" disabled={status} value={habitsName} onChange={(event) => setHabitsName(event.target.value)} placeholder="nome do hábito" required input="text"/>

                <ButtonDayStyle>

                {WEEKARRAY.map((day) => 
                    <ButtonDays data-test="habit-day" key={day.id} type="button" day={habitsDays.includes(day.id)} onClick={() => selectDays(day)}><p>{day.name}</p></ButtonDays>
                )}
                </ButtonDayStyle>

                <CancelSaveContainer>

                <CancelButton data-test="habit-create-cancel-btn" type="button" onClick={cancel} disabled={status}><p>Cancelar</p></CancelButton>                

                {!status ? <SaveButton data-test="habit-create-save-btn" disabled={status} type="submit"> <p>Salvar</p> </SaveButton> :
                    <LoadingButton disable={true}> 
                        <ThreeDots color="#FFFFFF" height="50" width="50" wrapperStyle={{}} wrapperClassName="" visible={true}/> 
                    </LoadingButton>}

                </CancelSaveContainer>
                </form>
            </ContainerInputHabits>
        </RegisterHabits>
        }
        
        {habits.length < 1 &&
            <StyledText>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>            
            </StyledText>
        }

        {habits.length > 0 && habits.map((habit) =>
        <HabitsSaved data-test="habit-container">
           
            <TextTrash key={habit.id}>
                <div data-test="habit-name"><p>{habit.name}</p></div>
                <div data-test="habit-delete-btn"><BsTrash onClick={() => delHabit(habit)} color="#666666" /></div>
            </TextTrash>
            <ButtonDayStyle>
            {WEEKARRAY.map ((day) =>
            <ButtonDays data-test="habit-day" key={day.id} day={(habit.days).includes(day.id)}><p>{day.name}</p></ButtonDays>
            )}
            </ButtonDayStyle>
            
        </HabitsSaved>
        )}
        
        
       <Footer />
            
        </ContainerHabits>
        
    )
}

//cor do botao ativado: background-color: #CFCFCF, color:white;

const ContainerHabits = styled.div`
background-color: #E5E5E5;
height:100vh;
`

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
  background-color: ${(props) => (props.day ? "#CFCFCF" : "#ffffff")};
  font-size: 20px;
  margin-left: 5px;
  margin-top: 8px;
  
  p{
    color: ${(props) => (props.day ? "#ffffff" : "#D4D4D4")};
    align-items: center;
  }
  
`

const CancelSaveContainer = styled.div`
height: 85px;
width: 320px;
display: flex;
justify-content: flex-end;
align-items: center;

`
const CancelButton = styled.button`
background-color: #ffffff;
border: 1px solid #ffffff;
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

const LoadingButton = styled.button`
width: 84px;
height: 35px;
background-color: #52B6FF;
border: 5px solid #52B6FF;
border-radius: 5px;
font-family: 'Lexend Deca', sans-serif;
opacity: 0.7;
display: flex;
align-items: center;
justify-content: center;
`