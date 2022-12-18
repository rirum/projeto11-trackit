import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider ({children}) {
    const [ user, setUser ] = useState('');
    const [ image, setImage ] =useState('');
    const [ habits, setHabits ] = useState(''); // habitos diários
    const [ token, setToken ] = useState('');

    const configuration = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return (
        <AppContext.Provider value={{user, setUser, image, setImage, habits, setHabits, token, setToken, configuration}}>
                {children}
        </AppContext.Provider>
    )
}

