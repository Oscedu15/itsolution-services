import { useState } from "react";
import plus from "./assets/plus.png";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      {/* }accordition1  */}
      <button
        onClick={() => toggleAccordion("accordion-flush-body-1")}
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right
       text-[#0f1728] border-gray-200 gap-3 z-40"
      >
        <span
          className="text-[18px] text-left 
        leading-[24.3px] tracking-[-0.36px]"
        >
          What Does a Finansial Advisor Do?
        </span>
        <img
          src={plus}
          alt="plus"
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-1"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all ${
          isOpen["accordion-flush-body-1"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-1"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Our power of choice is untrammelled and when nothing prevents
            claims.
          </p>
        </div>
      </div>
      {/* accordition1  */}
      {/* accordition2  */}
      <button
        onClick={() => toggleAccordion("accordion-flush-body-2")}
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right
       text-[#0f1728] border-gray-200 gap-3 z-40"
      >
        <span
          className="text-[18px] text-left 
        leading-[24.3px] tracking-[-0.36px]"
        >
          What Does a Finansial Advisor Do?
        </span>
        <img
          src={plus}
          alt="plus"
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-2"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all ${
          isOpen["accordion-flush-body-2"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-2"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Our power of choice is untrammelled and when nothing prevents
            claims.
          </p>
        </div>
      </div>
      {/* According 2 */}
      {/* accordition3  */}
      <button
        onClick={() => toggleAccordion("accordion-flush-body-3")}
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right
       text-[#0f1728] border-gray-200 gap-3 z-40"
      >
        <span
          className="text-[18px] text-left 
        leading-[24.3px] tracking-[-0.36px]"
        >
          What Does a Finansial Advisor Do?
        </span>
        <img
          src={plus}
          alt="plus"
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-3"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all ${
          isOpen["accordion-flush-body-3"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-3"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Our power of choice is untrammelled and when nothing prevents
            claims.
          </p>
        </div>
      </div>
      {/* According 3 */}
      {/* accordition4  */}
      <button
        onClick={() => toggleAccordion("accordion-flush-body-4")}
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right
       text-[#0f1728] border-gray-200 gap-3 z-40"
      >
        <span
          className="text-[18px] text-left 
        leading-[24.3px] tracking-[-0.36px]"
        >
          What Does a Finansial Advisor Do?
        </span>
        <img
          src={plus}
          alt="plus"
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-4"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all ${
          isOpen["accordion-flush-body-4"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-4"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Our power of choice is untrammelled and when nothing prevents
            claims.
          </p>
        </div>
      </div>
      {/* According 4 */}
    </div>
  );
};

export default Accordion;
