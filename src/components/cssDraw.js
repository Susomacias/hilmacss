import React from "react";
import { useContext,  useState } from "react";
import { HtmlContext } from "../utils/htmlContext";
import { CssContext } from "../utils/cssContext";
import "./cssDraw.css";

export default function CssDraw() {
  let { html } = useContext(HtmlContext);
  let { css } = useContext(CssContext);

  const [bgColor, setBgColor] = useState("#252526");

  const staticAndRelative = (cssStaticAndRelative) =>
    cssStaticAndRelative.position === "static" ||
    cssStaticAndRelative.position === "relative";
  const absolute = (cssStaticAndRelative) =>
    !staticAndRelative(cssStaticAndRelative);
  const cssFather = css.filter(staticAndRelative);
  const cssChildren = css.filter(absolute);

  function toHex(num) {
    let hex = num.toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  const handleInputChange = ({ target }) => {
    let colorDeFondo = target.value;
    console.log(target.value);
    setBgColor(colorDeFondo);
  };



  return (
    <div className="cssDrawContainer"
      style={{
        width: '100%', height: '92vh', overflow: "auto",
        position: "relative",
        backgroundColor: bgColor,
      }}
      
    >
    <div className="backgrounSelect">
    <div> Color de fondo </div>
    <input type="color" onChange={handleInputChange}/>
    </div>
    
      <div
        className={html[0].nombre}
        style={{
          display: "flex",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
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
                width: css.ancho > 0 ? css.ancho + "px" : null,
                height: css.alto > 0 ? css.alto + "px" : null,
                marginTop: css.margenSuperior + "px",
                marginBottom: css.margenInferior + "px",
                marginLeft: css.margenIzquierdo + "px",
                marginRight: css.margenDerecho + "px",

                position: css.position,
                top: css.position === "absolute" ? css.locationY + "%" : "none",
                right:
                  css.position === "absolute" ? css.locationX + "%" : "none",
                transform:
                  css.position === "absolute" ? "translate(50%, -50%)" : null,

                fontSize: css.fontSize + "px",
                textAlign: "center",
                boxShadow:
                  css.boxShadowX == 0 &&
                  css.boxShadowY == 0 &&
                  css.boxShadowBlur == 0 &&
                  css.boxShadowZ == 0
                    ? null
                    : css.boxShadowX +
                      "px " +
                      css.boxShadowY +
                      "px " +
                      css.boxShadowBlur +
                      "px " +
                      css.boxShadowZ +
                      "px " +
                      css.boxShadowColor +
                      toHex(parseInt(css.boxShadowColorOpacity, 10)) +
                      " " +
                      css.boxShadowTipe,
                borderTop:
                  css.borderTopStyle +
                  "px solid" +
                  css.borderColor +
                  toHex(parseInt(css.borderColorOpacity, 10)),
                borderBottom:
                  css.borderBottomStyle +
                  "px solid" +
                  css.borderColor +
                  toHex(parseInt(css.borderColorOpacity, 10)),
                borderLeft:
                  css.borderLeftStyle +
                  "px solid" +
                  css.borderColor +
                  toHex(parseInt(css.borderColorOpacity, 10)),
                borderRight:
                  css.borderRightStyle +
                  "px solid" +
                  css.borderColor +
                  toHex(parseInt(css.borderColorOpacity, 10)),

                zIndex: css.zIndex,
                borderRadius:
                  css.borderRadiusSI +
                  "px" +
                  " " +
                  css.borderRadiusSD +
                  "px" +
                  " " +
                  css.borderRadiusII +
                  "px" +
                  " " +
                  css.borderRadiusID +
                  "px",
                transform:
                  "rotate(" +
                  css.transformRotateZ +
                  "deg) rotateX(" +
                  css.transformRotateX +
                  "deg) rotateY(" +
                  css.transformRotateY +
                  "deg) skew(" +
                  css.transformSkewX +
                  "deg, " +
                  css.transformSkewY +
                  "deg)",
                fontWeight: css.fontWeight,
                fontStyle: css.fontStyle,
                paddingTop: css.paddingTop + "px",
                paddingBottom: css.paddingBottom + "px",
                paddingLeft: css.paddingLeft + "px",
                paddingRight: css.paddingRight + "px",
                wordWrap: css.wordWrap,
                color: css.textColor + toHex(parseInt(css.textOpacity, 10)),
                textShadow:
                  "0 0" +
                  css.webKitTextStroke +
                  "px " +
                  css.webKitTextStrokeColor +
                  toHex(parseInt(css.webKitTextStrokeOpacity, 10)) +
                  ", -" +
                  css.webKitTextStroke +
                  "px -" +
                  css.webKitTextStroke +
                  "px 0" +
                  css.webKitTextStrokeColor +
                  toHex(parseInt(css.webKitTextStrokeOpacity, 10)) +
                  "," +
                  css.webKitTextStroke +
                  "px -" +
                  css.webKitTextStroke +
                  "px 0" +
                  css.webKitTextStrokeColor +
                  toHex(parseInt(css.webKitTextStrokeOpacity, 10)) +
                  ", -" +
                  css.webKitTextStroke +
                  "px " +
                  css.webKitTextStroke +
                  "px 0" +
                  css.webKitTextStrokeColor +
                  toHex(parseInt(css.webKitTextStrokeOpacity, 10)) +
                  "," +
                  css.webKitTextStroke +
                  "px " +
                  css.webKitTextStroke +
                  "px 0" +
                  css.webKitTextStrokeColor +
                  toHex(parseInt(css.webKitTextStrokeOpacity, 10)) +
                  "," +
                  css.textShadowX +
                  "px " +
                  css.textShadowY +
                  "px " +
                  css.textShadowBlur +
                  "px " +
                  css.textShadowColor +
                  toHex(parseInt(css.textShadowColorOpacity, 10)),
                  ['&:hover']: { color: 'yellow !important' }
              }}
            >
              {css.texto}
              {css.position === "relative" &&
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
                                (color) =>
                                  color.c + toHex(parseInt(color.t, 10))
                              ) +
                              ")"
                            : c.colorMode === "radial-gradient"
                            ? c.colorMode +
                              "(" +
                              c.color.map(
                                (color) =>
                                  color.c + toHex(parseInt(color.t, 10))
                              ) +
                              ")"
                            : "none",
                        width: c.ancho > 0 ? c.ancho + "px" : null,
                        height: c.alto > 0 ? c.alto + "px" : null,
                        marginTop: c.margenSuperior + "px",
                        marginBottom: c.margenInferior + "px",
                        marginLeft: c.margenIzquierdo + "px",
                        marginRight: c.margenDerecho + "px",

                        position: c.position,
                        top:
                          c.position === "absolute"
                            ? c.locationY + "%"
                            : "none",
                        right:
                          c.position === "absolute"
                            ? c.locationX + "%"
                            : "none",
                        transform:
                          c.position === "absolute"
                            ? "translate(50%, -50%) rotate(" +
                              c.transformRotateZ +
                              "deg) rotateX(" +
                              c.transformRotateX +
                              "deg) rotateY(" +
                              c.transformRotateY +
                              "deg) skew(" +
                              c.transformSkewX +
                              "deg, " +
                              c.transformSkewY +
                              "deg)"
                            : null,

                        fontSize: c.fontSize + "px",
                        textAlign: "center",
                        boxShadow:
                          c.boxShadowX == 0 &&
                          c.boxShadowY == 0 &&
                          c.boxShadowBlur == 0 &&
                          c.boxShadowZ == 0
                            ? null
                            : c.boxShadowX +
                              "px " +
                              c.boxShadowY +
                              "px " +
                              c.boxShadowBlur +
                              "px " +
                              c.boxShadowZ +
                              "px " +
                              c.boxShadowColor +
                              toHex(parseInt(c.boxShadowColorOpacity, 10)) +
                              " " +
                              c.boxShadowTipe,
                        borderTop:
                          c.borderTopStyle +
                          "px solid" +
                          c.borderColor +
                          toHex(parseInt(c.borderColorOpacity, 10)),
                        borderBottom:
                          c.borderBottomStyle +
                          "px solid" +
                          c.borderColor +
                          toHex(parseInt(c.borderColorOpacity, 10)),
                        borderLeft:
                          c.borderLeftStyle +
                          "px solid" +
                          c.borderColor +
                          toHex(parseInt(c.borderColorOpacity, 10)),
                        borderRight:
                          c.borderRightStyle +
                          "px solid" +
                          c.borderColor +
                          toHex(parseInt(c.borderColorOpacity, 10)),

                        zIndex: c.zIndex,
                        borderRadius:
                          c.borderRadiusSI +
                          "px" +
                          " " +
                          c.borderRadiusSD +
                          "px" +
                          " " +
                          c.borderRadiusII +
                          "px" +
                          " " +
                          c.borderRadiusID +
                          "px",
                        fontWeight: c.fontWeight,
                        fontStyle: c.fontStyle,
                        paddingTop: c.paddingTop + "px",
                        paddingBottom: c.paddingBottom + "px",
                        paddingLeft: c.paddingLeft + "px",
                        paddingRight: c.paddingRight + "px",
                        wordWrap: c.wordWrap,
                        color: c.textColor + toHex(parseInt(c.textOpacity, 10)),
                        textShadow:
                          "0 0" +
                          c.webKitTextStroke +
                          "px " +
                          c.webKitTextStrokeColor +
                          toHex(parseInt(c.webKitTextStrokeOpacity, 10)) +
                          ", -" +
                          c.webKitTextStroke +
                          "px -" +
                          c.webKitTextStroke +
                          "px 0" +
                          c.webKitTextStrokeColor +
                          toHex(parseInt(c.webKitTextStrokeOpacity, 10)) +
                          "," +
                          c.webKitTextStroke +
                          "px -" +
                          c.webKitTextStroke +
                          "px 0" +
                          c.webKitTextStrokeColor +
                          toHex(parseInt(c.webKitTextStrokeOpacity, 10)) +
                          ", -" +
                          c.webKitTextStroke +
                          "px " +
                          c.webKitTextStroke +
                          "px 0" +
                          c.webKitTextStrokeColor +
                          toHex(parseInt(c.webKitTextStrokeOpacity, 10)) +
                          "," +
                          c.webKitTextStroke +
                          "px " +
                          c.webKitTextStroke +
                          "px 0" +
                          c.webKitTextStrokeColor +
                          toHex(parseInt(c.webKitTextStrokeOpacity, 10)) +
                          "," +
                          c.textShadowX +
                          "px " +
                          c.textShadowY +
                          "px " +
                          c.textShadowBlur +
                          "px " +
                          c.textShadowColor +
                          toHex(parseInt(c.textShadowColorOpacity, 10)),
                      }}
                    >
                      {c.texto}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
