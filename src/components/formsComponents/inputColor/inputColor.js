import React from "react";
import { useContext, useEffect } from "react";
import { CssContext } from "../../../utils/cssContext";
import InputText from "../inputText/inputText";
import Provider from "../../../utils/provider";
import ThreeRadioButtons from "../RadioButtons/threeRadioButtons";
import InputColorForm from "./inputColorForm";
import InputOpacityForm from "./inputOcapcityForm";
import "../inputText/inputText.css";
import "./inputColor.css";

export default function InputColor(props) {
  let { css } = useContext(CssContext);
  let { setCss } = useContext(CssContext);

  const data = css.find((item) => item.id === props.id);

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
    let arr = data.color;
    let newArr = arr.filter((c) => c.cId !== id);
    data.color = newArr;
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
            label2="degradado Lineal"
            radioName3="radial-gradient"
            label3="degradado Radial"
          />
          {data.colorMode === "solid" ? (
            <div className="wrapperColor">
              <div className="colorsInputs">
                <div className="cssFormArticle gradiantColor">
                  <InputColorForm
                    inputData={data.color[0].c}
                    colorId={color[0].cId}
                    inputId={data.id}
                  />
                </div>
                <div className="cssFormArticle gradiantColor">
                  <InputOpacityForm
                    inputData={data.color[0].t}
                    colorId={color[0].cId}
                    inputId={data.id}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              {data.colorMode === "radialGradient" ? (
                <div></div>
              ) : (
                <div className="cssFormArticle">
                  <InputText
                    inputData={css.linearGradientDirection}
                    inputId={props.id}
                    inputKey="linearGradientDirection"
                    inputLabel={"Dirección del degradado"}
                    inputType="number"
                    minNumber="0"
                    maxNumber="360"
                  />
                </div>
              )}

              <div className="wrapperColor">
                {data.color.map((color) => (
                  <div key={color.cId} className="colorsInputs">
                    <div className="cssFormArticle gradiantColor">
                      <InputColorForm
                        inputData={color.c}
                        colorId={color.cId}
                        inputId={data.id}
                      />
                    </div>
                    <div className="cssFormArticle gradiantColor">
                      <InputOpacityForm
                        inputData={color.t}
                        colorId={color.cId}
                        inputId={data.id}
                      />
                    </div>
                    {color.cId === 1 ? (
                      <div className="cssFormArticle gradiantColorType">
                        {" "}
                        principal
                      </div>
                    ) : (
                      <div
                        onClick={() => removeColor(color.cId)}
                        className="cssFormArticle gradiantColorType"
                      >
                        Borrar
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.colorMode === "solid" ? (
            <div></div>
          ) : (
            <div
              onClick={addColor}
              onClick={updateCss}
              className="cssFormArticle addColor"
            >
              + Añadir Color
            </div>
          )}
        </Provider>
      )}
    </div>
  );
}
