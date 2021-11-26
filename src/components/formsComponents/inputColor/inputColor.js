import React from "react";
import { useContext } from "react";
import { CssContext } from "../../../utils/cssContext";
import InputText from "../inputText/inputText";
import Provider from "../../../utils/provider";
import ThreeRadioButtons from "../RadioButtons/threeRadioButtons";

export default function InputColor(props) {
  let {css} = useContext(CssContext);
  const data = css[props.id-1];

  console.log(data.color);
/*
  <InputText
            inputData="#ffffff"
            inputId={props.id}
            inputKey="color"
            inputLabel="Color de Objeto"
            inputType="color" />*/


  return (
    <div>
      <h3>Color</h3>
      {data && (
        <Provider>
          <ThreeRadioButtons
            inputId={props.id}
            inputKey="colorMode"
            radioName1="solid"
            label1="Sólido"
            radioName2="linearGradient"
            label2="Gradiente Lineal"
            radioName3="radialGradient"
            label3="Gradiente Radial"/>
          
          <InputText
            inputData="255"
            inputId={props.id}
            inputKey="opacity"
            inputLabel="Opacidad"
            inputType="number" />

        <InputText
            inputData={css.linearGradientDirection}
            inputId={props.id}
            inputKey="linearGradientDirection"
            inputLabel={"Dirección del degradado"}
            inputType="number" 
            minNumber="0"
            maxNumber="360"/>
        </Provider>
      )}
    </div>
  );
}