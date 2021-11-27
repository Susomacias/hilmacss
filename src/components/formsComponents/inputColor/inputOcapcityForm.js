import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/DataContext";
import { CssContext } from "../../../utils/cssContext";

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
      if (t.id === props.inputId+1) {
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
        if (c.id === props.inputId + 1) {
          setInputState(c.color[props.colorId - 1].t);
        }
        return c;
      });
  });

  return (
    <div className="finput">
      <label htmlFor={"opacity" + props.inputId}>Opacidad</label>

      <div>
        <input
          type="number"
          min="0"
          max="255"
          id={"opacity" + props.inputId}
          name={"opacity" + props.inputId}
          value={inputState}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
