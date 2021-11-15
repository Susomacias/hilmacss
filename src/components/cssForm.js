import React from "react";
import { useContext, useEffect, useState} from "react";
import { AppContext } from "../utils/provider";
import InputText from "./formsComponents/inputText/inputText";
import Provider from "../utils/provider";

export default function CssForm() {

  const [state, setState] = useContext(AppContext);

  return (
    <form>
      <h2>Formulario CSS</h2>
      <Provider>

      ///////////////////condicional si state !== null
        <InputText inputName={state.cssData.nombre}/>
        <InputText inputName={state.cssData.propiedad}/>
      </Provider>

      <div className="fradio">
        <input type="radio" id="class" name="select_tag_type" defaultValue="class" />
        <label htmlFor="class">class</label>
          <input type="radio" id="id" name="select_tag_type" defaultValue="id" />
        <label htmlFor="id">id</label>
      </div>

      <div className="fradio">
        <input type="radio" id="image" name="select_input_type" defaultValue="image" />
        <label htmlFor="image">Imagen</label>
          <input type="radio" id="text" name="select_input_type" defaultValue="text" />
        <label htmlFor="text">Texto</label>
        <input type="radio" id="none" name="select_input_type" defaultValue="none" />
        <label htmlFor="none">Ninguno</label>
      </div>

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
