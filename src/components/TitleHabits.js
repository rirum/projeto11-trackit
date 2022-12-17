import styled from "styled-components";

export default function TitleHabits(){
    return (
        <StyledTitle>
        <p>Meus hábitos</p>
        <button>+</button>
        </StyledTitle>
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