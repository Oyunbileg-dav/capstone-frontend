import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>
          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route exact path="/" element={<Account/>} />
        <Route exact path="/free" element={<FreeComponent/>} />
        <Route exact path="/auth" element={<ProtectedRoutes/>}>
          <Route path="/auth" element={<AuthComponent/>}/>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
