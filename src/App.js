import { Container} from "react-bootstrap";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./Dashboard";
import CoursesList from "./CoursesList";
import Profile from "./Profile";
import CoursePage from "./CoursePage";
import LessonPage from "./LessonPage";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import PracticeLessons from "./PracticeLessons";
import PracticePage from "./PracticePage";
import Particles from "react-tsparticles";
import Explore from "./Explore";
import CourseLessons from "./CourseLessons";
import './App.css';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import LandingPageAuth from "./LandingPageAuth";
import PageNotFound from "./404Page";
import LessonPractices from "./LessonPractices";
import PracticeSites from "./PracticeSites";




function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
    
    <Container>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#363636",
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 5000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true
            }}
        />
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/courses" element={<CoursesList/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/home" element={<LandingPageAuth/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/courses/:courseCode" element={<CoursePage/>}/>
          <Route path="/courses/:courseCode/lessons" element={<CourseLessons/>}/>
          <Route path="/lessons/:lessonCode" element={<LessonPage/>}/>
          <Route path="/lessons/:lessonCode/practices" element={<LessonPractices/>}/>
          <Route path="/practice-lessons" element={<PracticeLessons/>}/>
          <Route path="/practice-lessons/:practiceCode" element={<PracticePage/>}/>
          <Route path="/practice-lessons/:practiceCode/practice-sites" element={<PracticeSites/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Container>
    
  );
}

export default App;
