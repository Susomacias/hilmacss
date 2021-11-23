import React, { createContext,useState } from 'react';

export const CssContext = createContext({});

const cssFixed = JSON.parse(localStorage.getItem("css"));

export const CssProvider = ({children})  => {

    const [css, setCss] = useState(cssFixed);

    return (
        <CssContext.Provider value={{
            css,
            setCss
        }}>
        {children}
        </CssContext.Provider>
    )
}