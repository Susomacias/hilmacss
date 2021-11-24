import React from "react";
import { useContext} from "react";
import { HtmlContext } from "../utils/htmlContext";
import { CssContext } from "../utils/cssContext";

export default function CssDraw() {

  let {html} = useContext(HtmlContext);
  let {css} = useContext(CssContext);
  
  return (
    <div>
    <div className={html[0].nombre}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column",
      alingItems:"center",
    }}>    
    {css.map((css) => (
      <div key={css.id}>
        <div 
          className={css.nombre}
          style={{
            backgroundColor:"red",
            width:css.ancho+"px",
            height:css.alto+"px",
            fontSize:css.fontSize+"px",
            textAlign:"center", 
          }}>{css.texto}
        </div>
      </div>
    ))}
    </div>
    </div>
  );
}