import React from "react";
import { useContext } from "react";
import { AppContext } from "../utils/provider";
import InputText from "./formsComponents/inputText/inputText";
import InputColor from "./formsComponents/inputColor/inputColor";
import TwoRadioButtons from "./formsComponents/RadioButtons/twoRadioButtons";
import Provider from "../utils/provider";

export default function CssForm() {
  const [state] = useContext(AppContext);
  const checkCssData = state.cssData;

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
            inputType="text" />
          <TwoRadioButtons
            inputId={state.cssData.id}
            inputKey="classOrId"
            radioName1="class"
            label1=".class"
            radioName2="id"
            label2="#id"
            />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="ancho"
            inputLabel="Ancho"
            inputType="number" />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="alto"
            inputLabel="Alto"
            inputType="number" />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="texto"
            inputLabel="Texto"
            inputType="text" />
          <InputText
            inputData={state.cssData.nombre}
            inputId={state.cssData.id}
            inputKey="fontSize"
            inputLabel="Tamaño de Letra"
            inputType="number" />
          <InputColor id={state.cssData.id}/>
        </Provider>
      )}
    </form>
  );
}
