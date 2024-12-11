import { useRef } from "react";
import testimonial1 from "./assets/testi-1.jpg";
import testimonial2 from "./assets/testi-2.jpg";
import testimonial3 from "./assets/testi-3.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

const TestimonialCarouselDesktop = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "30% start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["68px", "-997px"]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-start w-full overflow-hidden relative h-[467px]"
    >
      <motion.div style={{ x }} className="flex gap-10 absolute left-[68px]">
        {/* Testi 01 */}
        <div className="flex flex-row gap-[40px] items-center justify-center bg-white p-[40px] rounded-[16px] relative w-[1000px]">
          <img
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
            src={testimonial1}
            alt="testimonial1"
          />
          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-black text-[20px] leading-[38.4px] tracking-[-1px] w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, neque suscipit. Similique voluptas in, et, praesentium
              dolorum, quibusdam autem laboriosam vero porro quam incidunt saepe
              fugit quisquam mollitia eveniet voluptatum!
            </h4>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-[18px] leading-[28px]">Kerlin</h5>
              <p className="leading-[24px] uppercase text-[#475466]">
                Director of Marketing
              </p>
            </div>
          </div>
        </div>
        {/* Testi 01 */}
        {/* Testi 02 */}
        <div className="flex flex-row gap-[40px] items-center justify-center bg-white p-[40px] rounded-[16px] relative w-[1000px]">
          <img
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
            src={testimonial2}
            alt="testimonial2"
          />
          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-black text-[20px] leading-[38.4px] tracking-[-1px] w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, neque suscipit. Similique voluptas in, et, praesentium
              dolorum, quibusdam autem laboriosam vero porro quam incidunt saepe
              fugit quisquam mollitia eveniet voluptatum!
            </h4>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-[18px] leading-[28px]">Clarke</h5>
              <p className="leading-[24px] uppercase text-[#475466]">
                Tech Startup Founder
              </p>
            </div>
          </div>
        </div>
        {/* Testi 02 */}
        {/* Testi 03 */}
        <div className="flex flex-row gap-[40px] items-center justify-center bg-white p-[40px] rounded-[16px] relative w-[1000px]">
          <img
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
            src={testimonial3}
            alt="testimonial3"
          />
          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-black text-[20px] leading-[38.4px] tracking-[-1px] w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, neque suscipit. Similique voluptas in, et, praesentium
              dolorum, quibusdam autem laboriosam vero porro quam incidunt saepe
              fugit quisquam mollitia eveniet voluptatum!
            </h4>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-[18px] leading-[28px]">Smithhen</h5>
              <p className="leading-[24px] uppercase text-[#475466]">
                Director of Marketing
              </p>
            </div>
          </div>
        </div>
        {/* Testi 03 */}
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselDesktop;
