import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/DataContext";
import { CssContext } from "../../../utils/cssContext";
import "../inputText/inputText.css";

export default function InputOpacityForm(props) {

  const { setData } = useContext(DataContext);
  let {css} = useContext(CssContext);
  let {setCss} = useContext(CssContext);

  const [inputState, setInputState] = useState(props.inputData);

  const handleInputChange = ({ target }) => {
    let css = JSON.parse(localStorage.getItem("css"));
    setInputState(inputState);
    setInputState(target.value);
    const arrCss=css.map(function (t) {
      if (t.id === props.inputId) {
        t.color.map(function (t) {
          if (t.cId === props.colorId) {
            t.t = target.value;
          }
          return t;
        });
      }
      return t;
    });
    localStorage.setItem("css", JSON.stringify(arrCss));
    setData(arrCss[props.inputId]);
    setCss(arrCss);
  };

  useEffect(() => {
    css = JSON.parse(localStorage.getItem("css")); 
    css.map(function (c) {
        if (c.id === props.inputId) {
          c.color.map(function (c) {
            if (c.cId === props.colorId) {
                setInputState(c.t);
            }
            return c;
          });
        }
        return c;
      });
  });

  return (
    <div>
      <label htmlFor={"opacity" + props.inputId} className="labelText">Opac.</label>

        <input
          className="inputText"
          type="number"
          min="0"
          max="255"
          id={"opacity" + props.inputId}
          name={"opacity" + props.inputId}
          value={inputState}
          onChange={handleInputChange}
        />

    </div>
  );
}
