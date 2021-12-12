import React, { useState } from "react";
import Element from "../components/element";
import Objects from "../components/objects";
import CssCode from "../components/cssCode";
import CssDraw from "../components/cssDraw";
import CssForm from "../components/cssForm";
import HtmlCode from "../components/htmlCode";
import FooterTool from "../components/footerTool";
import Provider from "../utils/provider";
import { DataProvider } from "../utils/DataContext";
import { CssProvider } from "../utils/cssContext";
import { HtmlProvider } from "../utils/htmlContext";
import { Link } from 'react-router-dom';
import "./tool.css";

export default function Toll() {

  let restulMode = "cssDraw"
  
  const [inputState, setInputState] = useState("cssDraw");
  
  function showMode(e){
    restulMode = e.target.id;
    console.log(restulMode);
    setInputState(restulMode);
    console.log(inputState);
    if(restulMode === "cssDraw"){
      let active=document.getElementById("drawActive");
      if(active != null){
        active.style.cssText = 'background-color: #181818;';
        let disabled=document.getElementById("codeActive");
        disabled.style.cssText = 'background-color: none;';
      }    
    }
    if(restulMode === "cssCode"){
      let active=document.getElementById("codeActive");
      if(active != null){
        active.style.cssText = 'background-color: #181818;';
        let disabled=document.getElementById("drawActive");
        disabled.style.cssText = 'background-color: none;';
      }
    }
  }
  
  return(

    <Provider>
    <HtmlProvider>
      <CssProvider>
        <DataProvider>
          <header>
            <nav className="navTool">
              <ul className="ulTool">
                <li className="logoTool"><Link to={'/'} className="isoTipoTool" style={{ color:"#a6a6a6"}}>
                <img src="./logo192.png" style={{height:"16px", marginRight:"5px"}}/>
                 HilmaCss</Link></li>
                <li className="optionTool" id="drawActive" style={{backgroundColor: "#222"}}><a id="cssDraw" onClick={showMode}>Vista Renderizada</a></li>
                <li className="optionTool" id="codeActive"><a id="cssCode" onClick={showMode}>Codigo Html y CSS</a></li>
              </ul>
            </nav>
          </header>
          <div className="containerTool">
          <div className="ElementAndObjects">
          <Element></Element>
          <Objects></Objects>
          </div>
          <main className="result">

          {inputState === "cssCode" &&
            <section className="sectionCode" style={{ width: "90%", height: "92vh", overflow: "auto" }}>
            <article className="htmlCode"><HtmlCode /></article>
            <article className="cssCode"><CssCode /></article>
          </section>
          }

          {inputState === "cssDraw" &&
            <section>
            <article><CssDraw /></article>
          </section>
        }

          </main>
          <div className="cssForm"><CssForm /></div>
          </div>
          <FooterTool />
        </DataProvider>
      </CssProvider>
    </HtmlProvider>
  </Provider>

  );
}

