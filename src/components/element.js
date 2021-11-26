import React from "react";
import { useContext, useState } from "react";
import { HtmlContext } from "../utils/htmlContext";

const Element = () => {

  const [inputState, setInputState] = useState("myCssElement");
  const {setHtml} = useContext(HtmlContext);
  const [classOrIdValue, setClassOrIdValue] = useState("class");

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
      </div>
      <div>
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
    </form>
  );
};

export default Element;
