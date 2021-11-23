import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./pages/cover";
import Tool from "./pages/tool";



function App() {
  return (

    <Router>
      <div>
      </div>
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
