import { useRef } from "react";
import TestimonialCarouselDesktop from "./testimonial-carousel-desktop";
import TestimonialCarouselMobile from "./testimonial-carousel-mobile";

//Animation
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center w-full py-[60px] md:pb-[80px]">
      <div className="w-full flex flex-col items-center gap-[45px] pb-[60px] md:pb-[120px]">
        <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]" id="testimonials">
          {/* Heading Section */}
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
            className="flex items-center py-2 px-3 bg-[#333] rounded-full"
          >
            <h4 className="ibm-plex-mono-semibold uppercase text-white leading-[13.2px] text-center tracking-[1.2px] text-[12px]">
              Brand Work
            </h4>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="w-full text-center sm:w-[669px] text-[40px] leading-[48px] tracking-[-1.2px] md:text-[44px] md:leading-[52.8px] text-[#0f1728] md:w-full"
          >
            Our Commitment
          </motion.h1>
          {/* Heading Section */}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.4,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[#b24dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-medium bold md:leading-[80px] tracking-[-3px]
        "
            >
              35%
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.5,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Years Of Experience
            </motion.p>
          </div>
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.8,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[#b24dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-medium bold md:leading-[80px] tracking-[-3px]
        "
            >
              100%
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.8,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Results Guaranteed
            </motion.p>
          </div>
          <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.6,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[#b24dff] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-medium bold md:leading-[80px] tracking-[-3px]
        "
            >
              4,000+
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.9,
                },
              }}
              viewport={{ amount: "some", once: true }}
              className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
            >
              Companies Trust Us
            </motion.p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center gap-[80px]"
        ref={targetRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.44, 0, 0, 1],
              delay: 0.3,
            },
          }}
          viewport={{ amount: "some", once: true }}
          className="text-[40px] leading-[42px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center relative w-full"
        >
          <h3 className="text-[#a3a6ae]">Clients Testimonial</h3>
          <h3 className="text-[#0f1728] mt-[-8px] md:mt-[-0px] text-center md:text-left">
            What customers say
          </h3>
        </motion.div>
        <div className="flex md:hidden w-full items-center">
          <TestimonialCarouselMobile />
        </div>
        <div className="md:flex hidden w-full items-center">
          <TestimonialCarouselDesktop />
        </div>
      </div>

      <Link to='/' className="w-full flex items-center justify-center px-4">
      <motion.button 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration:0.8,
          delay:0.5,
          ease: [0.44, 0, 0, 1],
        },
      }}
      viewport={{ amount: "some", once: true }}
      className="mt-[20px] leading-[21.6px] tracking-[-0.48px] text-[14px] bg-[#333] text-[#fff] rounded-full px-[18px] py-[14px] md:px-5 flex items-center justify-center w-full md:max-w-max">
        Learn More
      </motion.button>
      </Link>
    </div>
  );
};

export default Testimonials;
