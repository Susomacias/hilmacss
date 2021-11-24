import React, { createContext,useState } from 'react';

export const HtmlContext = createContext({});

const htmlFixed = JSON.parse(localStorage.getItem("html"));

export const HtmlProvider = ({children})  => {

    const [html, setHtml] = useState(htmlFixed);

    return (
        <HtmlContext.Provider value={{
            html,
            setHtml
        }}>
        {children}
        </HtmlContext.Provider>
    )
}