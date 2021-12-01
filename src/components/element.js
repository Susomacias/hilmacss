import React from "react";
import { useContext, useState } from "react";
import { HtmlContext } from "../utils/htmlContext";

const Element = () => {

  const [inputState, setInputState] = useState("myCssElement");
  const {setHtml} = useContext(HtmlContext);
  const [classOrIdValue, setClassOrIdValue] = useState("class");
  const [flexDirectionValue, setFlexDirectionValue] = useState("column");

  const handleInputChange = ({ target }) => {
    setInputState(target.value);
    let html = JSON.parse(localStorage.getItem("html"));
    html[0].nombre = target.value;
    localStorage.setItem("html", JSON.stringify(html));
    setHtml(html);
  };

  const ClassOrIdHandleChange = (e) => {
    setClassOrIdValue(e.target.value);
    let htmlCoI = JSON.parse(localStorage.getItem("html"));
    htmlCoI[0].classOrId = e.target.value;
    localStorage.setItem("html", JSON.stringify(htmlCoI));
    setHtml(htmlCoI);
  };

  const flexDirectionHandleChange = (e) => {
    setFlexDirectionValue(e.target.value);
    let htmlFlexDir = JSON.parse(localStorage.getItem("html"));
    htmlFlexDir[0].flexDirection = e.target.value;
    localStorage.setItem("html", JSON.stringify(htmlFlexDir));
    setHtml(htmlFlexDir);
  };

  return (
    <form>
      <div className="finput">
        <label htmlFor="fname">Nombre</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={inputState}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          type="radio"
          id="isClass"
          name="class"
          value="class"
          checked={classOrIdValue === "class" ? true : false}
          onChange={ClassOrIdHandleChange}
        />
        <label htmlFor="class">.class</label>
        <input
        type="radio"
        id="id"
        name="id"
        value="id"
        checked={classOrIdValue === "id" ? true : false}
        onChange={ClassOrIdHandleChange}
      />
      <label htmlFor="id">#id</label>
        
      </div>
      <div>
      <input
        type="radio"
        id="row"
        name="row"
        value="row"
        checked={flexDirectionValue === "row" ? true : false}
        onChange={flexDirectionHandleChange}
      />
      <label htmlFor="row">Fila</label>
      <input
        type="radio"
        id="column"
        name="column"
        value="column"
        checked={flexDirectionValue === "column" ? true : false}
        onChange={flexDirectionHandleChange}
      />
      <label htmlFor="column">Columna</label>
    </div>
    </form>
  );
};

export default Element;
