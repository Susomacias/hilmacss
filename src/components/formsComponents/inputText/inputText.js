import React from "react";

export default function InputText(props) {

  return (
    <div className="finput">
      <label htmlFor="fname">{props.inputName}</label>
      <input type="text" id="fname" name="fname" defaultValue={props.inputName} />
    </div>
  );
}
