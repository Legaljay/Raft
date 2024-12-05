import { useEffect, useRef, useCallback,  useState } from "react";
// import Raft from "../assets/Images/Raft.png";
import Raft from "../assets/svg/import.svg";
import {IoClose, IoMenu} from "react-icons/io5"
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/solutions",
    display: "Solutions",
  },
  {
    path: "/learn",
    display: "Learn",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/signup",
    display: "Get Started",
  },
  
];

const navVariant ={
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const headerRef= useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky__header");
      }else{
        headerRef.current.classList.remove("sticky__header");
      }
    })
  }

  const handleHome = useCallback(() => {
    navigate('/home');
  }, [])

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader)
  }, [])

  return (
    <div className="p-[16px] border-b border-[#989898] w-full" ref={headerRef}>
      <nav className="relative flex justify-between items-center h-[35px] bg-black w-full">
        <span className="flex gap-[4px] w-[74px] h-[29px] justify-center items-center cursor-pointer" onClick={handleHome}>
          {/* <img src={Raft} alt="Raft" className="w-[24px] h-[24px]"/> */}
          <SvgAnimate/>
          <p className="text-[24px] text-[#fff] leading-normal font-normal">Raft</p>
        </span>
        {/* <img src={Raft} alt="Raft" /> */}
        <div className="hidden md:w-[262px] h-[35px] md:flex justify-between items-center text-[#989898]">
          <span className="">Solutions</span>
          <span className="">Learn</span>
          <span className="">About</span>
        </div>
        <div className="text-[#ffffff] hidden md:flex justify-between items-center w-[162px] h-[35px]">
          <button className="w-[40px] h-[19px]" onClick={() => navigate('/login')}>Login</button>
          <button className="w-[106px] h-[35px] rounded-[100px] bg-[#2B892E]" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
        {isOpen? <IoClose size={24} color="white" onClick={() => setIsOpen(prev => !prev)}/>:<IoMenu className="md:hidden" size={24} color="white" onClick={() => setIsOpen(prev => !prev)}/>}
      </nav>
      <motion.ul 
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className={`${isOpen ? 'block' : 'hidden'} flex flex-col absolute drop-shadow-sm top-[70px] right-6 w-[200px] bg-[#2b892e] text-[#070606] z-[10000]`}
      >
        {navLinks.map((link) => (
          <motion.li 
            key={link.display} 
            className="p-[20px] active:bg-[#2b892e] border-b-[1px] border-solid border-[#989898]"
            whileHover={{ scale: 1.04, originX: 0, textColor: '#bdbdbd', color: '#fff' }}
            transition={{ duration: .2, type: 'spring' , stiffness: 300,}}
          >
            <NavLink
              to={link.path}
              className={(navClass) =>
                navClass.isActive
                  ? "text-primaryColor text-[16px] leading-normal font-[400] text-[#fff]"
                  : "text-textColor text-[16px] leading-normal font-[400] hover:text-[#bdbdbd]"
              }
            >
              {link.display}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

const svgVariant = {
  hidden:{rotate: -180},
  visible:{
    rotate: 0,
    transition: { duration: 1 }
  },
}

const pathVariant = {
  hidden:{
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  },
}
function SvgAnimate(){

  return(
    <motion.span className="w-[24px] h-[24px]">
      <motion.svg 
        variants={svgVariant}
        initial='hidden'
        animate='visible'
        width="24" 
        height="24" 
        viewBox="0 0 141 141" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/bold/import">
        <g id="import">
        <motion.path
          variants={pathVariant} 
          initial='hidden'
          animate='visible'
          id="Vector" 
          d="M119.479 60.8037C114.176 33.718 87.8892 16.0394 60.8035 21.3426C33.7178 26.6458 16.0392 52.9324 21.3424 80.0181C26.6456 107.104 52.9322 124.782 80.0179 119.479C107.104 114.176 124.782 87.8894 119.479 60.8037ZM97.657 93.2513L52.3595 62.7873L55.2609 77.6059C55.6548 79.6177 54.3131 81.6127 52.3013 82.0066C50.2895 82.4005 48.2945 81.0588 47.9006 79.047L43.2604 55.347C42.8665 53.3352 44.2081 51.3402 46.2199 50.9463L69.92 46.306C71.9318 45.9121 73.9267 47.2538 74.3206 49.2656C74.7145 51.2774 73.3728 53.2724 71.361 53.6663L56.5424 56.5677L101.84 87.0317C102.72 87.6236 103.246 88.4886 103.429 89.4209C103.611 90.3532 103.45 91.3528 102.858 92.2329C101.714 93.9345 99.3586 94.3956 97.657 93.2513Z" 
          fill="white"
        />
        </g>
        </g>
      </motion.svg>
    </motion.span>
  )
}
