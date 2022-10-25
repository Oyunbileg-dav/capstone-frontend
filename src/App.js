import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./Dashboard";
import CoursesList from "./CoursesList";
import CoursesPage0 from "./CoursePage0";
import Profile from "./Profile";
import CoursePage1 from "./CoursePage1";
import Lesson from "./Lesson";


function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Capstone Web App Draft</h1>
          <section id="navigation">
            <a href="/">Home</a>
            <a href="/courses-list">CoursesList</a>
            <a href="/dashboard">Dashboard</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route exact path="/" element={<Account/>} />
        <Route exact path="/courses-list" element={<CoursesList/>} />
        <Route exact path="/course-page0" element={<CoursesPage0/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/course-page1" element={<CoursePage1/>}/>
          <Route path="/lesson" element={<Lesson/>}/>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
