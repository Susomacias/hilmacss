import React from "react";
import { useContext} from "react";
import { HtmlContext } from "../utils/htmlContext";
import { CssContext } from "../utils/cssContext";

export default function HtmlCode() {

  let {html} = useContext(HtmlContext);
  let {css} = useContext(CssContext);
  
  let init="<div";
  let close=">";
  let end="</div>";

  return (
    <code>
    <h3>CODIGO HTML</h3>
    <div key={html.nombre}>
      {init} {html[0].classOrId}="{html[0].nombre}"{close}
    </div>
    {css.map((css) => (
      <div key={css.id}>
        <span>&nbsp;&nbsp;&nbsp;{init} {css.classOrId}="{css.nombre}"{close}</span>
        {css.texto !== "" ?
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{css.texto}</div> : end
        }
        {css.texto !== "" &&
          <div>&nbsp;&nbsp;&nbsp;{end}</div>
        } 
      </div>
    ))}
    <div>
      {end}
    </div>
    </code>
  );
}