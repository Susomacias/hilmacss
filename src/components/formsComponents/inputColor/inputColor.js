import React from "react";
import { useContext, useEffect } from "react";
import { CssContext } from "../../../utils/cssContext";
import InputText from "../inputText/inputText";
import Provider from "../../../utils/provider";
import ThreeRadioButtons from "../RadioButtons/threeRadioButtons";
import InputColorForm from "./inputColorForm";
import InputOpacityForm from "./inputOcapcityForm";

export default function InputColor(props) {
  let { css } = useContext(CssContext);
  let { setCss } = useContext(CssContext);

  const data = css[props.id - 1];

  const updateCss = () => {
    setCss(addColor());
  };

  let arrCss = [];

  let color = data.color;

  function cssDoc() {
    localStorage.setItem("css", JSON.stringify(css));
    arrCss = JSON.parse(localStorage.getItem("css"));
  }

  function addColor() {
    let obj = {
      cId: Object.keys(color).length + 1,
      c: "#555555",
      t: "255",
    };
    color.push(obj);
    css.map(function (c) {
      if (c.id === data.id) {
        c.color = color;
      }
    });

    localStorage.setItem("css", JSON.stringify(css));
    cssDoc();
    let arrCssUpadate = css;
    return arrCssUpadate;
  }

  function removeColor(id) {
    css = JSON.parse(localStorage.getItem("css"));
    let arr = css[props.id - 1].color;
    let newArr = arr.filter((c) => c.cId !== id);
    css[props.id - 1].color = newArr;
    localStorage.setItem("css", JSON.stringify(css));
    setCss(css);
  }

  useEffect(() => {
    css = JSON.parse(localStorage.getItem("css"));
    if (css === null) {
      css = [];
      localStorage.setItem("css", JSON.stringify(css));
    }
    arrCss = JSON.parse(localStorage.getItem("css"));
  });

  return (
    <div>
      {data && (
        <Provider>
          <ThreeRadioButtons
            inputId={props.id}
            inputKey="colorMode"
            radioName1="solid"
            label1="Sólido"
            radioName2="linear-gradient"
            label2="degra. Linea"
            radioName3="radial-gradient"
            label3="degra. Radio"
          />
          {css[props.id - 1].colorMode === "solid" ? (
            <div>
              <InputColorForm
                inputData={css[props.id - 1].color[0].c}
                colorId={color[0].cId}
                inputId={props.id - 1}
              />
              <InputOpacityForm
                inputData={css[props.id - 1].color[0].t}
                colorId={color[0].cId}
                inputId={props.id - 1}
              />
            </div>
          ) : (
            <div>
              {css[css[props.id - 1].id - 1].color.map((color) => (
                <div key={color.cId}>
                  <InputColorForm
                    inputData={color.c}
                    colorId={color.cId}
                    inputId={props.id - 1}
                  />
                  <InputOpacityForm
                    inputData={color.t}
                    colorId={color.cId}
                    inputId={props.id - 1}
                  />
                  {color.cId === 1 ? (
                    <div></div>
                  ) : (
                    <div onClick={() => removeColor(color.cId)}>
                      Eliminar Color
                    </div>
                  )}
                </div>
              ))}
              {css[props.id - 1].colorMode === "radialGradient" ? (
                <div></div>
              ) : (
                <InputText
                  inputData={css.linearGradientDirection}
                  inputId={props.id}
                  inputKey="linearGradientDirection"
                  inputLabel={"Dirección del degradado"}
                  inputType="number"
                  minNumber="0"
                  maxNumber="360"
                />
              )}
            </div>
          )}
          {css[props.id - 1].colorMode === "solid" ? (
            <div></div>
          ) : (
            <div onClick={addColor} onClick={updateCss}>
              Añadir Color
            </div>
          )}
        </Provider>
      )}
    </div>
  );
}
