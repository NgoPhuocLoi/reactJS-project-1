import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Home from "./pages/Home";
import { Nav } from "./Components/Project-2";
function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-1" element={<Project1 />} />
                <Route path="/project-2" element={<Project2 />} />
            </Routes>
        </>
    );
}

export default App;
