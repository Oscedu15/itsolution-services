import testimonial1 from "./assets/testi-1.jpg";
import testimonial2 from "./assets/testi-2.jpg";
import testimonial3 from "./assets/testi-3.jpg";

import { motion } from "framer-motion";

const TestimonialCarouselMobile = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="flex flex-col gap-[30px] items-center justify-center bg-white rounded-[16px] w-full p-[25px]"
      >
        <img
          src={testimonial1}
          alt="testimonial1"
          className="rounded-[16px] w-full h-[465px] object-cover"
        />
        <div className="flex flex-col gap-6">
          <h4 className="text-[#050505] text-[24px] leading-[31.2px] tracking-[-1px] w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            neque suscipit. Similique voluptas in, et, praesentium dolorum,
            quibusdam autem laboriosam vero porro quam incidunt saepe fugit
            quisquam mollitia eveniet voluptatum!
          </h4>
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[18px] leading-[28px] text-[#0f1728]">
              Kerlin
            </h5>
            <p className="leading-[24px] text-[#475466]">
              Director of Warketing
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="flex flex-col gap-[30px] items-center justify-center bg-white rounded-[16px] w-full p-[25px]"
      >
        <img
          src={testimonial2}
          alt="testimonial2"
          className="rounded-[16px] w-full h-[465px] object-cover"
        />
        <div className="flex flex-col gap-6">
          <h4 className="text-[#050505] text-[24px] leading-[31.2px] tracking-[-1px] w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            neque suscipit. Similique voluptas in, et, praesentium dolorum,
            quibusdam autem laboriosam vero porro quam incidunt saepe fugit
            quisquam mollitia eveniet voluptatum!
          </h4>
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[18px] leading-[28px] text-[#0f1728]">
              Clarke
            </h5>
            <p className="leading-[24px] text-[#475466]">
              Tech Startup Founder
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{ amount: "some", once: true }}
        className="flex flex-col gap-[30px] items-center justify-center bg-white rounded-[16px] w-full p-[25px]"
      >
        <img
          src={testimonial3}
          alt="testimonial3"
          className="rounded-[16px] w-full h-[465px] object-cover"
        />
        <div className="flex flex-col gap-6">
          <h4 className="text-[#050505] text-[24px] leading-[31.2px] tracking-[-1px] w-full">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloribus, neque suscipit. Similique voluptas in, et, praesentium
            dolorum, quibusdam autem laboriosam vero porro quam incidunt saepe
            fugit quisquam mollitia eveniet voluptatum!"
          </h4>
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[18px] leading-[28px] text-[#0f1728]">
              Smithhen
            </h5>
            <p className="leading-[24px] text-[#475466]">
              Director of Marketing
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselMobile;
