import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const Testimonial = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const testimonials = [
    {
      img: "/10.png",
    },
    {
      img: "/9.png",
    },
    {
      img: "/11.jpg",
    },
    {
      img: "/12.jpg",
    },
  ];

  const leftSlide = React.useRef();
  const rightSlide = React.useRef();
  const imageList = React.useRef<HTMLDivElement>();
  const imageWidth = React.useRef<number>();

  React.useEffect(() => {
    if (imageList.current) {
      imageWidth.current = imageList.current.firstElementChild?.clientWidth;
    }
  }, []);

  const leftScroll = (e: any) => {
    e.preventDefault(); // Prevent default button behavior
    if (imageList.current) {
      const newScrollLeft = Math.max(0, imageWidth?.current as number);

      imageList.current.scrollBy({ left: 476, behavior: "smooth" });
    }

    console.log(imageList);
  };

  const rightScroll = (e: any) => {
    if (imageList?.current) {
      imageList.current.scrollBy({ left: -476, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-4 md:pt-24 md:pb-24 bg-gray-50 overflow-x-hidden">
      <div className="px-[7.5rem]">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-brand-primary text-[#27235E] font-medium text-[15px] md:text-[20px] leading-[1.875rem]">
              Activities
            </h4>
            <p className="text-[20px] md:text-[25px] text-gray-900 large-header-text">
              Events And Lifestyle.
            </p>
          </div>

          <div className="flex gap-5 mt-5 md:mt-0">
            <button
              className="p-2 rounded-full bg-[#27235E] w-10 h-10"
              onClick={leftScroll}
              id="left-slide"
              ref={leftSlide}
            >
              <FaArrowLeft className="w-[1.5rem] text-white" />
            </button>
            <button
              onClick={rightScroll}
              className="p-2 rounded-full bg-[#27235E] w-10 h-10"
              id="right-slide"
              ref={rightSlide}
            >
              <FaArrowRight className="w-[1.5rem] text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          ref={imageList as React.LegacyRef<HTMLDivElement>}
          className="cards max-w-[75rem] w-[95%] overflow-auto image-list"
        >
          <div className="">
            <div className="md:grid flex flex-col mt-4 relative grid-cols-[repeat(4,1fr)] gap-5 ">
              {testimonials.map((data) => {
                return (
                  <div
                    className={` w-[31rem] rounded-lg hover:border-gray-500 duration-200 delay-100 py-[1.5rem] shadow-sm border px-[2.5rem]`}
                  >
                    <img src={data.img} className="" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
