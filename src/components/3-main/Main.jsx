import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [currentActive , setCurrentActive] = useState("all");
  const [arr , setArr] = useState(myProjects);
  
  function handleActive(selectedCategory){
    if(selectedCategory !== "all"){
      setCurrentActive(selectedCategory);

      const newArr = myProjects.filter((item)=>{
        const categ = item.category.find((i)=>{
            return i === selectedCategory;
        });
        return categ === selectedCategory;
      });
  
      setArr(newArr);
    }else{
      setCurrentActive("all")
      setArr(myProjects);

    }
  }
  return (
    <main className="flex">
      
      <section className="flex  left-section">
        <button onClick={()=>{handleActive("all")}} className={currentActive === "all"?"active":null}>
          all projects</button>
        <button onClick={()=>{handleActive("css")}} className={currentActive === "css"?"active":null} >HTML & CSS</button>
        <button onClick={()=>{handleActive("js")}} className={currentActive === "js"?"active":null} >JavaScript</button>
        <button onClick={()=>{handleActive("react")}} className={currentActive === "react"?"active":null} >React & MUI</button>
        <button onClick={()=>{handleActive("node")}} className={currentActive === "node"?"active":null} >Node & Express</button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
