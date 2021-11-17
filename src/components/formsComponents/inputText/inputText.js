import React from "react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../utils/provider";

export default function InputText(props) {

  const [ inputState, setInputState] = useState(props.inputData);

  let isClick = false;
  let id = props.inputId;
  let key = props.inputKey;
  let value = props.inputData;
  let css = JSON.parse(localStorage.getItem("css"));

  const handleInputChange = ({target}) => {
    setInputState(target.value);
    console.log(css);
    id = props.inputId;
    key = props.inputKey;
    console.log(css[id][key]);
    let arrCss= css.map(function(c){
        if(c.id === id) return c;

        return{
          ...c,
          [key]: target.value
        };
      });
      console.log(arrCss)
      localStorage.setItem("css", JSON.stringify(arrCss)); 
  }


  

  useEffect(() => {
    /*
    id = props.inputId-1;
    key = props.inputKey;
    css = JSON.parse(localStorage.getItem("css"));
    setInputState(css[id][key]);*/
    /*
    if(css[key] != undefined){
      css.map(function(c){
        if(c.id === id){
          c.css[key] = data;
          console.log(arrCss);
        }
      })
    }*/
  });
  

  function click(){

  }

  function changeValue(data){
    /*
    console.log(data);
    let css = JSON.parse(localStorage.getItem("css"));
    console.log(css[id][key]);

      let arrCss = css.map(function(c){
        if(c.id === id){
          css[id][key] = data;  
        }
      });
      console.log(arrCss);*/

    // cambiar la data del array
    //Actualizar local storage
    //Actualizar el state
  }

  
    




///PASAR POR PROPS EL ID--
///DESCARGAR EL VALOR DEL CSS LOCALSTORAGE
///PASAR LA KEY POR PROPS DEL VALOR A EXTRAER
///PASAR A DEFAULT VALUE EL VALOR EXTRAIDO
///ONCHANGE ACTUALIZAR EL LOCASTORAGE
///ONCHANGE ACTUALIZAR EL STATE EN OBJECTS 
//(en teoría se va a actualizar el array de css por useEffect)

  return (
    <div className="finput">
      <label htmlFor="fname">{props.inputData}</label>
        <div onClick={click}>
        <input type="text" id="fname" name="fname" value={inputState}
        onChange={handleInputChange} />
        </div>

    
      
    </div>
  );
}
