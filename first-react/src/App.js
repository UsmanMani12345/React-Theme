import React from "react";
import Services from "./Services/Services";
import '../src/bootstrap.min.css';
import Main from "./Main/Main";
import Example from "./Canvas/Canvas";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import MiniCard from "./Minicard/MiniCard";
import Blog from "./Blog/Blog";
import FullCard from "./Cards/Card";
import Footer from "./Footer/Footer";



function App() {
  return (
    <div className="App">
      <Example/>
      <Main/>
      <Services/>  
      <About/>
      <Portfolio/>
      <MiniCard/>
      <Blog/>
      <FullCard/>
      <Footer/>
    </div>
  );
}

export default App;
