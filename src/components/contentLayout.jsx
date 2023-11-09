import People from "../assets/Images/people.png";
import ArrowLeft from "../assets/Images/arrows-right-left.png";
import Banknotes from "../assets/Images/banknotes.png";
import Bloomberg from "../assets/Images/bloomberg-1.png";
import circleStack from "../assets/Images/circle-stack.png";
import  CNBC from "../assets/Images/cnbc-1.png";
import CNN from "../assets/Images/cnn-logo 1.png";
import docLogo from "../assets/Images/document-duplicate.png";
import Forbes from "../assets/Images/Forbes_logo 1.png";
import identification from "../assets/Images/identification.png";
import locklogo from "../assets/Images/lock-closed.png";
import moneySend from "../assets/Images/money-send.png";
import reuterLogo from "../assets/Images/reuters-2-1 1.png";
import walletMinus from "../assets/Images/wallet-minus.png";
import frameOne from "../assets/Images/Frame 94.jpg";
import frametwo from "../assets/Images/Frame 122atm.png";
import framethree from "../assets/Images/Frame 127.png";
import framefour from "../assets/Images/Frame 130.png";
import framefive from "../assets/Images/Frame 136.png";
import framesix from "../assets/Images/Frame 150.png";
import arrowsmallleft from "../assets/arrow-small-left.svg";
import arrowsmallright from "../assets/arrow-small-right.svg";
import chevronDown from "../assets/chevron-down.svg";
import frame106 from "../assets/Frame 106.svg";
import frame112 from "../assets/Frame 112.svg";
import group8 from "../assets/Group 8.svg";

export default function ContentLayout() {
  return (
    <>
    <section className="bg-black">
        <div className="mt-[90px]">
            <div className="w-[896px] h-[443px] flex flex-col gap-[32px]  mx-auto justify-center items-center text-white">
                <div className="items-center flex-col flex">
                    <span className="w-[204px] h-[32px] mt-5  bg-[#989898] text-[#DCDCDC] rounded-[100px] text-center">Introducing Raft Cards</span>
                    <h1
                        className="text-[96px] text-center drop-shadow font-normal"
                    >Building the future of banking</h1>
                    <p className="w-[450px]">Experience the future of banking with RAFT. We&apos;re here to empower your financial journey.</p>
                </div>
                <button className="bg-[#2b892E] rounded-[100px] w-[146px] h-[51px]">Get Started</button>
            </div>
        </div>
        <div className="mt-[30px]">
            <div className="w-[95%] mx-auto">
                <img src={People} alt="people" />
            </div>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
            <div className="flex flex-col  mx-auto">
                <p className="text-[#989898]">FEATURED AND SEEN IN</p>
                <div className="flex justify-between w-[860px] mt-[40px]">
                    <img className="w-[80px] h-[30px]" src={Forbes} alt="forbes logo" />
                    <img className="w-[80px] h-[40px]" src={CNBC} alt="cnbc logo" />
                    <img className="w-[80px] h-[30px]" src={Bloomberg} alt="bloomberg logo" />
                    <img className="w-[80px] h-[30px]" src={reuterLogo} alt="reuter logo" />
                    <img className="w-[80px] h-[30px]" src={CNN} alt="cnn logo" />
                </div>
                {/* <Header 
                    title={'Elevate Your Financial Journey with RAFT'}
                    text={"RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today."}
                /> */}
                <div className="mt-[50px] ">
                    <h1 className="text-[76px] text-[#ffffff]">Elevate Your Financial Journey with RAFT</h1>
                    <p className="text-[#989898] text-[20px]">RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <GridMages/>
    </section>
    
    <section className="text-white">
        <Header 
            title={'Your Financial Freedom, Your Way'}
            text={"We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve"}
        />
        <div>
            <img src="" alt="" />
        </div>
        
    </section>
    </>
  )
}


function Header({title, text}){
    return(
        <div className="w-[896px] h-[262px] mx-auto">
            <h1 className="text-[76px] text-[#ffffff]">{title}</h1>
            <p className="text-[#989898] text-[20px]">{text}</p>
        </div>
    )
}

function GridMages(){
    return (
        <div className="flex flex-wrap mt-[50px] gap-y-2">
            <div className="w-[95%] flex justify-between text-white gap-1 mx-auto">
                <div className="border-2 border-solid border-[#989898] bg-[#2B2B2B] rounded-[100px] w-[822px] h-[500px] flex flex-col gap-1 justify-center items-center">
                    <img src={frame112} alt="Elev" className="w-[478px] h-[236px]" />
                    <h1>Seamless Payments</h1>
                    <p>Enjoy secure, seamless transactions that make managing your money a breeze.</p>
                </div>
                <div className="border-2 border-solid border-[#989898] bg-[#2B2B2B] rounded-[100px] w-[442px] h-[500px] flex  flex-col gap-1 justify-center items-center">
                    <img src={frameOne} alt="frameOne" className="w-[409px] h-[228px]" />
                    <h1>Smart Investing</h1>
                    <p>Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.</p>
                </div>
            </div>
            <div className="w-[95%] flex justify-between text-white gap-1 mx-auto">
                <div className="border-2 border-solid border-[#989898] bg-[#2B2B2B] rounded-[100px] w-[442px] h-[500px] flex flex-col justify-center items-center gap-1">
                    <img src={frame106} alt="frame gap" className="w-[373px] h-[148px]" />
                    <h1>Wealth Management</h1>
                    <p>Make informed decisions for your financial future with our wealth management expertise.</p>
                </div>
                <div className="border-2 border-solid border-[#989898] bg-[#2B2B2B] rounded-[100px] w-[822px] h-[500px] flex  flex-col gap-1 justify-center items-center">
                    <img src={group8} alt="group8" className="w-[293px] h-[190px]" />
                    <h1>Financial Planning</h1>
                    <p>Achieve your financial dreams with our comprehensive financial planning services, guiding you toward a secure future.</p>
                </div>
            </div>
        </div>
    )
}