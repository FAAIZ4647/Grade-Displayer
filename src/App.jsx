import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollegeHeader from "./components/CollegeHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Semester1 from "./pages/Semester1";
import Semester2 from "./pages/Semester2";
import OverallPerformance from "./pages/OverallPerformance";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <CollegeHeader />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/semester-1" element={<Semester1 />} />
            <Route path="/semester-2" element={<Semester2 />} />
            <Route path="/overall" element={<OverallPerformance />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
