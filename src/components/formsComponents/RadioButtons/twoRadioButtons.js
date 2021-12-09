import { useState, useEffect, useContext } from "react";
import { CssContext } from "../../../utils/cssContext";
import "./RadioButtons.css";

export default function TowRadioButtons(props) {
  const [value, setValue] = useState(props.radioName1);
  const { setCss } = useContext(CssContext);

  const handleChange = (e) => {
    setValue(e.target.value);
    let css = JSON.parse(localStorage.getItem("css"));
    let id = props.inputId;
    let key = props.inputKey;
    let arrCss = css.map(function (c) {
      if (c.id === id) {
        c[key] = e.target.value;
      }
      return c;
    });
    localStorage.setItem("css", JSON.stringify(arrCss));
    setCss(arrCss);
  };

  useEffect(() => {
    let cssStore = JSON.parse(localStorage.getItem("css"));
    let index = cssStore.findIndex((i) => i.id === props.inputId);
    let keyName = props.inputKey;
    setValue(cssStore[index][keyName]);
  });

  return (
  <div className="wrapper">
    <div>
      <input
        type="radio"
        id="option-1"
        name={props.radioName1}
        value={props.radioName1}
        checked={value === props.radioName1 ? true : false}
        onChange={handleChange}
      />
      <label htmlFor="option-1" className="option option-1"><span>{props.label1}</span></label>
    </div>
    <div>
      <input
        type="radio"
        id="option-2"
        name={props.radioName2}
        value={props.radioName2}
        checked={value === props.radioName2 ? true : false}
        onChange={handleChange}
      />      
      <label htmlFor="option-2" className="option option-2"><span>{props.label2}</span></label>
    </div>
  </div>
  );
}
