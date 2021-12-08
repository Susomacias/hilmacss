import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/DataContext";
import { CssContext } from "../../../utils/cssContext";
import "./inputText.css";


export default function InputText(props) {

  const [inputState, setInputState] = useState(props.inputData);
  const {setData} = useContext(DataContext);
  const {setCss} = useContext(CssContext);

  let id = props.inputId;
  let key = props.inputKey;
  let css = JSON.parse(localStorage.getItem("css"));

  const handleInputChange = ({ target }) => {
    css = JSON.parse(localStorage.getItem("css")); 
    let indice = css.findIndex(i => i.id === props.inputId);  
    setInputState(css[indice][key]);
    setInputState(target.value);
    css = JSON.parse(localStorage.getItem("css"));
    id = props.inputId;
    key = props.inputKey;
    let arrCss = css.map(function (c) {
      if (c.id === id) {
        c[key] = target.value;
      }
      return c;
    });
    localStorage.setItem("css", JSON.stringify(arrCss));
    setData(arrCss[id]);
    setCss(arrCss);
  };

  useEffect(() => {
    css = JSON.parse(localStorage.getItem("css")); 
    let index = css.findIndex(i => i.id === props.inputId);  
    setInputState(css[index][key]);
  });

  return (
    <div className="finput">
      <label className="labelText" htmlFor="fname">{props.inputLabel}</label>
      {props.minNumber || props.maxNumber ? (<div>
        <input
          className="inputText"
          type={props.inputType}
          min={props.minNumber}
          max={props.maxNumber}
          id={props.inputType}
          name="fname"
          value={inputState}
          onChange={handleInputChange}
        />
      </div>) : (
        <div>
        <input
          className="inputText"
          type={props.inputType}
          id={props.inputType}
          name="fname"
          value={inputState}
          onChange={handleInputChange}
        />
      </div>
      )}
      
    </div>
  );
}



