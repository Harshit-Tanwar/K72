import FullScreenNav from "./components/navigation/FullScreenNav";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <div className="text-white overflow-x-hidden">
      <Helmet>
        <html />
        <meta name="robots" property="index, follow" />
        <meta property="og:site_name" content="K72" />
      </Helmet>

      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
