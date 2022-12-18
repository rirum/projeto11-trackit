import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext/Context";

export default function Footer(){
    const {habits} = useContext(AppContext);
    
    let percentage;
    if(habits === undefined || habits.length === 0) {
        percentage = 0;
    }
    // else{
	// 	const done = habits.filter((habit) => habit.done);
	// 	percentage = (done.length / habits.length) * 100;
	// }


return (

    
    <StyledFooter>
    <Link to="/habitos" style={{textDecoration:'none'}}>
    <p>Hábitos</p>
    </Link>
    <Link to="/hoje" style={{textDecoration:'none'}}>
    <CircleDiv>
        <CircularProgressbar text="Hoje" value={percentage} styles={buildStyles({
            textSize:'18px',
            textColor: 'white',
            trailColor: '#52B6FF',
            pathColor: 'white',
        })}/>
    </CircleDiv>
    </Link>
    <Link to="/historico" style={{textDecoration:'none'}}>
    <p>Histórico</p>
    </Link>
</StyledFooter>
)

}


const StyledFooter = styled.div`
position: fixed;
width: 375px;
height: 70px;
background-color: white;
bottom: 0px;
display: flex;
justify-content: space-around;
align-items: center;
p{ 
    font-size:18px;
    font-weight: 400;
    color: #52B6FF;
}
`
const CircleDiv = styled.div`
width:91px;
height: 91px;
border-radius:100px;
border: 6px solid #52B6FF;
background-color: #52B6FF;
margin-bottom: 47px;

`