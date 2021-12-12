import { useContext, useEffect } from "react";
import { AppContext } from "../utils/provider";
import { CssContext } from "../utils/cssContext";
import Provider from "../utils/provider";
import "./footerTool.css";

export default function FooterTool() {
  const [state, setState] = useContext(AppContext);
  const checkCssData = state.cssData;

  const { css } = useContext(CssContext);
  let checkFather = false;
  let checkChildren = false;

  function checkRelative(){  
        css.forEach(element => {
            if (element.position === "relative") {
                checkFather = true;
            }
        });
        return checkFather;
    };

    function checkAbsolute(){  
        css.forEach(element => {
            if (element.position === "absolute") {
                checkChildren = true;
            }
        });
        return checkChildren;
    };

    //funcion para obtener un objeto del array css cuyo valor del indice position sea igual a relative
    function getRelative(){
        let relative = {};
        css.forEach(element => {
            if (element.position === "relative") {
                relative = element;
            }
        });
        return relative;
    };

    console.log(getRelative().nombre);


  return (
    <div className="footerTool">
    {checkAbsolute()==true && checkRelative()==false &&
        <div className="alertNofather">
        <span className="alertSimbol">!</span>Objeto Padre sin definir
      </div>
    }
      {checkRelative()==true &&
        <div className="fatherLayer">Capa padre: {getRelative().nombre}</div>
    }
    {checkCssData != null ? (
        <div className="inUseLayer">Capa en uso: {checkCssData.nombre}</div>
    ):(<div className="alertNofather"><span className="alertSimbol">!</span>Selecciona un objeto de la lista para configurarlo</div>)
        
    }
      
    </div>
  );
}
