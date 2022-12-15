import styled from "styled-components";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login"

function App() {
  return (
    <ContainerApp>
      <Login/>
      {/* <CreateAccount></CreateAccount> */}
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
padding-bottom: 200px;
font-family: 'Lexend Deca', sans-serif;
`
