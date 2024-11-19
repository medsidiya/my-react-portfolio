import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [them , setThem] = useState(localStorage.getItem("currentThem") ?? "dark")

  useEffect(()=>{
    if(them === "dark"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  },[them])
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex" onClick={ ()=>{
          //add to localstorage
          localStorage.setItem("currentThem", them === "dark" ? "light":"dark");
          //get the value from localstorage
          setThem(localStorage.getItem("currentThem"));
      }
      
      }>
        {them === "dark" ? (<span className="icon-sun"></span>):
        (<span className="icon-moon-o"></span>)
        }
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li >
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />   
              
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
