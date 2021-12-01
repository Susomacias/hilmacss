import React from "react";
import { useContext } from "react";
import { CssContext } from "../utils/cssContext";
import { HtmlContext } from "../utils/htmlContext";

export default function CssCode() {
  let { css } = useContext(CssContext);
  let { html } = useContext(HtmlContext);
  let space = <span>&nbsp;&nbsp;</span>;

  let point = ".";
  let tag = "#";
  let init = "{";
  let close = "}";
  let braI = "(";
  let braE = ")";


  function toHex(num) {
    let hex = num.toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }


  return (
    <code>
      <h3>CODIGO CSS</h3>

      <div>
        {html[0].classOrId === "class" ? point : tag}
        {html[0].nombre.replace(/[^a-zA-Z0-9]/g, "")}
        {init}
        <div>
          {space} flex-direction: {html[0].flexDirection};
        </div>
      </div>
      <div>{close}</div>
      <br />

      {css.map((css) => (
        <div key={css.id}>
          <div>
            {css.classOrId === "class" ? point : tag}
            {css.nombre.replace(/[^a-zA-Z0-9]/g, "")}
            {init}
            {css.position == "static" ? null : (
              <div>
                {space} position: {css.position};
              </div>
            )}
            {css.position == "absolute" && (
              <div>
                <div>
                  {space} top: {css.locationY}%;
                </div>
                <div>
                  {space} right: {css.locationX}%;
                </div>
                <div>{space} transform: translate(50%, -50%);</div>
              </div>
            )}
            {css.colorMode === "solid" ? (
              <div>
                {space} background-color:{css.color[0].c};
              </div>
            ) : (
              <div>
                {space} background-color:{css.colorMode}
                {braI}
                {css.colorMode === "linearGradient" && (
                  <span>{css.linearGradientDirection}deg,&nbsp;</span>
                )}
                {css.color.map((color, index) => (
                  <span>
                    {color.c}
                    {index !== css.color.length - 1 && <span>,&nbsp;</span>}
                  </span>
                ))}
                <span>{braE};</span>
              </div>
            )}

            {css.boxShadowX == 0 &&
            css.boxShadowY == 0 &&
            css.boxShadowBlur == 0 &&
            css.boxShadowZ == 0 ? (null) : (  
              <div>
                {space} box-shadow: {css.boxShadowX}px {css.boxShadowY}px {css.boxShadowBlur}px {css.boxShadowZ}px {css.boxShadowColor + toHex(parseInt(css.boxShadowColorOpacity, 10))} {css.boxShadowTipe};
              </div>
            )
            }


            {css.ancho == 0 ? null : (
              <div>
                {space} width: {css.ancho}px;
              </div>
            )}
            {css.alto == 0 ? null : (
              <div>
                {space} height: {css.alto}px;
              </div>
            )}

            {css.margenSuperior == 0 ||
            css.margenInferior == 0 ||
            css.margenIzquierda == 0 ||
            css.margenDerecha == 0 ? (
              <div>
                {css.margenSuperior == 0 ? null : (
                  <div>
                    {space} margin-top: {css.margenSuperior}px;
                  </div>
                )}
                {css.margenDerecho == 0 ? null : (
                  <div>
                    {space} margin-right: {css.margenDerecho}px;
                  </div>
                )}
                {css.margenInferior == 0 ? null : (
                  <div>
                    {space} margin-bottom: {css.margenInferior}px;
                  </div>
                )}
                {css.margenIzquierdo == 0 ? null : (
                  <div>
                    {space} margin-left: {css.margenIzquierdo}px;
                  </div>
                )}
              </div>
            ) : (
              <div>
                {space} margin: {css.margenSuperior}px {css.margenDerecho}px{" "}
                {css.margenInferior}px {css.margenIzquierdo}px;
              </div>
            )}

            <div>
              {css.fontSize == 0 ? null : (
                <div>
                  {space} font-size: {css.fontSize}px;
                </div>
              )}
            </div>
            <div>{close}</div>
            <br />
          </div>
        </div>
      ))}
    </code>
  );
}
