import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider ({children}) {
    const [ user, setUser ] = useState({
            email:"",
            password:"",
        });

    const [ habits, setHabits ] = useState([]); // habitos diários
    const [ concludedHabits, setConcludedHabits ] = useState([]);
    const [ token, setToken ] = useState('');    
    const [percentage, setPercentage ] = useState(0)
   

    const configuration = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return (
        <AppContext.Provider value={{user, setUser, habits, setHabits, token, setToken, configuration, concludedHabits, setConcludedHabits, percentage, setPercentage}}>
                {children}
        </AppContext.Provider>
    )
}

