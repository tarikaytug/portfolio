import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "React",
            1000,
            "Next.js",
            1000,
            "Typescript",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
