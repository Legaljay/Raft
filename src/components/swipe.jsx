import {Navigation, Pagination } from "swiper/modules";
import {A11y} from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import arrowsmallleft from "../assets/arrow-small-left.svg";
import arrowsmallright from "../assets/arrow-small-right.svg";
import framethree from "../assets/Images/Frame 127.png";
import framefour from "../assets/Images/Frame 130.png";
import framefive from "../assets/Images/Frame 136.png";

const Swipe = () => {
  return (
      <Swiper
        className="flex flex-col lg:flex-row justify-between"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
            <div className="w-[342px] lg:w-[416px] h-[317px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
                <p className="text-[16px] lg:text-[24px] font-normal leading-[32px] text-[#292929]">
                  RAFT has transformed my approach to finance. Their smart
                  investing options have helped me grow my wealth, and their
                  user-friendly platform makes managing my money a breeze. I've
                  never felt more confident about my financial future.
                </p>
                <div className="flex h-[80px] items-center w-[277px] lg:w-[352px] justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] lg:text-[24px] font-[510] text-[#070606] leading-[24px]">
                      Robert Fox
                    </p>
                    <p className="text-[12px] lg:text-[14px] font-normal leading-normal text-[#292929]">
                      Happy RAFT User
                    </p>
                  </div>
                  <img
                    src={framethree}
                    alt="user"
                    className="w-[40px] lg:w-[80px] h-[40px] lg:h-[80px]"
                  />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[342px] lg:w-[416px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
                <p className="text-[16px] lg:text-[24px] font-normal leading-[32px] text-[#292929]">
                  I can't express how grateful I am to RAFT. Their wealth
                  management services have been a game-changer for my family's
                  financial security. The expert guidance and personalized
                  strategies have given us peace of mind, knowing that our
                  future is in capable hands.
                </p>
                <div className="flex h-[80px] items-center w-[277px] lg:w-[352px] justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] lg:text-[24px] font-[510] text-[#070606] leading-[24px]">
                      Cameron Williamson
                    </p>
                    <p className="text-[12px] lg:text-[14px] font-normal leading-normal text-[#292929]">
                      Happy RAFT User
                    </p>
                  </div>
                  <img
                    src={framefour}
                    alt="user"
                    className="w-[40px] lg:w-[80px] h-[40px] lg:h-[80px]"
                  />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[342px] lg:w-[416px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
                <p className="text-[16px] lg:text-[24px] font-normal leading-[32px] text-[#292929]">
                  RAFT's financial planning services have been a lifeline for
                  me. I always struggled with managing my money, but their team
                  crafted a tailored plan that addressed my goals and concerns.
                  It's been a game-changer in achieving my financial dreams
                </p>
                <div className="flex h-[80px] items-center w-[277px] lg:w-[352px] justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] lg:text-[24px] font-[510] text-[#070606] leading-[24px]">
                      Esther Howard
                    </p>
                    <p className="text-[12px] lg:text-[14px] font-normal leading-normal text-[#292929]">
                      Happy RAFT User
                    </p>
                  </div>
                  <img
                    src={framefive}
                    alt="user"
                    className="w-[40px] lg:w-[80px] h-[40px] lg:h-[80px]"
                  />
                </div>
            </div>
        </SwiperSlide>
        <SwiperNavButtons/>
      </Swiper>
  );
};

export default Swipe;


export const SwiperNavButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flex gap-[16px] self-end">
            <button 
                className="flex justify-center items-center w-[60px] h-[60px] bg-[#FFF] p-[18px] border-[#000] rounded-full border-solid border-[1px]"
                onClick={()=>swiper.slidePrev(500)}
                type='button'
                aria-label="prev slide"
            >
            <img src={arrowsmallleft} alt="left button" />
            </button>
            <button 
                className="flex justify-center items-center w-[60px] h-[60px] bg-[#FFF] p-[18px] border-[#000] rounded-full border-solid border-[1px]"
                onClick={()=>{swiper.slideNext(500, false)}}
                type="button"
                aria-label="next slide"
            >
            <img src={arrowsmallright} alt="right button" />
            </button>
        </div>
    )
}