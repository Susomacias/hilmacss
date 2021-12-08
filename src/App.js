import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./pages/cover";
import Tool from "./pages/tool";



function App() {

  let arrHtml = [{ nombre: "myCssElement", classOrId: "class", flexDirection: "column" }];
  let arrCss = [{
      "id": 1,
      "nombre": "layer1",
      "propiedad": 1,
      "classOrId": "class",
      "ancho": 50,
      "alto": 50,
      "texto": "",
      "fontSize": 20,
      "colorMode": "solid",
      "color": [
          {
              "cId": 1,
              "c": "#ffffff",
              "t": "255"
          }
      ],
      "linearGradientDirection": 180,
      "position": "static",
      "locationX": 50,
      "locationY": 50,
      "margenSuperior": 0,
      "margenDerecho": 0,
      "margenInferior": 0,
      "margenIzquierdo": 0,
      "boxShadowX": 0,
      "boxShadowY": 0,
      "boxShadowBlur": 0,
      "boxShadowZ": 0,
      "boxShadowColor": "#000000",
      "boxShadowColorOpacity": "255",
      "boxShadowTipe": "",
      "borderTopStyle": 0,
      "borderRightStyle": 0,
      "borderBottomStyle": 0,
      "borderLeftStyle": 0,
      "borderColor": "#000000",
      "borderColorOpacity": "255",
      "zIndex": 0,
      "borderRadiusSI": 0,
      "borderRadiusSD": 0,
      "borderRadiusII": 0,
      "borderRadiusID": 0,
      "transformRotateZ": 0,
      "transformRotateX": 0,
      "transformRotateY": 0,
      "transformSkewX": 0,
      "transformSkewY": 0,
      "fontWeight": 300,
      "fontStyle": "normal",
      "paddingTop": 0,
      "paddingRight": 0,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "textAling": "center",
      "wordWrap": "break-word",
      "textColor": "#000000",
      "textOpacity": "255",
      "webKitTextStroke": 0,
      "webKitTextStrokeColor": "#000000",
      "webKitTextStrokeOpacity": "255",
      "textShadowX": 0,
      "textShadowY": 0,
      "textShadowBlur": 0,
      "textShadowColor": "#000000",
      "textShadowColorOpacity": "255"
}];

  if (localStorage.getItem("html") === null) {
    localStorage.setItem("css", JSON.stringify(arrCss));
    localStorage.setItem("html", JSON.stringify(arrHtml));
  }

  if (localStorage.getItem("css") === null) {
    localStorage.setItem("css", JSON.stringify(arrCss));
    localStorage.setItem("html", JSON.stringify(arrHtml));
  }
 

  return (

    <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
    </Router>

  );
}

export default App;
