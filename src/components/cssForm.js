import React from "react";
import { useContext } from "react";
import { AppContext } from "../utils/provider";
import InputText from "./formsComponents/inputText/inputText";
import TwoRadioButtons from "./formsComponents/RadioButtons/twoRadioButtons";
import Provider from "../utils/provider";;

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
            inputLabel="Nombre" />
          <TwoRadioButtons
            inputId={state.cssData.id}
            inputKey="classOrId"
            radioName1="isClass"
            label1=".class"
            radioName2="isId"
            label2="#id"
            />
        </Provider>
      )}

      <div className="finput">
        <label htmlFor="ftext">Texto </label>
        <input type="text" id="ftext" name="ftext" defaultValue="Loren Ipsum" />
      </div>

      <div className="finput">
        <label htmlFor="ffile">Imagen </label>
        <input type="file" id="ffile" name="ffile" />
      </div>

      <div className="finput">
        <label htmlFor="width">Ancho </label>
        <input type="number" id="width" name="width" />
      </div>

      <div className="finput">
        <label htmlFor="height">Altura </label>
        <input type="number" id="height" name="height" />
      </div>

      <div className="finput">
        <label htmlFor="fontSize">Tamaño de fuente </label>
        <input type="number" id="fontSize" name="fontSize" />
      </div>
    </form>
  );
}
