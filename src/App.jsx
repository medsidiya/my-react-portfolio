import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showScroll , setShowScroll] = useState(false);
  const goUp = ()=>{
    let up = document.getElementById("goUp");
    window.addEventListener("click" ,()=>{
      up.scrollY = 0;
    })
  }
  useEffect(()=>{
    addEventListener("scroll",()=>{
      if (window.scrollY > 300) {
        setShowScroll(true);
      }else{
        setShowScroll(false);
      }
    })
  }
    ,[]);
  return (
    <div id="" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

    <a href="#" style={{opacity: showScroll ? 1 : 0 ,transition: "1s"}}>
        <button className="icon-keyboard_arrow_up scroll2Top"
        onClick={goUp}
        ></button>
    </a>
    </div>
  );
}

export default App;
