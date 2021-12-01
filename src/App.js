import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
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
    "margenIzquierdo": 0
}];

  //localStorage.clear();
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
      <Container>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
