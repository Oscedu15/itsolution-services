import { motion } from "framer-motion";
import Accordion from "./accordion";
import { Link } from "react-router-dom";
import faq from './assets/testi-3.jpg';

const Faqs = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full pt-[60px] pb-[92px] md:pb-[80px] px-[24px] md:px-[32px] xl:px-[64px] gap-[60px] md:gap-[80px] relative" id="faqs">
      <div className="w-full flex flex-col items-center gap-[10px] md:w-[850px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{ amount: "some", once: true }}
          className="flex items-center py-2 bg-[#771cff] rounded-[11px]"
        >
          <h4 className="text-white ibm-plex-mono-semibold text-[12px] leading-[13.2px] text-center tracking-[1.2px] px-[18px] py-[6px] md:px-4">
            FAQS
          </h4>
        </motion.div>
        {/* Heading */}
        {/* Sub Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.3,
            },
          }}
          viewport={{ amount: "some", once: true }}
          className="text-[40px] leading-[42px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center relative w-full"
        >
          <h3 className="text-[#a3a6ae]">Get the Answers</h3>
          <h3 className="text-[#0f1728] mt-[-8px] md:mt-[-0px] text-center md:text-left">
            to Common Questions
          </h3>
        </motion.div>
        {/* Sub Label */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="bg-[#f5f5f5] pl-[20px] pr-[24px] rounded-[20px] h-full"
      >
        <Accordion />
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1,
            delay: 0.2,
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="text-[18px] mt-5 md:mt-0 leading-[24.3px]
         tracking-[-0.54px] be-vietnam-pro-medium 
         text-[#0f1728] bg-transparent rounded-full px-[24px] py-[24px] md:px-5 w-full text-center"
      >
        Still have any questions? Contact our
        <span className="underline ml-1 cursor-pointer hover:text-[#475466]">
          help center
        </span>
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1,
            delay: 0.1,
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="flex flex-col xl:flex-row items-center bg-[#fefbf3] w-full sm:w-[622px] h-[749px] 
         rounded-[24px] overflow-hidden md:w-full xl:w-full xl:h-[480px]"
      >
        <div
          className="flex flex-col gap-12 items-start
          w-full px-10 md:pl-16 pt-[60px] pb-[86px]"
        >
          <h1
            className="text-[40px] leading-[44px] tracking-[-1px] text-[#0f1728] w-[80%] 
            md:text-[52px] md:leading-[57.2px] md:w-[505px]"
          >
            Shoot your startup into a new era, start now.
          </h1>
          <Link to="" target="_blank" 
          className="w-full md:w-max flex justify-start">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.44, 0, 0, 1],
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-base leading-[21.6px] 
          tracking-[-0.48px] be-w-vietnam-pro-medium text-[#fff] bg-[#854dff] rounded-full px-[18px]
          md:px-[22px] py-[14px] flex items-center justify-center
          min-w-full md:min-w-min"
            >
              Connect Us
            </motion.button>
          </Link>
        </div>
        <img src={faq} alt="faq" className="rounded-b-[24px]
        h-[400px] object-cover w-full xl:h-full xl:w-[631px]
        md:rounded-b-[0px]" />
      </motion.div>
    </section>
  );
};

export default Faqs;
