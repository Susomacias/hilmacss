import React, { useRef, useContext, useEffect } from "react";
import { AppContext } from "../utils/provider";

const Element = () => {

  return (
    <form>
      <div className="finput">
        <label htmlFor="fname">Nombre</label>
        <input
          type="text"
          id="fname"
          name="fname"
        />
      </div>

      <div className="fradio">
        <input type="radio" id="class" name="select_tag_type" value="class" />
        <label htmlFor="class">class</label>
          <input type="radio" id="id" name="select_tag_type" value="id" />
        <label htmlFor="id">id</label>
      </div>
    </form>
  );
};

export default Element;
