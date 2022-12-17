import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Footer(){

    const percentage = 66;
return (

    
    <StyledFooter>
    <p>Hábitos</p>
    <CircleDiv>
        <CircularProgressbar text="Hoje" value={percentage} styles={buildStyles({
            textSize:'18px',
            textColor: 'white',
            trailColor: '#52B6FF',
            pathColor: 'white',
        })}/>
    </CircleDiv>
    
    <p>Histórico</p>
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