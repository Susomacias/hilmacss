import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Element from "../components/element";
import Objects from "../components/objects";
import CssCode from "../components/cssCode";
import CssDraw from "../components/cssDraw";
import CssForm from "../components/cssForm";
import HtmlCode from "../components/htmlCode";
import Provider from "../utils/provider";

let arrHtml = [];
let arrCss = [];

const Tool = (_) => (
  <Provider>
  <Container>
    {useEffect(() => {
      localStorage.clear();
      localStorage.setItem("css", JSON.stringify(arrCss));
      localStorage.setItem("html", JSON.stringify(arrHtml));
    })}
    <h1>Herramienta</h1>
    <Row>
      <Col>
        
          <Element></Element>
          <Objects></Objects>

      </Col>
      <Col>

          <CssForm />

      </Col>
      <Col>
        <CssDraw />
      </Col>
    </Row>
    <Row>
      <Col>
        <HtmlCode />
      </Col>
      <Col>
        <CssCode />
      </Col>
    </Row>
  </Container>
  </Provider>
);

export default Tool;
