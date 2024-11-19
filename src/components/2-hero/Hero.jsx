import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import devAnimation from "../../animation/dev.json"
import { useRef } from "react";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Full-stack developer
        </motion.h1>

        <p className="sub-title">
          I’m Mohamed sidiya, a Full-Stack developer based in Nouakchoot City.
        </p>

        <div className="all-icons flex">
          <a href="">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/medsidiya">
            <div className="icon icon-github"></div>
          </a>
          <a href="">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          // style={{color:"orange"}}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
