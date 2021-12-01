import React from "react";
import { useContext } from "react";
import { AppContext } from "../utils/provider";
import InputText from "./formsComponents/inputText/inputText";
import InputColor from "./formsComponents/inputColor/inputColor";
import TwoRadioButtons from "./formsComponents/RadioButtons/twoRadioButtons";
import ThreeRadioButtons from "./formsComponents/RadioButtons/threeRadioButtons";
import Provider from "../utils/provider";
import { CssContext } from "../utils/cssContext";

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
    <form>
      <h2>Formulario CSS</h2>
      {checkCssData && (
        <Provider>
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="nombre"
            inputLabel="Nombre"
            inputType="text"
          />
          <TwoRadioButtons
            inputId={state.cssData.id}
            inputKey="classOrId"
            radioName1="class"
            label1=".class"
            radioName2="id"
            label2="#id"
          />
          <br />
          
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="ancho"
            inputLabel="Ancho"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="alto"
            inputLabel="Alto"
            inputType="number"
          />
          <div>Margen</div>
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="margenSuperior"
            inputLabel="Superior"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="margenDerecho"
            inputLabel="Derecho"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="margenInferior"
            inputLabel="Inferior"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="margenIzquierdo"
            inputLabel="Izquierdo"
            inputType="number"
          />

          <br />

          <InputColor id={state.cssData.id} />
          <br />
          <div>Sombra de Objeto</div>
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowX"
            inputLabel="X"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowY"
            inputLabel="Y"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowBlur"
            inputLabel="Desenfoque"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowZ"
            inputLabel="Distancia"
            inputType="number"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowColor"
            inputLabel="Color"
            inputType="color"
          />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="boxShadowColorOpacity"
            inputLabel="Opacidad"
            inputType="number"
            minNumber="0"
            maxNumber="255"
          />
          <TwoRadioButtons
            inputId={state.cssData.id}
            inputKey="boxShadowTipe"
            radioName1=""
            label1="Expterior"
            radioName2="inset"
            label2="interior"
          />

          <br />

          <div>Posición</div>
          <ThreeRadioButtons
            inputId={state.cssData.id}
            inputKey="position"
            radioName1="static"
            label1="Estatica"
            radioName2="relative"
            label2="Objeto Padre"
            radioName3="absolute"
            label3="Objeto Hijo"
          />
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

          <br />


          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="texto"
            inputLabel="Texto"
            inputType="text"
          />

          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="fontSize"
            inputLabel="Tamaño de Letra"
            inputType="number"
          />
          
        </Provider>
      )}
    </form>
  );
}
