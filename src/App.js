import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom"; 

import Home from "./Components/Home";
import Cp from "./Components/cp"
import Project from "./Components/Projects"
import Achievment from './Components/Achievment';
import Education from './Components/Educations';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import About from "./Components/About"
import Contact from "./Components/Contact";
import Errors from "./Components/Errors";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="Apps">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="cp" element={<Cp/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="Achievment" element={<Achievment/>}/>
      <Route path="Education" element={<Education/>}/>
      <Route path="Skills" element={<Skills/>}/>
      <Route path="Experience" element={<Experience/>}/>
      <Route path="*" element={<Errors/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
