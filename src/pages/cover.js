import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./cover.css";

export default function Cover() {

  const [rotateC2, setRotateC2] = useState("90");
  const [rotateC5, setRotateC5] = useState("270");
  const [colorC1, setColorC1] = useState("rgb(228, 228, 228)");
  const [colorC2, setColorC2] = useState("#3689cc");
  const [colorC3, setColorC3] = useState("rgb(250, 206, 8)");
  const [colorC4, setColorC4] = useState("rgb(250, 134, 99)");
  const [colorC5, setColorC5] = useState("rgb(2, 2, 2)");

  function animate() {
    let rC2 = Math.floor(Math.random() * 360);
    let rC5 = Math.floor(Math.random() * 360);
    setRotateC2(rC2);
    setRotateC5(rC5);

    //hexadecimal random color
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    let c1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    setColorC1(c1);

    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    let c2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    setColorC2(c2);

    let r3 = Math.floor(Math.random() * 256);
    let g3 = Math.floor(Math.random() * 256);
    let b3 = Math.floor(Math.random() * 256);
    let c3 = "rgb(" + r3 + "," + g3 + "," + b3 + ")";
    setColorC3(c3);

    let r4 = Math.floor(Math.random() * 256);
    let g4 = Math.floor(Math.random() * 256);
    let b4 = Math.floor(Math.random() * 256);
    let c4 = "rgb(" + r4 + "," + g4 + "," + b4 + ")";
    setColorC4(c4);

    let r5 = Math.floor(Math.random() * 256);
    let g5 = Math.floor(Math.random() * 256);
    let b5 = Math.floor(Math.random() * 256);
    let c5 = "rgb(" + r5 + "," + g5 + "," + b5 + ")";
    setColorC5(c5);

  }

  return (
    <div className="coverContainer" onClick={animate} onMouseOver={animate}>

      <div className="logoContainer">
        <div className="c1" style={{backgroundColor:colorC1}}></div>

        <div style={{transform:"rotate(" + rotateC2 + "deg)"}} className="containerC2" >
          <div className="c2" style={{backgroundColor:colorC2}}></div>
        </div>

        <div className="containerC3">
          <div className="c3" style={{backgroundColor:colorC3}}></div>
        </div>
        <div className="containerC4">
          <div className="c4" style={{backgroundColor:colorC4}}></div>
        </div>
        <div style={{transform:"rotate("+rotateC5+"deg)"}} className="containerC5">
          <div className="c5" style={{backgroundColor:colorC5}}></div>
        </div>
      </div>

      <div className="shadowLogo"></div>

      <h1 className="isoTipo">HilmaCSS</h1>
      <p>Configurar visualmente estilos CSS3 online gratis</p>
      <Link to={"/tool"} className="enterTool">  Comienza a Crear </Link>

      <a href="https://jesusmacias.pro/" className="firma"> Creado por Jesús Macías </a>
    </div>
  );
}
