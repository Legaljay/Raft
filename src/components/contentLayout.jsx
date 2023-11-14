import People from "../assets/Images/people.png";
import people from "../assets/Images/Frame 31.svg";
import Bloomberg from "../assets/Images/bloomberg-1.png";
import CNBC from "../assets/Images/cnbc-1.png";
import CNN from "../assets/Images/cnn-logo 1.png";
import docLogo from "../assets/Images/document-duplicate.png";
import Forbes from "../assets/Images/Forbes_logo 1.png";
import identification from "../assets/Images/identification.png";
import locklogo from "../assets/Images/lock-closed.png";
import moneySend from "../assets/Images/money-send.png";
import reuterLogo from "../assets/Images/reuters-2-1 1.png";
import walletMinus from "../assets/Images/wallet-minus.png";
import frameOne from "../assets/Frame94.svg";
import customATM from "../assets/svg/atm.svg";
import framesix from "../assets/Images/Frame 150.png";
import frame106 from "../assets/Frame 106.svg";
import frame112 from "../assets/Frame 112.svg";
import group8 from "../assets/Group 8.svg";
import banknotes from "../assets/svg/banknotes.svg";
import circlestack from "../assets/svg/circle-stack.png";
import arowleftright from "../assets/svg/arrows-right-left.svg";
import Accordion from "./Accordion";
import Swipe from "./swipe";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContentLayout() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-black">
        <div className="mt-[90px]">
          <div className="w-[342px] lg:w-[896px]  flex flex-col gap-[32px]  mx-auto justify-center items-center text-white overflow-hidden">
            <div className="items-center flex-col flex gap-[16px] self-stretch">
              <motion.span className="flex justify-center items-center gap-[10px] px-[6px] py-[12px] w-[204px] h-[32px]  bg-white/20  rounded-[100px] text md:text-center">
                <span className="text-[14px] md:text-[16px] font-[400] text-[#DCDCDC] leading-none">
                  Introducing Raft Cards
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0669 9.55806C14.311 9.80214 14.311 10.1979 14.0669 10.4419L7.81694 16.6919C7.57286 16.936 7.17714 16.936 6.93306 16.6919C6.68898 16.4479 6.68898 16.0521 6.93306 15.8081L12.7411 10L6.93306 4.19194C6.68898 3.94786 6.68898 3.55214 6.93306 3.30806C7.17714 3.06398 7.57286 3.06398 7.81694 3.30806L14.0669 9.55806Z"
                    fill="white"
                  />
                </svg>
              </motion.span>
              <div className="relative flex flex-col gap-[24px] justify-center items-center">
                <motion.p
                  initial={{ opacity: 1, x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, type: "spring", stiffness: 10 }}
                  className="w-[342px] lg:w-[896px] text-[40px] lg:text-[96px] text-center drop-shadow font-none leading-tight p-0 "
                >
                  Building the future of banking
                </motion.p>
                <motion.p
                  initial={{ opacity: 1, x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: .2, type: "spring", stiffness: 10 }}
                  className="w-[342px] lg:w-[668px] text-center text-[16px] lg:text-[24px] text-[#BDBDBD] font-[400] leading-none"
                >
                  Experience the future of banking with RAFT. We&apos;re here to
                  empower your financial journey.
                </motion.p>
                <div className="absolute top-0 left-0 z-0">
                  <svg
                    className="w-[342px] md:w-[500px] lg:w-[842px] h-[340px] md:h-[450px] lg:h-[552px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="842"
                    height="552"
                    viewBox="0 0 842 552"
                    fill="none"
                  >
                    <path
                      d="M50.4118 1H1V46.8333M50.4118 1V46.8333M50.4118 1H99.8235M50.4118 46.8333H1M50.4118 46.8333H99.8235M50.4118 46.8333V92.6667M1 46.8333V92.6667M99.8235 1V46.8333M99.8235 1H149.235M99.8235 46.8333H149.235M99.8235 46.8333V92.6667M149.235 1V46.8333M149.235 1H198.647M149.235 46.8333H198.647M149.235 46.8333V92.6667M198.647 1V46.8333M198.647 1H248.059M198.647 46.8333H248.059M198.647 46.8333V92.6667M248.059 1V46.8333M248.059 1H297.471M248.059 46.8333H297.471M248.059 46.8333V92.6667M297.471 1V46.8333M297.471 1H346.882M297.471 46.8333H346.882M297.471 46.8333V92.6667M346.882 1V46.8333M346.882 1H396.294M346.882 46.8333H396.294M346.882 46.8333V92.6667M396.294 1V46.8333M396.294 1H445.706M396.294 46.8333H445.706M396.294 46.8333V92.6667M445.706 1V46.8333M445.706 1H495.118M445.706 46.8333H495.118M445.706 46.8333V92.6667M495.118 1V46.8333M495.118 1H544.529M495.118 46.8333H544.529M495.118 46.8333V92.6667M544.529 1V46.8333M544.529 1H593.941M544.529 46.8333H593.941M544.529 46.8333V92.6667M593.941 1V46.8333M593.941 1H643.353M593.941 46.8333H643.353M593.941 46.8333V92.6667M643.353 1V46.8333M643.353 1H692.765M643.353 46.8333H692.765M643.353 46.8333V92.6667M692.765 1V46.8333M692.765 1H742.177M692.765 46.8333H742.177M692.765 46.8333V92.6667M742.177 1V46.8333M742.177 1H791.588M742.177 46.8333H791.588M742.177 46.8333V92.6667M791.588 1V46.8333M791.588 1H841V46.8333M791.588 46.8333H841M791.588 46.8333V92.6667M841 46.8333V92.6667M50.4118 92.6667H1M50.4118 92.6667H99.8235M50.4118 92.6667V138.5M1 92.6667V138.5M99.8235 92.6667H149.235M99.8235 92.6667V138.5M149.235 92.6667H198.647M149.235 92.6667V138.5M198.647 92.6667H248.059M198.647 92.6667V138.5M248.059 92.6667H297.471M248.059 92.6667V138.5M297.471 92.6667H346.882M297.471 92.6667V138.5M346.882 92.6667H396.294M346.882 92.6667V138.5M396.294 92.6667H445.706M396.294 92.6667V138.5M445.706 92.6667H495.118M445.706 92.6667V138.5M495.118 92.6667H544.529M495.118 92.6667V138.5M544.529 92.6667H593.941M544.529 92.6667V138.5M593.941 92.6667H643.353M593.941 92.6667V138.5M643.353 92.6667H692.765M643.353 92.6667V138.5M692.765 92.6667H742.177M692.765 92.6667V138.5M742.177 92.6667H791.588M742.177 92.6667V138.5M791.588 92.6667H841M791.588 92.6667V138.5M841 92.6667V138.5M50.4118 138.5H1M50.4118 138.5H99.8235M50.4118 138.5V184.333M1 138.5V184.333M99.8235 138.5H149.235M99.8235 138.5V184.333M149.235 138.5H198.647M149.235 138.5V184.333M198.647 138.5H248.059M198.647 138.5V184.333M248.059 138.5H297.471M248.059 138.5V184.333M297.471 138.5H346.882M297.471 138.5V184.333M346.882 138.5H396.294M346.882 138.5V184.333M396.294 138.5H445.706M396.294 138.5V184.333M445.706 138.5H495.118M445.706 138.5V184.333M495.118 138.5H544.529M495.118 138.5V184.333M544.529 138.5H593.941M544.529 138.5V184.333M593.941 138.5H643.353M593.941 138.5V184.333M643.353 138.5H692.765M643.353 138.5V184.333M692.765 138.5H742.177M692.765 138.5V184.333M742.177 138.5H791.588M742.177 138.5V184.333M791.588 138.5H841M791.588 138.5V184.333M841 138.5V184.333M50.4118 184.333H1M50.4118 184.333H99.8235M50.4118 184.333V230.167M1 184.333V230.167M99.8235 184.333H149.235M99.8235 184.333V230.167M149.235 184.333H198.647M149.235 184.333V230.167M198.647 184.333H248.059M198.647 184.333V230.167M248.059 184.333H297.471M248.059 184.333V230.167M297.471 184.333H346.882M297.471 184.333V230.167M346.882 184.333H396.294M346.882 184.333V230.167M396.294 184.333H445.706M396.294 184.333V230.167M445.706 184.333H495.118M445.706 184.333V230.167M495.118 184.333H544.529M495.118 184.333V230.167M544.529 184.333H593.941M544.529 184.333V230.167M593.941 184.333H643.353M593.941 184.333V230.167M643.353 184.333H692.765M643.353 184.333V230.167M692.765 184.333H742.177M692.765 184.333V230.167M742.177 184.333H791.588M742.177 184.333V230.167M791.588 184.333H841M791.588 184.333V230.167M841 184.333V230.167M50.4118 230.167H1M50.4118 230.167H99.8235M50.4118 230.167V276M1 230.167V276M99.8235 230.167H149.235M99.8235 230.167V276M149.235 230.167H198.647M149.235 230.167V276M198.647 230.167H248.059M198.647 230.167V276M248.059 230.167H297.471M248.059 230.167V276M297.471 230.167H346.882M297.471 230.167V276M346.882 230.167H396.294M346.882 230.167V276M396.294 230.167H445.706M396.294 230.167V276M445.706 230.167H495.118M445.706 230.167V276M495.118 230.167H544.529M495.118 230.167V276M544.529 230.167H593.941M544.529 230.167V276M593.941 230.167H643.353M593.941 230.167V276M643.353 230.167H692.765M643.353 230.167V276M692.765 230.167H742.177M692.765 230.167V276M742.177 230.167H791.588M742.177 230.167V276M791.588 230.167H841M791.588 230.167V276M841 230.167V276M50.4118 276H1M50.4118 276H99.8235M50.4118 276V321.833M1 276V321.833M99.8235 276H149.235M99.8235 276V321.833M149.235 276H198.647M149.235 276V321.833M198.647 276H248.059M198.647 276V321.833M248.059 276H297.471M248.059 276V321.833M297.471 276H346.882M297.471 276V321.833M346.882 276H396.294M346.882 276V321.833M396.294 276H445.706M396.294 276V321.833M445.706 276H495.118M445.706 276V321.833M495.118 276H544.529M495.118 276V321.833M544.529 276H593.941M544.529 276V321.833M593.941 276H643.353M593.941 276V321.833M643.353 276H692.765M643.353 276V321.833M692.765 276H742.177M692.765 276V321.833M742.177 276H791.588M742.177 276V321.833M791.588 276H841M791.588 276V321.833M841 276V321.833M50.4118 321.833H1M50.4118 321.833H99.8235M50.4118 321.833V367.667M1 321.833V367.667M99.8235 321.833H149.235M99.8235 321.833V367.667M149.235 321.833H198.647M149.235 321.833V367.667M198.647 321.833H248.059M198.647 321.833V367.667M248.059 321.833H297.471M248.059 321.833V367.667M297.471 321.833H346.882M297.471 321.833V367.667M346.882 321.833H396.294M346.882 321.833V367.667M396.294 321.833H445.706M396.294 321.833V367.667M445.706 321.833H495.118M445.706 321.833V367.667M495.118 321.833H544.529M495.118 321.833V367.667M544.529 321.833H593.941M544.529 321.833V367.667M593.941 321.833H643.353M593.941 321.833V367.667M643.353 321.833H692.765M643.353 321.833V367.667M692.765 321.833H742.177M692.765 321.833V367.667M742.177 321.833H791.588M742.177 321.833V367.667M791.588 321.833H841M791.588 321.833V367.667M841 321.833V367.667M50.4118 367.667H1M50.4118 367.667H99.8235M50.4118 367.667V413.5M1 367.667V413.5M99.8235 367.667H149.235M99.8235 367.667V413.5M149.235 367.667H198.647M149.235 367.667V413.5M198.647 367.667H248.059M198.647 367.667V413.5M248.059 367.667H297.471M248.059 367.667V413.5M297.471 367.667H346.882M297.471 367.667V413.5M346.882 367.667H396.294M346.882 367.667V413.5M396.294 367.667H445.706M396.294 367.667V413.5M445.706 367.667H495.118M445.706 367.667V413.5M495.118 367.667H544.529M495.118 367.667V413.5M544.529 367.667H593.941M544.529 367.667V413.5M593.941 367.667H643.353M593.941 367.667V413.5M643.353 367.667H692.765M643.353 367.667V413.5M692.765 367.667H742.177M692.765 367.667V413.5M742.177 367.667H791.588M742.177 367.667V413.5M791.588 367.667H841M791.588 367.667V413.5M841 367.667V413.5M50.4118 413.5H1M50.4118 413.5H99.8235M50.4118 413.5V459.333M1 413.5V459.333M99.8235 413.5H149.235M99.8235 413.5V459.333M149.235 413.5H198.647M149.235 413.5V459.333M198.647 413.5H248.059M198.647 413.5V459.333M248.059 413.5H297.471M248.059 413.5V459.333M297.471 413.5H346.882M297.471 413.5V459.333M346.882 413.5H396.294M346.882 413.5V459.333M396.294 413.5H445.706M396.294 413.5V459.333M445.706 413.5H495.118M445.706 413.5V459.333M495.118 413.5H544.529M495.118 413.5V459.333M544.529 413.5H593.941M544.529 413.5V459.333M593.941 413.5H643.353M593.941 413.5V459.333M643.353 413.5H692.765M643.353 413.5V459.333M692.765 413.5H742.177M692.765 413.5V459.333M742.177 413.5H791.588M742.177 413.5V459.333M791.588 413.5H841M791.588 413.5V459.333M841 413.5V459.333M50.4118 459.333H1M50.4118 459.333H99.8235M50.4118 459.333V505.167M1 459.333V505.167M99.8235 459.333H149.235M99.8235 459.333V505.167M149.235 459.333H198.647M149.235 459.333V505.167M198.647 459.333H248.059M198.647 459.333V505.167M248.059 459.333H297.471M248.059 459.333V505.167M297.471 459.333H346.882M297.471 459.333V505.167M346.882 459.333H396.294M346.882 459.333V505.167M396.294 459.333H445.706M396.294 459.333V505.167M445.706 459.333H495.118M445.706 459.333V505.167M495.118 459.333H544.529M495.118 459.333V505.167M544.529 459.333H593.941M544.529 459.333V505.167M593.941 459.333H643.353M593.941 459.333V505.167M643.353 459.333H692.765M643.353 459.333V505.167M692.765 459.333H742.177M692.765 459.333V505.167M742.177 459.333H791.588M742.177 459.333V505.167M791.588 459.333H841M791.588 459.333V505.167M841 459.333V505.167M50.4118 505.167H1M50.4118 505.167H99.8235M50.4118 505.167V551M1 505.167V551H50.4118M99.8235 505.167H149.235M99.8235 505.167V551M149.235 505.167H198.647M149.235 505.167V551M198.647 505.167H248.059M198.647 505.167V551M248.059 505.167H297.471M248.059 505.167V551M297.471 505.167H346.882M297.471 505.167V551M346.882 505.167H396.294M346.882 505.167V551M396.294 505.167H445.706M396.294 505.167V551M445.706 505.167H495.118M445.706 505.167V551M495.118 505.167H544.529M495.118 505.167V551M544.529 505.167H593.941M544.529 505.167V551M593.941 505.167H643.353M593.941 505.167V551M643.353 505.167H692.765M643.353 505.167V551M692.765 505.167H742.177M692.765 505.167V551M742.177 505.167H791.588M742.177 505.167V551M791.588 505.167H841M791.588 505.167V551M841 505.167V551H791.588M50.4118 551H99.8235M99.8235 551H149.235M149.235 551H198.647M198.647 551H248.059M248.059 551H297.471M297.471 551H346.882M346.882 551H396.294M396.294 551H445.706M445.706 551H495.118M495.118 551H544.529M544.529 551H593.941M593.941 551H643.353M643.353 551H692.765M692.765 551H742.177M742.177 551H791.588"
                      stroke="url(#paint0_radial_2_550) #fff"
                      strokeOpacity="0.08"
                      strokeWidth="3"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_2_550"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(421 290.69) rotate(90) scale(259.722 420.634)"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { delay: 0.2, type: "spring", stiffness: 120 },
                boxShadow: "0px 0px 0px 2px rgba(255,255,255,0.25)",
              }}
              className="bg-[#2b892E] rounded-[100px] w-[146px] px-[32px] py-[16px] z-10 text-[14px] md:text-[16px]"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </motion.button>
          </div>
        </div>
        <div className="mt-[56px] md:mt-[132px] w-full">
          <div className="">
            <img
              className="w-[96%] mx-auto h-[380px] md:h-auto object-cover rounded-[12px] md:rounded-none"
              src={People}
              alt="people"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <div className="flex flex-col items-center justify-center mx-auto w-[860px] gap-[48px]">
            <p className="text-[#BDBDBD] text-[20px] font-[510]">
              FEATURED AND SEEN IN
            </p>
            <div className="grid grid-flow-col place-items-center gap-[23px] lg:gap-[80px] w-[342px] md:w-[500px] lg:w-[860px]">
              <img
                src={Forbes}
                alt="forbes logo"
                // className="w-[50px] md:w-full"
              />
              <img src={CNBC} alt="cnbc logo" className="w-[50px] md:w-full" />
              <img
                src={Bloomberg}
                alt="bloomberg logo"
                // className="w-[50px] md:w-full"
              />
              <img
                src={reuterLogo}
                alt="reuter logo"
                // className="w-[50px] md:w-full"
              />
              <img
                src={CNN}
                alt="cnn logo"
                // className="w-[50px] md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[103px] lg:mt-[192px]">
        <Header
          title={"Elevate Your Financial Journey with RAFT"}
          text={
            "RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today."
          }
        />
        <GridMages />
      </section>

      <section className="text-white mt-[100px] lg:mt-[180px]">
        <Header
          title={"Your Financial Freedom, Your Way"}
          text={
            "We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve"
          }
        />
        <div className="mt-[124px]">
          <img
            src={people}
            alt="people cash"
            className="w-[342px] md:w-[1296px] mx-auto h-[380px] md:h-auto object-cover rounded-[12px] md:rounded-none"
          />
        </div>
        <div className="mt-[56px] lg:mt-[171px]">
          <div className="w-[342px] lg:w-[1296px] flex flex-col lg:flex-row gap-[24px] mx-auto">
            {data.map((item) => (
              <Offers key={item.icon} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-[96px] lg:mt-[17px]">
        <div className="bg-[#48D64C] px-[24px] lg:px-[72px] py-[32px] lg:py-[132px]">
          <p className="text-[60px] lg:text-[128px] font-[400] leading-none text-[#070606]">
            Smart investments, <br />
            secure payments, <br />
            and expert guidance, all in one place.
          </p>
        </div>
        <div className="mt-[96px] lg:mt-[124px] lg:mx-0 mx-[24px] lg:ml-[84px]">
          <Header
            title={"Confidently Shape Your Financial Future"}
            text={
              "At RAFT, we empower you to confidently shape your financial future.Our modern approach simplifies saving and investing, making it easier than ever."
            }
            textClass={"text-start"}
            t={""}
          />
        </div>
        <div className="w-[342px] lg:w-[1296px] flex flex-col lg:flex-row gap-[32px] lg:gap-[56px] mx-auto mt-[80px] lg:mt-[72px]">
          <Cards
            image={moneySend}
            title={"Spend better"}
            text={
              "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress."
            }
          />
          <Cards
            image={walletMinus}
            title={"Invest better"}
            text={
              "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress."
            }
          />
        </div>
        <div className="flex justify-between w-[342px] md:w-[] lg:w-[1296px] mx-auto my-[60px] lg:my-[100px]">
          <div className="flex flex-col gap-[16px] items-center">
            <p className="text-[20px] lg:text-[80px] font-[590] leading-none text-[#fff]">
              50+
            </p>
            <p className="text-[12px] lg:text-[18px] font-[510] leading-none text-[#BDBDBD]">
              CITIES
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <p className="text-[20px] lg:text-[80px] font-[590] leading-none text-[#fff]">
              50,000+
            </p>
            <p className="text-[12px] lg:text-[18px] font-[510] leading-none text-[#BDBDBD] uppercase">
              Transactions
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <p className="text-[20px] lg:text-[80px] font-[590] leading-none text-[#fff]">
              3M+
            </p>
            <p className="text-[12px] lg:text-[18px] font-[510] leading-none text-[#BDBDBD] uppercase">
              Users
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <p className="text-[20px] lg:text-[80px] font-[590] leading-none text-[#fff]">
              5
            </p>
            <p className="text-[12px] lg:text-[18px] font-[510] leading-none text-[#BDBDBD] uppercase">
              User Ratings
            </p>
          </div>
        </div>
        <div>
          <img
            src={framesix}
            alt="people"
            className="w-full h-[500px] md:h-auto object-cover"
          />
        </div>
      </section>
      <section className="mt-[120px]">
        <div className="w-[342px] lg:w-[896px] flex flex-col gap-[16px] mx-auto">
          <p className="text-[#48D64C] text-[18px] font-[510] text-center">
            INTRODUCING
          </p>
          <Header
            title={"Introducing RAFT's Next-Gen Cards"}
            text={
              "Discover RAFT's latest innovation – our new cards. Elevate your banking experience with cutting-edge features, security, and unprecedented convenience."
            }
          />
        </div>
        <div className="mt-[118px] mb-[123px]">
          <img src={customATM} alt="atm" className="mx-auto" />
        </div>
        <div className="mt-[171px] mb-[113px]">
          <div className="w-[342px] lg:w-[1296px] flex flex-col lg:flex-row gap-[24px] mx-auto">
            {data2.map((item) => (
              <Offers key={item.icon} {...item} />
            ))}
          </div>
        </div>
        <div className="px-[24px] lg:px-[72px] pt-[32px] md:pt-[32px] lg:pt-[100px] pb-[32px] md:pb-[32px] lg:pb-[68px] bg-[#48D64C] flex flex-col gap-[40px] md:gap-[104px]">
          <p className="mx-auto w-[342px] lg:w-full text-center text-[32px] lg:text-[76px] font-normal leading-normal text-[#070606]">
            Join over 3 million members
          </p>
          <div className="flex flex-col gap-[40px]">
            <div className="flex gap-[24px] mx-auto w-[342px] md:w-full lg:w-full">
              {/* <div className="w-[342px] lg:w-[416px] h-[317px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
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
              </div> */}
              {/* <div className="w-[342px] lg:w-[416px] h-[317px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
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
              </div> */}
              {/* <div className="w-[342px] lg:w-[416px] h-[317px] lg:h-[408px] flex flex-col py-[24px] px-[32px] items-start gap-[24px] border-l-2 border-solid border-[#070606]">
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
              </div> */}
              <Swipe />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-[124px] ml-[24px] mr-[24px] lg:ml-[84px]">
          <Header
            title={"Frequently asked questions"}
            textClass={"text-start"}
            t={""}
          />
        </div>
        <Accordion />
      </section>
    </>
  );
}

function Header({ title, text, textClass, t }) {
  return (
    <div
      className={`flex flex-col ${
        t ?? "items-center"
      } gap-[24px] w-[342px] lg:w-[896px] ${t ?? "mx-auto"}`}
    >
      <p
        className={`text-[36px] lg:text-[76px] text-[#ffffff] ${
          textClass || "text-center"
        } font-[400] leading-tight`}
      >
        {title}
      </p>
      <p
        className={`text-[#989898] text-[16px] lg:text-[20px] w-[342px] lg:w-[668px] ${
          textClass || "text-center"
        } leading-[24px] lg:leading-[28px] font-[400]`}
      >
        {text}
      </p>
    </div>
  );
}

function GridMages() {
  return (
    <div className="flex flex-wrap mt-[80px] gap-y-[32px] lg:gap-y-8">
      <div className="flex flex-wrap justify-between text-white gap-[32px] lg:gap-1 mx-auto w-[342px] lg:w-[1296px]">
        <div className="relative custom rounded-[12px] w-[342px] lg:w-[822px] h-[395px] lg:h-[500px] flex flex-col gap-1 justify-around items-center">
          <img
            src={frame112}
            alt="Elev"
            className="w-[294px] lg:w-[478px] h-[154px] lg:h-[236px] z-10"
          />
          <div className="self-start ml-[40px] flex flex-col gap-[16px] w-[294px] lg:w-[516px]">
            <h1 className="text-[#fff] text-[24px] lg:text-[32px] font-[510] leading-[28px]">
              Seamless Payments
            </h1>
            <p className="text-[16px] leading-[24px] font-[400] text-[#BDBDBD]">
              Enjoy secure, seamless transactions that make managing your <br />
              money a breeze.
            </p>
          </div>
          <div className="absolute top-0 left-1 z-[1]">
            <Strokes />
          </div>
        </div>

        <div className="relative custom border-[1.5px] rounded-[12px] w-[342px] lg:w-[442px] h-[395px] lg:h-[500px] flex  flex-col gap-1 justify-around items-center">
          <img
            src={frameOne}
            alt="frameOne"
            className="w-[293px] lg:w-[409px] h-[164px] lg:h-[228px] z-10"
          />
          <div className="self-start ml-[40px] flex flex-col gap-[16px] w-[294px] lg:w-[362px]">
            <h1 className="text-[#fff] text-[24px] lg:text-[32px] font-[510] leading-[28px]">
              Smart Investing
            </h1>
            <p className="text-[16px] leading-[24px] font-[400] text-[#BDBDBD]">
              Grow your wealth confidently with our personalized investment
              solutions, tailored to <br />
              your financial goals.
            </p>
          </div>
          <div className="absolute top-0 left-1 z-[1]">
            <Strokes width={"430px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between text-white gap-[32px] lg:gap-1 mx-auto w-[342px] lg:w-[1296px]">
        <div className="relative custom border-[1.5px] rounded-[12px] w-[342px] lg:w-[442px] h-[395px] lg:h-[500px] flex flex-col justify-around items-center gap-1">
          <img
            src={frame106}
            alt="frame gap"
            className="w-[294px] lg:w-[373px] h-[120px] lg:h-[148px] z-10"
          />
          <div className="self-start ml-[40px] flex flex-col gap-[16px] w-[294px] lg:w-[362px]">
            <h1 className="text-[#fff] text-[24px] lg:text-[32px] font-[510] leading-[28px]">
              Wealth Management
            </h1>
            <p className="text-[16px] leading-[24px] font-[400] text-[#BDBDBD]">
              Make informed decisions for your financial <br />
              future with our wealth management expertise.
            </p>
          </div>
          <div className="absolute top-0 left-1 z-[1]">
            <Strokes />
          </div>
        </div>
        <div className="relative custom border-[1.5px] rounded-[12px] w-[342px] lg:w-[822px] h-[395px] lg:h-[500px] flex  flex-col gap-1 justify-around items-center">
          <img
            src={group8}
            alt="group8"
            className="w-[293px] h-[190px] z-10 self-center"
          />
          <div className="self-start ml-[40px] flex flex-col gap-[16px] w-[] lg:w-[516px]">
            <h1 className="text-[#fff] text-[24px] lg:text-[32px] font-[510] leading-[28px]">
              Financial Planning
            </h1>
            <p className="text-[16px] leading-[24px] font-[400] text-[#BDBDBD]">
              Achieve your financial dreams with our comprehensive financial
              planning services, guiding you toward a secure future.
            </p>
          </div>
          <div className="absolute top-0 left-1 z-[1]">
            <Strokes />
          </div>
        </div>
      </div>
    </div>
  );
}

function Strokes({ width }) {
  return (
    <svg
      className="w-[342px] lg:w-[400px]"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "810"}
      height="349"
      viewBox="0 0 810 349"
      fill="none"
    >
      <path
        d="M48.5882 -161H1V-118.583M48.5882 -161V-118.583M48.5882 -161H96.1765M48.5882 -118.583H1M48.5882 -118.583H96.1765M48.5882 -118.583V-76.1667M1 -118.583V-76.1667M96.1765 -161V-118.583M96.1765 -161H143.765M96.1765 -118.583H143.765M96.1765 -118.583V-76.1667M143.765 -161V-118.583M143.765 -161H191.353M143.765 -118.583H191.353M143.765 -118.583V-76.1667M191.353 -161V-118.583M191.353 -161H238.941M191.353 -118.583H238.941M191.353 -118.583V-76.1667M238.941 -161V-118.583M238.941 -161H286.529M238.941 -118.583H286.529M238.941 -118.583V-76.1667M286.529 -161V-118.583M286.529 -161H334.118M286.529 -118.583H334.118M286.529 -118.583V-76.1667M334.118 -161V-118.583M334.118 -161H381.706M334.118 -118.583H381.706M334.118 -118.583V-76.1667M381.706 -161V-118.583M381.706 -161H429.294M381.706 -118.583H429.294M381.706 -118.583V-76.1667M429.294 -161V-118.583M429.294 -161H476.882M429.294 -118.583H476.882M429.294 -118.583V-76.1667M476.882 -161V-118.583M476.882 -161H524.471M476.882 -118.583H524.471M476.882 -118.583V-76.1667M524.471 -161V-118.583M524.471 -161H572.059M524.471 -118.583H572.059M524.471 -118.583V-76.1667M572.059 -161V-118.583M572.059 -161H619.647M572.059 -118.583H619.647M572.059 -118.583V-76.1667M619.647 -161V-118.583M619.647 -161H667.235M619.647 -118.583H667.235M619.647 -118.583V-76.1667M667.235 -161V-118.583M667.235 -161H714.824M667.235 -118.583H714.824M667.235 -118.583V-76.1667M714.824 -161V-118.583M714.824 -161H762.412M714.824 -118.583H762.412M714.824 -118.583V-76.1667M762.412 -161V-118.583M762.412 -161H810V-118.583M762.412 -118.583H810M762.412 -118.583V-76.1667M810 -118.583V-76.1667M48.5882 -76.1667H1M48.5882 -76.1667H96.1765M48.5882 -76.1667V-33.75M1 -76.1667V-33.75M96.1765 -76.1667H143.765M96.1765 -76.1667V-33.75M143.765 -76.1667H191.353M143.765 -76.1667V-33.75M191.353 -76.1667H238.941M191.353 -76.1667V-33.75M238.941 -76.1667H286.529M238.941 -76.1667V-33.75M286.529 -76.1667H334.118M286.529 -76.1667V-33.75M334.118 -76.1667H381.706M334.118 -76.1667V-33.75M381.706 -76.1667H429.294M381.706 -76.1667V-33.75M429.294 -76.1667H476.882M429.294 -76.1667V-33.75M476.882 -76.1667H524.471M476.882 -76.1667V-33.75M524.471 -76.1667H572.059M524.471 -76.1667V-33.75M572.059 -76.1667H619.647M572.059 -76.1667V-33.75M619.647 -76.1667H667.235M619.647 -76.1667V-33.75M667.235 -76.1667H714.824M667.235 -76.1667V-33.75M714.824 -76.1667H762.412M714.824 -76.1667V-33.75M762.412 -76.1667H810M762.412 -76.1667V-33.75M810 -76.1667V-33.75M48.5882 -33.75H1M48.5882 -33.75H96.1765M48.5882 -33.75V8.66667M1 -33.75V8.66667M96.1765 -33.75H143.765M96.1765 -33.75V8.66667M143.765 -33.75H191.353M143.765 -33.75V8.66667M191.353 -33.75H238.941M191.353 -33.75V8.66667M238.941 -33.75H286.529M238.941 -33.75V8.66667M286.529 -33.75H334.118M286.529 -33.75V8.66667M334.118 -33.75H381.706M334.118 -33.75V8.66667M381.706 -33.75H429.294M381.706 -33.75V8.66667M429.294 -33.75H476.882M429.294 -33.75V8.66667M476.882 -33.75H524.471M476.882 -33.75V8.66667M524.471 -33.75H572.059M524.471 -33.75V8.66667M572.059 -33.75H619.647M572.059 -33.75V8.66667M619.647 -33.75H667.235M619.647 -33.75V8.66667M667.235 -33.75H714.824M667.235 -33.75V8.66667M714.824 -33.75H762.412M714.824 -33.75V8.66667M762.412 -33.75H810M762.412 -33.75V8.66667M810 -33.75V8.66667M48.5882 8.66667H1M48.5882 8.66667H96.1765M48.5882 8.66667V51.0833M1 8.66667V51.0833M96.1765 8.66667H143.765M96.1765 8.66667V51.0833M143.765 8.66667H191.353M143.765 8.66667V51.0833M191.353 8.66667H238.941M191.353 8.66667V51.0833M238.941 8.66667H286.529M238.941 8.66667V51.0833M286.529 8.66667H334.118M286.529 8.66667V51.0833M334.118 8.66667H381.706M334.118 8.66667V51.0833M381.706 8.66667H429.294M381.706 8.66667V51.0833M429.294 8.66667H476.882M429.294 8.66667V51.0833M476.882 8.66667H524.471M476.882 8.66667V51.0833M524.471 8.66667H572.059M524.471 8.66667V51.0833M572.059 8.66667H619.647M572.059 8.66667V51.0833M619.647 8.66667H667.235M619.647 8.66667V51.0833M667.235 8.66667H714.824M667.235 8.66667V51.0833M714.824 8.66667H762.412M714.824 8.66667V51.0833M762.412 8.66667H810M762.412 8.66667V51.0833M810 8.66667V51.0833M48.5882 51.0833H1M48.5882 51.0833H96.1765M48.5882 51.0833V93.5M1 51.0833V93.5M96.1765 51.0833H143.765M96.1765 51.0833V93.5M143.765 51.0833H191.353M143.765 51.0833V93.5M191.353 51.0833H238.941M191.353 51.0833V93.5M238.941 51.0833H286.529M238.941 51.0833V93.5M286.529 51.0833H334.118M286.529 51.0833V93.5M334.118 51.0833H381.706M334.118 51.0833V93.5M381.706 51.0833H429.294M381.706 51.0833V93.5M429.294 51.0833H476.882M429.294 51.0833V93.5M476.882 51.0833H524.471M476.882 51.0833V93.5M524.471 51.0833H572.059M524.471 51.0833V93.5M572.059 51.0833H619.647M572.059 51.0833V93.5M619.647 51.0833H667.235M619.647 51.0833V93.5M667.235 51.0833H714.824M667.235 51.0833V93.5M714.824 51.0833H762.412M714.824 51.0833V93.5M762.412 51.0833H810M762.412 51.0833V93.5M810 51.0833V93.5M48.5882 93.5H1M48.5882 93.5H96.1765M48.5882 93.5V135.917M1 93.5V135.917M96.1765 93.5H143.765M96.1765 93.5V135.917M143.765 93.5H191.353M143.765 93.5V135.917M191.353 93.5H238.941M191.353 93.5V135.917M238.941 93.5H286.529M238.941 93.5V135.917M286.529 93.5H334.118M286.529 93.5V135.917M334.118 93.5H381.706M334.118 93.5V135.917M381.706 93.5H429.294M381.706 93.5V135.917M429.294 93.5H476.882M429.294 93.5V135.917M476.882 93.5H524.471M476.882 93.5V135.917M524.471 93.5H572.059M524.471 93.5V135.917M572.059 93.5H619.647M572.059 93.5V135.917M619.647 93.5H667.235M619.647 93.5V135.917M667.235 93.5H714.824M667.235 93.5V135.917M714.824 93.5H762.412M714.824 93.5V135.917M762.412 93.5H810M762.412 93.5V135.917M810 93.5V135.917M48.5882 135.917H1M48.5882 135.917H96.1765M48.5882 135.917V178.333M1 135.917V178.333M96.1765 135.917H143.765M96.1765 135.917V178.333M143.765 135.917H191.353M143.765 135.917V178.333M191.353 135.917H238.941M191.353 135.917V178.333M238.941 135.917H286.529M238.941 135.917V178.333M286.529 135.917H334.118M286.529 135.917V178.333M334.118 135.917H381.706M334.118 135.917V178.333M381.706 135.917H429.294M381.706 135.917V178.333M429.294 135.917H476.882M429.294 135.917V178.333M476.882 135.917H524.471M476.882 135.917V178.333M524.471 135.917H572.059M524.471 135.917V178.333M572.059 135.917H619.647M572.059 135.917V178.333M619.647 135.917H667.235M619.647 135.917V178.333M667.235 135.917H714.824M667.235 135.917V178.333M714.824 135.917H762.412M714.824 135.917V178.333M762.412 135.917H810M762.412 135.917V178.333M810 135.917V178.333M48.5882 178.333H1M48.5882 178.333H96.1765M48.5882 178.333V220.75M1 178.333V220.75M96.1765 178.333H143.765M96.1765 178.333V220.75M143.765 178.333H191.353M143.765 178.333V220.75M191.353 178.333H238.941M191.353 178.333V220.75M238.941 178.333H286.529M238.941 178.333V220.75M286.529 178.333H334.118M286.529 178.333V220.75M334.118 178.333H381.706M334.118 178.333V220.75M381.706 178.333H429.294M381.706 178.333V220.75M429.294 178.333H476.882M429.294 178.333V220.75M476.882 178.333H524.471M476.882 178.333V220.75M524.471 178.333H572.059M524.471 178.333V220.75M572.059 178.333H619.647M572.059 178.333V220.75M619.647 178.333H667.235M619.647 178.333V220.75M667.235 178.333H714.824M667.235 178.333V220.75M714.824 178.333H762.412M714.824 178.333V220.75M762.412 178.333H810M762.412 178.333V220.75M810 178.333V220.75M48.5882 220.75H1M48.5882 220.75H96.1765M48.5882 220.75V263.167M1 220.75V263.167M96.1765 220.75H143.765M96.1765 220.75V263.167M143.765 220.75H191.353M143.765 220.75V263.167M191.353 220.75H238.941M191.353 220.75V263.167M238.941 220.75H286.529M238.941 220.75V263.167M286.529 220.75H334.118M286.529 220.75V263.167M334.118 220.75H381.706M334.118 220.75V263.167M381.706 220.75H429.294M381.706 220.75V263.167M429.294 220.75H476.882M429.294 220.75V263.167M476.882 220.75H524.471M476.882 220.75V263.167M524.471 220.75H572.059M524.471 220.75V263.167M572.059 220.75H619.647M572.059 220.75V263.167M619.647 220.75H667.235M619.647 220.75V263.167M667.235 220.75H714.824M667.235 220.75V263.167M714.824 220.75H762.412M714.824 220.75V263.167M762.412 220.75H810M762.412 220.75V263.167M810 220.75V263.167M48.5882 263.167H1M48.5882 263.167H96.1765M48.5882 263.167V305.583M1 263.167V305.583M96.1765 263.167H143.765M96.1765 263.167V305.583M143.765 263.167H191.353M143.765 263.167V305.583M191.353 263.167H238.941M191.353 263.167V305.583M238.941 263.167H286.529M238.941 263.167V305.583M286.529 263.167H334.118M286.529 263.167V305.583M334.118 263.167H381.706M334.118 263.167V305.583M381.706 263.167H429.294M381.706 263.167V305.583M429.294 263.167H476.882M429.294 263.167V305.583M476.882 263.167H524.471M476.882 263.167V305.583M524.471 263.167H572.059M524.471 263.167V305.583M572.059 263.167H619.647M572.059 263.167V305.583M619.647 263.167H667.235M619.647 263.167V305.583M667.235 263.167H714.824M667.235 263.167V305.583M714.824 263.167H762.412M714.824 263.167V305.583M762.412 263.167H810M762.412 263.167V305.583M810 263.167V305.583M48.5882 305.583H1M48.5882 305.583H96.1765M48.5882 305.583V348M1 305.583V348H48.5882M96.1765 305.583H143.765M96.1765 305.583V348M143.765 305.583H191.353M143.765 305.583V348M191.353 305.583H238.941M191.353 305.583V348M238.941 305.583H286.529M238.941 305.583V348M286.529 305.583H334.118M286.529 305.583V348M334.118 305.583H381.706M334.118 305.583V348M381.706 305.583H429.294M381.706 305.583V348M429.294 305.583H476.882M429.294 305.583V348M476.882 305.583H524.471M476.882 305.583V348M524.471 305.583H572.059M524.471 305.583V348M572.059 305.583H619.647M572.059 305.583V348M619.647 305.583H667.235M619.647 305.583V348M667.235 305.583H714.824M667.235 305.583V348M714.824 305.583H762.412M714.824 305.583V348M762.412 305.583H810M762.412 305.583V348M810 305.583V348H762.412M48.5882 348H96.1765M96.1765 348H143.765M143.765 348H191.353M191.353 348H238.941M238.941 348H286.529M286.529 348H334.118M334.118 348H381.706M381.706 348H429.294M429.294 348H476.882M476.882 348H524.471M524.471 348H572.059M572.059 348H619.647M619.647 348H667.235M667.235 348H714.824M714.824 348H762.412"
        stroke="url(#paint0_radial_2_737) #fff"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2_737"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(405.5 107.095) rotate(90) scale(240.361 405.11)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const data = [
  {
    icon: banknotes,
    title: "No minimum balance fees",
    text: "Say goodbye to minimum balance fees. Your account, your balance—no hidden charges",
  },
  {
    icon: circlestack,
    title: "No monthly fees",
    text: "Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account",
  },
  {
    icon: arowleftright,
    title: "No bank transfer fees",
    text: "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.",
  },
];

const data2 = [
  {
    icon: docLogo,
    title: "Contactless Technology",
    text: "Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.",
  },
  {
    icon: identification,
    title: "Personalization",
    text: "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.",
  },
  {
    icon: locklogo,
    title: "Enhanced Security",
    text: "Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.",
  },
];

function Offers({ icon, title, text }) {
  return (
    <div className="w-[342px] lg:w-[416px] flex flex-col gap-[10px]">
      <div className="flex gap-[8px] items-center">
        <img src={icon} alt="" className="w-[24px] h-[24px]" />
        <h3 className="text-[20px] lg:text-[24px] font-[510] leading-none text-[#fff]">
          {title}
        </h3>
      </div>
      <p className="text-[16px] font-[400] leading-[24px] text-[#bdbdbd]">
        {text}
      </p>
    </div>
  );
}

function Cards({ image, title, text }) {
  return (
    <div className="relative flex flex-col w-[342px] lg:w-[620px] h-[440px] lg:h-[670px] p-[24px] lg:p-[52px] md:gap-[76px] lg:gap-[124px] custom">
      <div className="w-[294px] lg:w-[516px] flex flex-col gap-[16px]">
        <h3 className="text-[24px] lg:text-[32px] font-[510] leading-[28px] text-[#fff]">
          {title}
        </h3>
        <p className="text-[16px] lg:text-[20px] font-[400] leading-[24px] lg:leading-[28px] text-[#BDBDBD]">
          {text}
        </p>
      </div>
      <img
        src={image}
        alt="money send"
        className="md:w-[120px] lg:w-[200px] md:h-[120px] lg:h-[200px] self-center z-10"
      />
      <div className="absolute md:top-20px lg:top-[200px] left-0 w-[340px] lg:w-[570px] h-[244px] lg:h-[392px] z-0">
        <svg
          className="w-[340px] lg:w-[601px] h-[244px] lg:h-[392px]"
          xmlns="http://www.w3.org/2000/svg"
          width="601"
          height="395"
          viewBox="0 0 601 395"
          fill="none"
        >
          <path
            d="M36.2941 1H1V33.7381M36.2941 1V33.7381M36.2941 1H71.5882M36.2941 33.7381H1M36.2941 33.7381H71.5882M36.2941 33.7381V66.4762M1 33.7381V66.4762M71.5882 1V33.7381M71.5882 1H106.882M71.5882 33.7381H106.882M71.5882 33.7381V66.4762M106.882 1V33.7381M106.882 1H142.176M106.882 33.7381H142.176M106.882 33.7381V66.4762M142.176 1V33.7381M142.176 1H177.471M142.176 33.7381H177.471M142.176 33.7381V66.4762M177.471 1V33.7381M177.471 1H212.765M177.471 33.7381H212.765M177.471 33.7381V66.4762M212.765 1V33.7381M212.765 1H248.059M212.765 33.7381H248.059M212.765 33.7381V66.4762M248.059 1V33.7381M248.059 1H283.353M248.059 33.7381H283.353M248.059 33.7381V66.4762M283.353 1V33.7381M283.353 1H318.647M283.353 33.7381H318.647M283.353 33.7381V66.4762M318.647 1V33.7381M318.647 1H353.941M318.647 33.7381H353.941M318.647 33.7381V66.4762M353.941 1V33.7381M353.941 1H389.235M353.941 33.7381H389.235M353.941 33.7381V66.4762M389.235 1V33.7381M389.235 1H424.529M389.235 33.7381H424.529M389.235 33.7381V66.4762M424.529 1V33.7381M424.529 1H459.824M424.529 33.7381H459.824M424.529 33.7381V66.4762M459.824 1V33.7381M459.824 1H495.118M459.824 33.7381H495.118M459.824 33.7381V66.4762M495.118 1V33.7381M495.118 1H530.412M495.118 33.7381H530.412M495.118 33.7381V66.4762M530.412 1V33.7381M530.412 1H565.706M530.412 33.7381H565.706M530.412 33.7381V66.4762M565.706 1V33.7381M565.706 1H601V33.7381M565.706 33.7381H601M565.706 33.7381V66.4762M601 33.7381V66.4762M36.2941 66.4762H1M36.2941 66.4762H71.5882M36.2941 66.4762V99.2143M1 66.4762V99.2143M71.5882 66.4762H106.882M71.5882 66.4762V99.2143M106.882 66.4762H142.176M106.882 66.4762V99.2143M142.176 66.4762H177.471M142.176 66.4762V99.2143M177.471 66.4762H212.765M177.471 66.4762V99.2143M212.765 66.4762H248.059M212.765 66.4762V99.2143M248.059 66.4762H283.353M248.059 66.4762V99.2143M283.353 66.4762H318.647M283.353 66.4762V99.2143M318.647 66.4762H353.941M318.647 66.4762V99.2143M353.941 66.4762H389.235M353.941 66.4762V99.2143M389.235 66.4762H424.529M389.235 66.4762V99.2143M424.529 66.4762H459.824M424.529 66.4762V99.2143M459.824 66.4762H495.118M459.824 66.4762V99.2143M495.118 66.4762H530.412M495.118 66.4762V99.2143M530.412 66.4762H565.706M530.412 66.4762V99.2143M565.706 66.4762H601M565.706 66.4762V99.2143M601 66.4762V99.2143M36.2941 99.2143H1M36.2941 99.2143H71.5882M36.2941 99.2143V131.952M1 99.2143V131.952M71.5882 99.2143H106.882M71.5882 99.2143V131.952M106.882 99.2143H142.176M106.882 99.2143V131.952M142.176 99.2143H177.471M142.176 99.2143V131.952M177.471 99.2143H212.765M177.471 99.2143V131.952M212.765 99.2143H248.059M212.765 99.2143V131.952M248.059 99.2143H283.353M248.059 99.2143V131.952M283.353 99.2143H318.647M283.353 99.2143V131.952M318.647 99.2143H353.941M318.647 99.2143V131.952M353.941 99.2143H389.235M353.941 99.2143V131.952M389.235 99.2143H424.529M389.235 99.2143V131.952M424.529 99.2143H459.824M424.529 99.2143V131.952M459.824 99.2143H495.118M459.824 99.2143V131.952M495.118 99.2143H530.412M495.118 99.2143V131.952M530.412 99.2143H565.706M530.412 99.2143V131.952M565.706 99.2143H601M565.706 99.2143V131.952M601 99.2143V131.952M36.2941 131.952H1M36.2941 131.952H71.5882M36.2941 131.952V164.69M1 131.952V164.69M71.5882 131.952H106.882M71.5882 131.952V164.69M106.882 131.952H142.176M106.882 131.952V164.69M142.176 131.952H177.471M142.176 131.952V164.69M177.471 131.952H212.765M177.471 131.952V164.69M212.765 131.952H248.059M212.765 131.952V164.69M248.059 131.952H283.353M248.059 131.952V164.69M283.353 131.952H318.647M283.353 131.952V164.69M318.647 131.952H353.941M318.647 131.952V164.69M353.941 131.952H389.235M353.941 131.952V164.69M389.235 131.952H424.529M389.235 131.952V164.69M424.529 131.952H459.824M424.529 131.952V164.69M459.824 131.952H495.118M459.824 131.952V164.69M495.118 131.952H530.412M495.118 131.952V164.69M530.412 131.952H565.706M530.412 131.952V164.69M565.706 131.952H601M565.706 131.952V164.69M601 131.952V164.69M36.2941 164.69H1M36.2941 164.69H71.5882M36.2941 164.69V197.429M1 164.69V197.429M71.5882 164.69H106.882M71.5882 164.69V197.429M106.882 164.69H142.176M106.882 164.69V197.429M142.176 164.69H177.471M142.176 164.69V197.429M177.471 164.69H212.765M177.471 164.69V197.429M212.765 164.69H248.059M212.765 164.69V197.429M248.059 164.69H283.353M248.059 164.69V197.429M283.353 164.69H318.647M283.353 164.69V197.429M318.647 164.69H353.941M318.647 164.69V197.429M353.941 164.69H389.235M353.941 164.69V197.429M389.235 164.69H424.529M389.235 164.69V197.429M424.529 164.69H459.824M424.529 164.69V197.429M459.824 164.69H495.118M459.824 164.69V197.429M495.118 164.69H530.412M495.118 164.69V197.429M530.412 164.69H565.706M530.412 164.69V197.429M565.706 164.69H601M565.706 164.69V197.429M601 164.69V197.429M36.2941 197.429H1M36.2941 197.429H71.5882M36.2941 197.429V230.167M1 197.429V230.167M71.5882 197.429H106.882M71.5882 197.429V230.167M106.882 197.429H142.176M106.882 197.429V230.167M142.176 197.429H177.471M142.176 197.429V230.167M177.471 197.429H212.765M177.471 197.429V230.167M212.765 197.429H248.059M212.765 197.429V230.167M248.059 197.429H283.353M248.059 197.429V230.167M283.353 197.429H318.647M283.353 197.429V230.167M318.647 197.429H353.941M318.647 197.429V230.167M353.941 197.429H389.235M353.941 197.429V230.167M389.235 197.429H424.529M389.235 197.429V230.167M424.529 197.429H459.824M424.529 197.429V230.167M459.824 197.429H495.118M459.824 197.429V230.167M495.118 197.429H530.412M495.118 197.429V230.167M530.412 197.429H565.706M530.412 197.429V230.167M565.706 197.429H601M565.706 197.429V230.167M601 197.429V230.167M36.2941 230.167H1M36.2941 230.167H71.5882M36.2941 230.167V262.905M1 230.167V262.905M71.5882 230.167H106.882M71.5882 230.167V262.905M106.882 230.167H142.176M106.882 230.167V262.905M142.176 230.167H177.471M142.176 230.167V262.905M177.471 230.167H212.765M177.471 230.167V262.905M212.765 230.167H248.059M212.765 230.167V262.905M248.059 230.167H283.353M248.059 230.167V262.905M283.353 230.167H318.647M283.353 230.167V262.905M318.647 230.167H353.941M318.647 230.167V262.905M353.941 230.167H389.235M353.941 230.167V262.905M389.235 230.167H424.529M389.235 230.167V262.905M424.529 230.167H459.824M424.529 230.167V262.905M459.824 230.167H495.118M459.824 230.167V262.905M495.118 230.167H530.412M495.118 230.167V262.905M530.412 230.167H565.706M530.412 230.167V262.905M565.706 230.167H601M565.706 230.167V262.905M601 230.167V262.905M36.2941 262.905H1M36.2941 262.905H71.5882M36.2941 262.905V295.643M1 262.905V295.643M71.5882 262.905H106.882M71.5882 262.905V295.643M106.882 262.905H142.176M106.882 262.905V295.643M142.176 262.905H177.471M142.176 262.905V295.643M177.471 262.905H212.765M177.471 262.905V295.643M212.765 262.905H248.059M212.765 262.905V295.643M248.059 262.905H283.353M248.059 262.905V295.643M283.353 262.905H318.647M283.353 262.905V295.643M318.647 262.905H353.941M318.647 262.905V295.643M353.941 262.905H389.235M353.941 262.905V295.643M389.235 262.905H424.529M389.235 262.905V295.643M424.529 262.905H459.824M424.529 262.905V295.643M459.824 262.905H495.118M459.824 262.905V295.643M495.118 262.905H530.412M495.118 262.905V295.643M530.412 262.905H565.706M530.412 262.905V295.643M565.706 262.905H601M565.706 262.905V295.643M601 262.905V295.643M36.2941 295.643H1M36.2941 295.643H71.5882M36.2941 295.643V328.381M1 295.643V328.381M71.5882 295.643H106.882M71.5882 295.643V328.381M106.882 295.643H142.176M106.882 295.643V328.381M142.176 295.643H177.471M142.176 295.643V328.381M177.471 295.643H212.765M177.471 295.643V328.381M212.765 295.643H248.059M212.765 295.643V328.381M248.059 295.643H283.353M248.059 295.643V328.381M283.353 295.643H318.647M283.353 295.643V328.381M318.647 295.643H353.941M318.647 295.643V328.381M353.941 295.643H389.235M353.941 295.643V328.381M389.235 295.643H424.529M389.235 295.643V328.381M424.529 295.643H459.824M424.529 295.643V328.381M459.824 295.643H495.118M459.824 295.643V328.381M495.118 295.643H530.412M495.118 295.643V328.381M530.412 295.643H565.706M530.412 295.643V328.381M565.706 295.643H601M565.706 295.643V328.381M601 295.643V328.381M36.2941 328.381H1M36.2941 328.381H71.5882M36.2941 328.381V361.119M1 328.381V361.119M71.5882 328.381H106.882M71.5882 328.381V361.119M106.882 328.381H142.176M106.882 328.381V361.119M142.176 328.381H177.471M142.176 328.381V361.119M177.471 328.381H212.765M177.471 328.381V361.119M212.765 328.381H248.059M212.765 328.381V361.119M248.059 328.381H283.353M248.059 328.381V361.119M283.353 328.381H318.647M283.353 328.381V361.119M318.647 328.381H353.941M318.647 328.381V361.119M353.941 328.381H389.235M353.941 328.381V361.119M389.235 328.381H424.529M389.235 328.381V361.119M424.529 328.381H459.824M424.529 328.381V361.119M459.824 328.381H495.118M459.824 328.381V361.119M495.118 328.381H530.412M495.118 328.381V361.119M530.412 328.381H565.706M530.412 328.381V361.119M565.706 328.381H601M565.706 328.381V361.119M601 328.381V361.119M36.2941 361.119H1M36.2941 361.119H71.5882M36.2941 361.119V393.857M1 361.119V393.857H36.2941M71.5882 361.119H106.882M71.5882 361.119V393.857M106.882 361.119H142.176M106.882 361.119V393.857M142.176 361.119H177.471M142.176 361.119V393.857M177.471 361.119H212.765M177.471 361.119V393.857M212.765 361.119H248.059M212.765 361.119V393.857M248.059 361.119H283.353M248.059 361.119V393.857M283.353 361.119H318.647M283.353 361.119V393.857M318.647 361.119H353.941M318.647 361.119V393.857M353.941 361.119H389.235M353.941 361.119V393.857M389.235 361.119H424.529M389.235 361.119V393.857M424.529 361.119H459.824M424.529 361.119V393.857M459.824 361.119H495.118M459.824 361.119V393.857M495.118 361.119H530.412M495.118 361.119V393.857M530.412 361.119H565.706M530.412 361.119V393.857M565.706 361.119H601M565.706 361.119V393.857M601 361.119V393.857H565.706M36.2941 393.857H71.5882M71.5882 393.857H106.882M106.882 393.857H142.176M142.176 393.857H177.471M177.471 393.857H212.765M212.765 393.857H248.059M248.059 393.857H283.353M283.353 393.857H318.647M318.647 393.857H353.941M353.941 393.857H389.235M389.235 393.857H424.529M424.529 393.857H459.824M459.824 393.857H495.118M495.118 393.857H530.412M530.412 393.857H565.706"
            stroke="url(#paint0_radial_2_593) #fff"
            strokeOpacity="0.08"
            strokeWidth={1.5}
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_593"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(301 207.922) rotate(90) scale(185.516 300.453)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
