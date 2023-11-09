import Raft from "../assets/Images/Raft.png";

export default function Navbar() {
  return (
    <div className="p-[16px] border-b border-[#989898] w-full">
      <nav className="flex justify-between items-center h-[35px] bg-black w-full">
        <img src={Raft} alt="Raft" />
        <div className="w-[262px] h-[35px] flex justify-between items-center text-[#989898]">
          <span className="">Solutions</span>
          <span className="">Learn</span>
          <span className="">About</span>
        </div>
        <div className="text-[#ffffff] flex justify-between items-center w-[162px] h-[35px]">
          <button className="w-[40px] h-[19px]">Login</button>
          <button className="w-[106px] h-[35px] rounded-[100px] bg-[#2B892E]">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
