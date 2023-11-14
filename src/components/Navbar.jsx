import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader)
  }, [])

  return (
    <div className="p-[16px] border-b border-[#989898] w-full" ref={headerRef}>
      <nav className="relative flex justify-between items-center h-[35px] bg-black w-full">
        <span className="flex gap-[4px] w-[74px] h-[29px] justify-center items-center">
          <img src={Raft} alt="Raft" className="w-[24px] h-[24px]"/>
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
        variants={{
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
        }}
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

