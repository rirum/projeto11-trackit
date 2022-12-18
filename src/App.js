import styled from "styled-components";
import CreateAccount from "./pages/CreateAccount";
import Habits from "./pages/Habits";
import Login from "./pages/Login"
import Historic from "./pages/Historic";
import TodayPage from "./pages/TodayPage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import AppProvider from "./AppContext/Provider";

function App() {
  return (
  
    <BrowserRouter>
    
    <ContainerApp>
      <AppProvider>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<CreateAccount />}/>
            <Route path="/habitos" element={<Habits />}/>
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<Historic />} />
            
            </Routes>
      </AppProvider>
    </ContainerApp>
    

    </BrowserRouter>
    
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
