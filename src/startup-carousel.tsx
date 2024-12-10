import amazon from "./assets/Amazon@4x.png";
import framer from "./assets/Framer@4x.png";
import openai from "./assets/OpenAI@4x.png";
import splice from "./assets/Splice@4x.png";
import spotify from "./assets/Spotify@4x.png";
import tesla from "./assets/Tesla@4x.png";
import todoist from "./assets/Todoist@4x.png";

//Animation
import { motion } from "framer-motion";

const StartupCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{ amount: "some", once: true }}
      className="w-full flex flex-col items-center justify-center gap-4 absolute bottom-10 md:bottom-[50px] px-[20px] sm:px-[60px]"
    >
      <h4 className="text-[20px] text-[#68708c] leading-[27px] tracking-[-0.5px]">
        Join other tech leaders:
      </h4>

      <div className="relative w-full h-[100px]">
        <div
          className="flex w-full h-full place-items-center m-0 p-[10px] list-none opacity-100 relative"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0)5%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0)95%)",
          }}
        >
          <ul className="flex w-[340%] h-full max-h-full place-items-center m-0 p-0 list-none gap-[80px] flex-row transform absolute animate">
            <li className="w-[121px]">
              <img src={amazon} alt="amazon" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={framer} alt="amazon" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={openai} alt="openai" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={splice} alt="splice" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={spotify} alt="spotify" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={tesla} alt="tesla" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={todoist} alt="todolist" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={amazon} alt="amazon" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={framer} alt="amazon" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={openai} alt="openai" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={splice} alt="splice" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={spotify} alt="spotify" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={tesla} alt="tesla" className="min-w-[121px]" />
            </li>
            <li className="w-[121px]">
              <img src={todoist} alt="todolist" className="min-w-[121px]" />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StartupCarousel;
