import FullScreenNav from "./components/navigation/FullScreenNav";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import Agence from "./pages/agence";
import Projects from "./pages/projects";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="text-white">
       <Navbar/>
       <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
