import { useState, useEffect, useContext} from "react";
import { CssContext } from "../../../utils/cssContext";

export default function FourRadioButtons(props) {
  const [value, setValue] = useState(props.radioName1);
  const {setCss} = useContext(CssContext);

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

    if(props.inputKey == "position" && arrCss[props.inputId-1].position == "relative"){
      let relativeObject = arrCss[props.inputId-1];
      let arrCssPosition = arrCss.map(function(c){
        if(c.position !== "static"){
          c.position = "absolute";
        }
        return c;
      })
      arrCssPosition[props.inputId-1].position = "relative";
      localStorage.setItem("css", JSON.stringify(arrCssPosition));
      setCss(arrCssPosition);
    }
  };

  useEffect(() => {
    let cssStore = JSON.parse(localStorage.getItem("css")); 
    let index = cssStore.findIndex(i => i.id === props.inputId); 
    let keyName = props.inputKey; 
    setValue(cssStore[index][keyName]);
  });

  return (
    <div>
      <div>
        <input
          type="radio"
          id="threeRadio1"
          name={props.radioName1}
          value={props.radioName1}
          checked={value === props.radioName1 ? true : false}
          onChange={handleChange}
        />
        <label htmlFor="threeRadio1">{props.label1}</label>
      </div>
      <div>
      <input
        type="radio"
        id="threeRadio2"
        name={props.radioName2}
        value={props.radioName2}
        checked={value === props.radioName2 ? true : false}
        onChange={handleChange}
      />
      <label htmlFor="threeRadio2">{props.label2}</label>
    </div>
    <div>
      <input
        type="radio"
        id="threeRadio3"
        name={props.radioName3}
        value={props.radioName3}
        checked={value === props.radioName3 ? true : false}
        onChange={handleChange}
      />
      <label htmlFor="threeRadio2">{props.label3}</label>
    </div>
    <div>
      <input
        type="radio"
        id="threeRadio3"
        name={props.radioName4}
        value={props.radioName4}
        checked={value === props.radioName4 ? true : false}
        onChange={handleChange}
      />
      <label htmlFor="threeRadio2">{props.label4}</label>
    </div>
    </div>
  );
}
