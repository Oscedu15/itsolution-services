import bg from "./assets/banner.jpg";

const Hero = () => {
  return (
    <section className="mt-[35px] pt-[99px] md:pt-[101px] flex items-center flex-col justify-center gap-40 w-full px-5 md:px-16 xl:pl-[152px] xl:pr-[128] pb-[264px] bg-[#f8f8f8] relative overflow-hidden">
      <div className="absolute left-0 -z-0 bg-cover hidden lg:block">
        <img src={bg} alt="bg" />
      </div>

      <div className="flex items-center flex-col xl:flex-row justify-center gap-10 md:gap-20 w-full relative">
        <div className="w-full flex flex-col items-center justify-center gap-6 md:items-start relative">
          <div>
            <div className="rounded-full flex items-center justify-center absolute md:left-[6px] left-[40%] max-w-min mx-auto group-hover:left-[6px] group-hover:right-auto duration-300 transition-all z-30 bg-[#333] py-1 px-2.5">
              <h4 className="leading-[21.6px] text-[12px] text-white uppercase tracking-[-0.32px]">
                Updtes
              </h4>
            </div>
            <h4>We secured 3M Series B rounds</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
