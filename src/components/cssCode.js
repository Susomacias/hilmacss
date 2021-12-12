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
    <div>
    <h2>CODIGO CSS</h2>
    <code> 
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

            {css.borderTopStyle == 0 &&
              css.borderRightStyle == 0 &&
              css.borderBottomStyle == 0 &&
              css.borderLeftStyle == 0 ? (null) : (
                css.borderTopStyle == css.borderRightStyle &&
                css.borderTopStyle == css.borderBottomStyle &&
                css.borderTopStyle == css.borderLeftStyle ? (
                  <div>
                  {space}  border-style: {css.borderTopStyle}px solid {css.borderColor + toHex(parseInt(css.borderColorOpacity, 10))};
                  </div>
                 ) : (
                  <div>
                  {css.borderTopStyle == 0 ? null : (
                    <div>
                      {space} border-top-style: {css.borderTopStyle}px solid {css.borderColor + toHex(parseInt(css.borderColorOpacity, 10))};
                    </div>
                  )}
                  {css.borderRightStyle == 0 ? null : (
                    <div>
                      {space} border-right-style: {css.borderRightStyle}px solid {css.borderColor + toHex(parseInt(css.borderColorOpacity, 10))};
                    </div>
                  )}
                  {css.borderBottomStyle == 0 ? null : (
                    <div>
                      {space} border-bottom-style: {css.borderBottomStyle}px solid {css.borderColor + toHex(parseInt(css.borderColorOpacity, 10))};
                    </div>
                  )}
                  {css.borderLeftStyle == 0 ? null : (
                    <div>
                      {space} border-left-style: {css.borderLeftStyle}px solid {css.borderColor + toHex(parseInt(css.borderColorOpacity, 10))};
                    </div>
                  )}
                  </div>
                 ))}

            


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

            {css.paddingTop == 0 ||
              css.paddingBottom == 0 ||
              css.paddingLeft == 0 ||
              css.paddingRight == 0 ? (
                <div>
                  {css.paddingTop == 0 ? null : (
                    <div>
                      {space} padding-top: {css.paddingTop}px;
                    </div>
                  )}
                  {css.paddingRight == 0 ? null : (
                    <div>
                      {space} padding-right: {css.paddingRight}px;
                    </div>
                  )}
                  {css.paddingBottom == 0 ? null : (
                    <div>
                      {space} padding-bottom: {css.paddingBottom}px;
                    </div>
                  )}
                  {css.paddingLeft == 0 ? null : (
                    <div>
                      {space} padding-left: {css.paddingLeft}px;
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {space} padding: {css.paddingTop}px {css.paddingRight}px{" "}
                  {css.paddingBottom}px {css.paddingLeft}px;
                </div>
              )}

            <div>
              {css.fontSize == 0 ? null : (
                <div>
                  {space} font-size: {css.fontSize}px;
                </div>
              )}
            </div>

            <div>
              {css.zIndex == 0 ? null : (
                <div>
                  {space} z-index: {css.zIndex};
                </div>
              )}
            </div>

            {css.borderRadiusSI == 0 &&
             css.borderRadiusSD == 0 &&
             css.borderRadiusII == 0 &&
             css.borderRadiusID == 0 ? (null) : (
               css.borderRadiusSI == css.borderRadiusSD &&
                css.borderRadiusSI == css.borderRadiusII &&
                css.borderRadiusSI == css.borderRadiusID ? (
                  <div>
                    {space} border-radius: {css.borderRadiusSI}px
                  </div>
                ): (
              <div>
                {space} border-radius: {css.borderRadiusSI}px {css.borderRadiusSD}px {css.borderRadiusII}px {css.borderRadiusID}px;
              </div>
              )
             )
            }

            <div>
              {css.transformRotateZ == 0 &&
               css.transformRotateX == 0 &&
               css.transformRotateY == 0 &&
               css.transformSkewX == 0 &&
               css.transformSkewY == 0 ? null : (
                <div>
                  {space} transform: rotateZ({css.transformRotateZ}deg) rotateX({css.transformRotateX}deg) rotateY({css.transformRotateY}deg) skew({css.transformSkewX}deg, {css.transformSkewY}deg);
                </div>
              )}
            </div>

            <div>
              {css.fontWeight == "500" ? null : (
                <div>
                  {space} font-weight: {css.fontWeight};
                </div>
              )}
            </div>

            <div>
              {css.fontStyle == "normal" ? null : (
                <div>
                  {space} font-style: {css.fontStyle};
                </div>
              )}
            </div>

            <div>
              {css.textAling == "left" || css.texto == "" ? null : (
                <div>
                  {space} text-align: {css.textAling};
                </div>
              )}
            </div>

            <div>
                {css.wordWrap == "normal" || css.texto == "" ? null : (
                  <div>
                   {space} word-wrap: {css.wordWrap};
                  </div>
                )}
            </div>

            <div>
                {css.texto == "" ? null : (
                  <div>
                   {space} color: {css.textColor + toHex(parseInt(css.textOpacity, 10))};
                  </div>
                )}
            </div>

            {css.webKitTextStroke == 0 ? null : (
              <div>
                {space} -webkit-text-stroke: {css.webKitTextStroke}px {css.webKitTextStrokeColor + toHex(parseInt(css.webKitTextStrokeOpacity, 10))};
              </div>
            )}

            {css.textShadowX == 0 &&
              css.textShadowY == 0 &&
              css.textShadowBlur == 0 ? (null) : (  
                <div>
                  {space} box-shadow: {css.textShadowX}px {css.textShadowY}px {css.textShadowBlur}px {css.textShadowColor + toHex(parseInt(css.textShadowColorOpacity, 10))};
                </div>
              )
              }

            <div>{close}</div>
            <br />
          </div>
        </div>
      ))}
    </code>
    </div>
  );
}
