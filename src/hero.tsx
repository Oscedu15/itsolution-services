// Images
import stack1 from "./assets/stack-1.avif";
import stack2 from "./assets/stack-2.avif";
import stack3 from "./assets/stack-3.avif";
import stack4 from "./assets/stack-4.avif";
import stars from "./assets/stars.svg";
import bg from "./assets/banner.jpg";
import arrow from "./assets/arrow.svg";
import herobell from "./assets/14.webp";
import grt from "./assets/image-4.avif";
// Animation
import { motion } from "framer-motion";
//Componentes
import Form from "./form";
import StartupCarousel from "./startup-carousel";

const Hero = () => {
  return (
    <section className="mt-[35px] pt-[99px] md:pt-[101px] flex items-center flex-col justify-center gap-40 w-full px-5 md:px-16 xl:pl-[152px] xl:pr-[120px] pb-[264px] bg-[#f8f8f8] relative overflow-hidden">
      <div className="absolute left-0 -z-0 bg-cover hidden lg:block">
        <img src={bg} alt="bg" />
      </div>

      <div className="flex items-center flex-col xl:flex-row justify-center gap-10 md:gap-20 w-full relative">
        <div className="w-full flex flex-col items-center justify-center gap-6 md:items-start relative">
          {/* Update Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 180,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="pr-0 flex items-center justify-start cursor-pointer pl-[104px] rounded-full py-[13px] relative gap-[7xp] group w-[352px] bg-transparent"
          >
            <div className="rounded-full flex items-center justify-center absolute md:left-[6px] left-[40%] max-w-min mx-auto group-hover:left-[6px] group-hover:right-auto duration-300 transition-all z-30 bg-[#333] py-1 px-2.5">
              <h4 className="leading-[21.6px] text-[12px] text-white uppercase tracking-[-0.32px]">
                Updtes
              </h4>
            </div>
            <div className="absolute left-[-1px] top-[-0.5px] w-[352px] h-[43px] overflow-hidden mr-0 rounded-full">
              <div className="bg-[#fff]/50 w-[0.01px] h-[43px] rounded-full absolute top-[0.1px] group-hover:w-full left-[1px] transition-all !duration-300 "></div>
            </div>
            <h4 className="text-[14px] leading-[15.4px] tracking-[-0.14px] font-semibold text-transparent group-hover:text-black transition-all z-40 be-vietnam-pro-medium duration-300">
              We secured 3M Series B rounds
            </h4>
            <img
              src={arrow}
              alt="flecha"
              className="w-3 h-3 z-40 ml-2 opacity-0 group-hover:opacity-100 duration-300"
            />
          </motion.div>
          {/* Header  */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="text-[45px] leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          >
            Design website without Coding Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="be-vietnam-pro-medium text-[#475466] text-[18px] leading-[24.3px] tracking-[-0.54px] md:text-[28px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]"
          >
            What kind of website would you like to create? Let's Get started,
            our software equips you with the toole yo need to thrive in today's
            competitive business landscape.
          </motion.p>
          {/* Stacks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] },
            }}
            viewport={{ amount: "some", once: true }}
            className="flex flex-col md:flex-row gap-4 md:gap-1.5 items-center"
          >
            <div className="flex w-[108px] h-[37px] relative">
              <img
                src={stack1}
                alt="1"
                className="rounded-full w-[37px] h-[37px] object-cover border-[2px] border-white absolute left-0 hover:top-[10px] top-0 transition-all duration-300"
              />
              <img
                src={stack2}
                alt="2"
                className="rounded-full w-[37px] h-[37px] object-cover border-[2px] border-white absolute left-6 hover:top-[10px] top-0 transition-all duration-300"
              />
              <img
                src={stack3}
                alt="3"
                className="rounded-full w-[37px] h-[37px] object-cover border-[2px] border-white absolute left-12 hover:top-[10px] top-0 transition-all duration-300"
              />
              <img
                src={stack4}
                alt="4"
                className="rounded-full w-[37px] h-[37px] object-cover border-[2px] border-white absolute left-[72px] hover:top-[10px] top-0 transition-all duration-300"
              />
            </div>
            <img src={stars} alt="stars" className="w-[116px]" />
          </motion.div>
        </div>
        <Form />
      </div>

      <StartupCarousel />

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 100,
            stiffness: 300,
            mass: 1,
            delay: 0.5,
          },
        }}
        viewport={{ amount: "some", once: true }}
        src={herobell}
        alt="herobell"
        className="absolute hidden md:block w-[120px] top-[616px] right-[760px] xl:top-[76px] xl:right-[500px] z-10"
      />

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 100,
            stiffness: 320,
            mass: 1,
            delay: 0.7,
          },
        }}
        viewport={{ amount: "some", once: true }}
        src={grt}
        alt="grt"
        className="absolute w-[331px] top-[776px] right-[-35px] md:top-[940px] md:right-[-20px] xl:top-[146px] xl:left-[630px] !rotate-[-238deg]"
      />
    </section>
  );
};

export default Hero;
