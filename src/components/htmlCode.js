import React from "react";
import { useContext} from "react";
import { HtmlContext } from "../utils/htmlContext";
import { CssContext } from "../utils/cssContext";

export default function HtmlCode() {

  let {html} = useContext(HtmlContext);
  let {css} = useContext(CssContext);

  const staticAndRelative = cssStaticAndRelative => cssStaticAndRelative.position === "static" || cssStaticAndRelative.position === "relative";
  const absolute = cssStaticAndRelative => !staticAndRelative(cssStaticAndRelative)
  const cssFather = css.filter(staticAndRelative);
  const cssChildren = css.filter(absolute);
  
  
  let init="<div";
  let close=">";
  let end="</div>";

  return (
    <code>
    <h3>CODIGO HTML</h3>
    <div key={html.nombre}>
      {init} {html[0].classOrId}="{html[0].nombre}"{close}
    </div>
    
    {cssFather.map((css) => (
      <div key={css.id}>
        <span>&nbsp;&nbsp;{init} {css.classOrId}="{css.nombre}"{close}</span>
        {css.texto !== "" ?
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{css.texto} </div> : end
        }
        {css.texto !== "" &&
          <div>&nbsp;&nbsp;{end}</div>
        }

        {css.position === "relative" && (
          cssChildren.map((c) => (
            <div key={c.id}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{init} {c.classOrId}="{c.nombre}"{close}</span>
            {c.texto !== "" ?
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c.texto}
              </div> : end
            }
            {c.texto !== "" &&
              <div>&nbsp;&nbsp;&nbsp;&nbsp;{end}</div>
            } 
          </div>
          ))
        )}
      </div>
    ))}
    <div>
      {end}
    </div>

    
    </code>
  );
}

