import React from "react";
import { useContext} from "react";
import { CssContext } from "../utils/cssContext";

export default function CssCode() {

  let {css} = useContext(CssContext);
  
  let point = "."
  let tag = "#"
  let init="{";
  let close="}";

  return (
    <code>
    <h3>CODIGO CSS</h3>
    {css.map((css) => (
      <div key={css.id}>
        <div>
          {css.classOrId === "class" ?  point : tag}{css.nombre.replace(/[^a-zA-Z0-9]/g, "")}{init}
           <div>&nbsp;&nbsp;&nbsp; backgroundColor:#ffffff</div>
           <div>&nbsp;&nbsp;&nbsp; width: {css.ancho}px; </div>
           <div>&nbsp;&nbsp;&nbsp; height: {css.alto}px;</div>
           <div>&nbsp;&nbsp;&nbsp; font-size:{css.fontSize}px;</div>
        </div>
        <div>{close}</div>
      </div>
    ))}
    </code>
  );
}


