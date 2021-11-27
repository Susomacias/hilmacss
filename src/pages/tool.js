import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Element from "../components/element";
import Objects from "../components/objects";
import CssCode from "../components/cssCode";
import CssDraw from "../components/cssDraw";
import CssForm from "../components/cssForm";
import HtmlCode from "../components/htmlCode";
import Provider from "../utils/provider";
import { DataProvider } from "../utils/DataContext";
import { CssProvider } from "../utils/cssContext";
import { HtmlProvider } from "../utils/htmlContext";

let arrHtml = [{ nombre: "myCssElement", classOrId: "class" }];
let arrCss = [];

const Tool = (_) => (
  <Provider>
    <HtmlProvider> 
      <CssProvider>
        <DataProvider>
          <Container>
            {useEffect(() => {
             // localStorage.clear();
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
        </DataProvider>
      </CssProvider>
    </HtmlProvider>
  </Provider>
);

export default Tool;
