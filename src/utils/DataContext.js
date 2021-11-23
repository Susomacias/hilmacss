import React, { createContext,useState } from 'react';

export const DataContext = createContext({});

//Pasar solo la parte del array necesaria para actualizar el task
const dataFixed = JSON.parse(localStorage.getItem("css"));

export const DataProvider = ({children})  => {

    const [data, setData] = useState(dataFixed);

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
        {children}
        </DataContext.Provider>
    )
}