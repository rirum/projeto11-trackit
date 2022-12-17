import styled from "styled-components";
import bob from "../assets/bob.png";

export default function Header(){
    return (
        <>
        <StyledHeader><p>TrackIt</p>
        <img src={bob} alt="avatar"/>
        
        </StyledHeader>
        </>
    )
}

const StyledHeader = styled.div`
width: 375px;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
p{
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: white;
    align-items: center;
    display: flex;
    margin-left: 18px;
}
img{
    width: 50px;
    height:50px;
    border-radius: 99px;
    background-image: url();
    margin-right: 18px;
 
 
}
`