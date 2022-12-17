import styled from "styled-components";
import CreateAccount from "./pages/CreateAccount";
import Habits from "./pages/Habits";
import Login from "./pages/Login"
import Historic from "./pages/Historic";

function App() {
  return (
    <ContainerApp>
      {/* <Login/> */}
      {/* <CreateAccount />*/}
      {/* <Habits/> */}
      <Historic />
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
width:100vw;
min-height: 100vh;
margin: 0px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
font-family: 'Lexend Deca', sans-serif;
`
