import React from "react";
import { useContext } from "react";
import { HtmlContext } from "../utils/htmlContext";
import { CssContext } from "../utils/cssContext";

export default function CssDraw() {
  let { html } = useContext(HtmlContext);
  let { css } = useContext(CssContext);

  const staticAndRelative = cssStaticAndRelative => cssStaticAndRelative.position === "static" || cssStaticAndRelative.position === "relative";
  const absolute = cssStaticAndRelative => !staticAndRelative(cssStaticAndRelative)
  const cssFather = css.filter(staticAndRelative);
  const cssChildren = css.filter(absolute);

  function toHex(num) {
    let hex = num.toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }  

  return (
    <div>
      <div
        className={html[0].nombre}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: html[0].flexDirection,
        }}
      >
        {cssFather.map((css) => (
          <div key={css.id}>
            <div
              className={css.nombre}
              style={{
                backgroundColor:
                  (css.colorMode === "solid" || css.color.length === 1) &&
                  css.color[0].c + toHex(parseInt(css.color[0].t, 10)),
                backgroundImage:
                  css.colorMode === "linear-gradient"
                    ? css.colorMode +
                      "(" +
                      css.linearGradientDirection +
                      "deg," +
                      css.color.map(
                        (color) => color.c + toHex(parseInt(color.t, 10))
                      ) +
                      ")"
                    : css.colorMode === "radial-gradient"
                    ? css.colorMode +
                      "(" +
                      css.color.map(
                        (color) => color.c + toHex(parseInt(color.t, 10))
                      ) +
                      ")"
                    : "none",
                  width:(css.ancho > 0 ? css.ancho + "px": null  ) ,
                  height: (css.alto > 0 ? css.alto + "px": null) ,
                  marginTop:css.margenSuperior + "px",
                  marginBottom:css.margenInferior + "px",
                  marginLeft:css.margenIzquierdo + "px",
                  marginRight:css.margenDerecho + "px",
                  

                position:css.position,
                top: (css.position === "absolute" ? css.locationY+ "%" : "none"),
                right: (css.position === "absolute" ? css.locationX+ "%" : "none"),
                transform: (css.position === "absolute" ? "translate(50%, -50%)" : null),

                fontSize: css.fontSize + "px",
                textAlign: "center",
                boxShadow: (css.boxShadowX == 0 &&
                  css.boxShadowY == 0 &&
                  css.boxShadowBlur == 0 &&
                  css.boxShadowZ == 0 ? (null) : (  
                    
                      css.boxShadowX + "px "+ css.boxShadowY+ "px " +css.boxShadowBlur+ "px " +css.boxShadowZ+ "px " +css.boxShadowColor + toHex(parseInt(css.boxShadowColorOpacity, 10)) + " "+css.boxShadowTipe
                    
                  ))
              }}
            >
              {css.texto}
              {css.position === "relative" && (
                cssChildren.map((c) => (
                  <div key={c.id}>
                    <div
                      className={c.nombre}
                      style={{
                        backgroundColor:
                          (c.colorMode === "solid" || c.color.length === 1) &&
                          c.color[0].c + toHex(parseInt(c.color[0].t, 10)),
                        backgroundImage:
                          c.colorMode === "linear-gradient"
                            ? c.colorMode +
                              "(" +
                              c.linearGradientDirection +
                              "deg," +
                              c.color.map(
                                (color) => color.c + toHex(parseInt(color.t, 10))
                              ) +
                              ")"
                            : c.colorMode === "radial-gradient"
                            ? c.colorMode +
                              "(" +
                              c.color.map(
                                (color) => color.c + toHex(parseInt(color.t, 10))
                              ) +
                              ")"
                            : "none",
                        width:(c.ancho === 0 ?"none":(c.ancho + "px") ) ,
                        height: (c.alto === 0 ?"none":(c.alto + "px") ) ,
                        marginTop:c.margenSuperior + "px",
                        marginBottom:c.margenInferior + "px",
                        marginLeft:c.margenIzquierdo + "px",
                        marginRight:c.margenDerecho + "px",
                
                        position:c.position,
                        top: (c.position === "absolute" ? c.locationY+ "%" : "none"),
                        right: (c.position === "absolute" ? c.locationX+ "%" : "none"),
                        transform: (c.position === "absolute" ? "translate(50%, -50%)" : "none"),
                
                        fontSize: c.fontSize + "px",
                        textAlign: "center",

                        boxShadow: (c.boxShadowX == 0 &&
                          c.boxShadowY == 0 &&
                          c.boxShadowBlur == 0 &&
                          c.boxShadowZ == 0 ? (null) : (  
                            
                              c.boxShadowX + "px "+ c.boxShadowY+ "px " +c.boxShadowBlur+ "px " +c.boxShadowZ+ "px " +c.boxShadowColor + toHex(parseInt(c.boxShadowColorOpacity, 10)) + " "+c.boxShadowTipe
                            
                          ))
                      }}
                    >
                      {c.texto}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
