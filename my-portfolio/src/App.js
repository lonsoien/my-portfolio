
//import Heading from './components/layout/Heading';
import './App.css';
import Menu from './components/layout/Menu'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';


function App() {
  return (
    <>
      <Router>
      <Menu />
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;
