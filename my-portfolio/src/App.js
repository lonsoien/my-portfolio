// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Heading from './components/layout/Heading';
import './App.css';
// import Menu from './components/layout/Menu'; 



function App() {
  return (
    <>
      <h1 style={{padding: "2rem"}}>LOUISE ONSØIEN</h1>
      <navigation>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </navigation>
      <h3>Text here about me and what I do</h3>
    <div className="example-container">
      <div> 
      <p>Text here about me and what I do</p>
      <p>Text here about me and what I do</p>
      <p>Text here about me and what I do</p>
      </div>
    </div>
    </>
  );
}

export default App;

//   <Routes></Routes>
//  <Route path="/" exact element={<Home />} />
// <Route path="/containerfolie" element={<ContainerFolie />} />
//
