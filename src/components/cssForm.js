import React from "react";
import { useContext } from "react";
import { AppContext } from "../utils/provider";
import InputText from "./formsComponents/inputText/inputText";
import InputColor from "./formsComponents/inputColor/inputColor";
import TwoRadioButtons from "./formsComponents/RadioButtons/twoRadioButtons";
import ThreeRadioButtons from "./formsComponents/RadioButtons/threeRadioButtons";
import FourRadioButtons from "./formsComponents/RadioButtons/fourRadioButtons";
import Provider from "../utils/provider";
import { CssContext } from "../utils/cssContext";
import "./cssForm.css";

export default function CssForm() {
  const [state, setState] = useContext(AppContext);
  const checkCssData = state.cssData;
  const { css } = useContext(CssContext);

  if (checkCssData) {
    const findState = (s) => s.id === state.cssData.id;
    const finderState = css.filter(findState);

    if (state.cssData != finderState[0]) {
      setState(() => ({ cssData: finderState[0] }));
    }
  }

  return (
    <form style={{ width: "100%", height: "92vh", overflow: "auto" }}>
      {checkCssData && (
        <Provider>
          <div className="division">
            <header className="cssFormHeader">General</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="nombre"
                    inputLabel="Nombre"
                    inputType="text"
                  />
                </article>
                <article className="cssFormArticle">
                  <TwoRadioButtons
                    inputId={state.cssData.id}
                    inputKey="classOrId"
                    radioName1="class"
                    label1=".class"
                    radioName2="id"
                    label2="#id"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Tamaño</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="ancho"
                    inputLabel="Ancho"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="alto"
                    inputLabel="Alto"
                    inputType="number"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Margen Externo</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="margenSuperior"
                    inputLabel="Superior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="margenDerecho"
                    inputLabel="Derecho"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="margenInferior"
                    inputLabel="Inferior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="margenIzquierdo"
                    inputLabel="Izquierdo"
                    inputType="number"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Margen Interno</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="paddingTop"
                    inputLabel="Superior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="paddingRight"
                    inputLabel="Derecho"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="paddingBottom"
                    inputLabel="Inferior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="paddingLeft"
                    inputLabel="Izquierdo"
                    inputType="number"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Color</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputColor id={state.cssData.id} />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Sombra de Objeto</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowX"
                    inputLabel="X"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowY"
                    inputLabel="Y"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowBlur"
                    inputLabel="Difuso"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowZ"
                    inputLabel="Distancia"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowColor"
                    inputLabel="Color Som."
                    inputType="color"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="boxShadowColorOpacity"
                    inputLabel="Opacidad"
                    inputType="number"
                    minNumber="0"
                    maxNumber="255"
                  />
                </article>
                <article className="cssFormArticle">
                  <TwoRadioButtons
                    inputId={state.cssData.id}
                    inputKey="boxShadowTipe"
                    radioName1=""
                    label1="Expterior"
                    radioName2="inset"
                    label2="interior"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Contorno</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderColor"
                    inputLabel="Color borde"
                    inputType="color"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderTopStyle"
                    inputLabel="superior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderRightStyle"
                    inputLabel="derecha"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderBottomStyle"
                    inputLabel="inferior"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderLeftStyle"
                    inputLabel="izquierda"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderColorOpacity"
                    inputLabel="Opacidad"
                    inputType="number"
                    minNumber="0"
                    maxNumber="255"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Redondear Esquinas</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderRadiusSI"
                    inputLabel="Superior Izquierda"
                    inputType="number"
                    minNumber="0"
                    maxNumber="99999"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderRadiusSD"
                    inputLabel="Superior Derecha"
                    inputType="number"
                    minNumber="0"
                    maxNumber="99999"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderRadiusII"
                    inputLabel="Inferior Izquierda"
                    inputType="number"
                    minNumber="0"
                    maxNumber="99999"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="borderRadiusID"
                    inputLabel="Inferior Derecha"
                    inputType="number"
                    minNumber="0"
                    maxNumber="99999"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Transformación</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="transformRotateZ"
                    inputLabel="Rotar Z"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="transformRotateX"
                    inputLabel="Rotar X"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="transformRotateY"
                    inputLabel="Rotar Y"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="transformSkewX"
                    inputLabel="Distor. X"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="transformSkewY"
                    inputLabel="Distor. Y"
                    inputType="number"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Posición</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <ThreeRadioButtons
                    inputId={state.cssData.id}
                    inputKey="position"
                    radioName1="static"
                    label1="Estatica"
                    radioName2="relative"
                    label2="Padre"
                    radioName3="absolute"
                    label3="Hijo"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="zIndex"
                    inputLabel="Orden de capa"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  {state.cssData.position === "static" ||
                  state.cssData.position === "relative" ? null : (
                    <div>
                      <InputText
                        inputData={state.cssData.nombre}
                        inputId={state.cssData.id}
                        inputKey="locationX"
                        inputLabel="X"
                        inputType="number"
                      />
                      <InputText
                        inputData={state.cssData.nombre}
                        inputId={state.cssData.id}
                        inputKey="locationY"
                        inputLabel="Y"
                        inputType="number"
                      />
                    </div>
                  )}
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Texto</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="texto"
                    inputLabel="Texto"
                    inputType="text"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="fontSize"
                    inputLabel="Tamaño"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <ThreeRadioButtons
                    inputId={state.cssData.id}
                    inputKey="fontWeight"
                    radioName1="200"
                    label1="fino"
                    radioName2="500"
                    label2="medio"
                    radioName3="900"
                    label3="Grueso"
                  />
                </article>
                <article className="cssFormArticle">
                  <TwoRadioButtons
                    inputId={state.cssData.id}
                    inputKey="fontStyle"
                    radioName1="normal"
                    label1="Normal"
                    radioName2="italic"
                    label2="Cursiva"
                  />
                </article>
                <article className="cssFormArticle">
                  <FourRadioButtons
                    inputId={state.cssData.id}
                    inputKey="textAling"
                    radioName1="left"
                    label1="Alin. Iz."
                    radioName2="right"
                    label2="Alin. Der."
                    radioName3="Alin. center"
                    label3="centro"
                    radioName4="Alin Just."
                    label4="Justificado"
                  />
                </article>
                <article className="cssFormArticle">
                  <TwoRadioButtons
                    inputId={state.cssData.id}
                    inputKey="wordWrap"
                    radioName1="break-word"
                    label1="contener dentro"
                    radioName2="normal"
                    label2="no contener"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Color de Texto</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textColor"
                    inputLabel="Color"
                    inputType="color"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textOpacity"
                    inputLabel="Opacidad"
                    inputType="number"
                    minNumber="0"
                    maxNumber="255"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Borde de texto</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="webKitTextStroke"
                    inputLabel="Grosor"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="webKitTextStrokeColor"
                    inputLabel="Color"
                    inputType="color"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="webKitTextStrokeOpacity"
                    inputLabel="Opacidad"
                    inputType="number"
                    minNumber="0"
                    maxNumber="255"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>

          <div className="division">
            <header className="cssFormHeader">Sombra de texto</header>
            <main className="cssFormMain">
              <section className="cssFormSection">
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textShadowX"
                    inputLabel="X"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textShadowY"
                    inputLabel="Y"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textShadowBlur"
                    inputLabel="Difuso"
                    inputType="number"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textShadowColor"
                    inputLabel="Color"
                    inputType="color"
                  />
                </article>
                <article className="cssFormArticle">
                  <InputText
                    inputData={state.cssData.nombre}
                    inputId={state.cssData.id}
                    inputKey="textShadowColorOpacity"
                    inputLabel="Opacidad"
                    inputType="number"
                    minNumber="0"
                    maxNumber="255"
                  />
                </article>
              </section>
            </main>
            <footer className="cssFormFooter"></footer>
          </div>
          <footer className="divFooter"></footer>
        </Provider>
      )}
    </form>
  );
}
