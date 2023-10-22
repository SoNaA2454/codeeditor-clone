import { createContext , useState} from "react";
import React from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) =>{

    const[html, setHtml] = useState('');
    const[css, setCss] =  useState('');
    const[js, setJs] =  useState('');

    return (
        <DataContext.Provider 
        value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider