import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/DataContext";
import { CssContext } from "../../../utils/cssContext";

export default function InputColorForm(props) {
  const { setData } = useContext(DataContext);
  let { css } = useContext(CssContext);
  let { setCss } = useContext(CssContext);

  const [inputState, setInputState] = useState(props.inputData);

  const handleInputChange = ({ target }) => {
    let css = JSON.parse(localStorage.getItem("css"));
    setInputState(inputState);
    setInputState(target.value);
    const arrCss = css.map(function (c) {
      if (c.id === props.inputId) {
        c.color.map(function (c) {
          if (c.cId === props.colorId) {
            c.c = target.value;
          }
          return c;
        });
      }
      return c;
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
                setInputState(c.c);
            }
            return c;
          });
        }
        return c;
      });
  });

  return (
    <div>
      <label htmlFor="fname" className="labelText">Color</label>
        <input
          className="inputText"
          type="color"
          id={"color" + props.inputId}
          name={"color" + props.inputId}
          value={inputState}
          onChange={handleInputChange}
        />
    </div>
  );
}
