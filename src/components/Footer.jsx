import Raft from "../assets/svg/import.svg";
import QR from "../assets/svg/QR_code_for_mobile_English_Wikipedia 1 (1).svg";
import PlayS from "../assets/svg/ion_logo-google-playstore.svg";
import Apple from "../assets/svg/ic_baseline-apple.svg";
import Copy from '../assets/svg/ph_copyright-light.svg';

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-[60px] mt-[160px] w-[1296px] mx-auto">
      <div className="w-[363px] flex justify-between gap-[4px] items-center w-">
        <img src={Raft} alt="Raft Logo" />
        <p className="font-normal leading-normal text-[128px] text-[#fff]">
          Raft
        </p>
      </div>
      <hr className="h-[1px] bg-[#3d3d3d]" />
      <div className="w-[1296px] flex flex-col gap-[52px] ">
        <div className="flex justify-between">
          <div className="w-[457px] h-[140px] border-[1px] border-dashed border-[#fff] py-[20px] px-[16px] flex gap-[12px]">
            <img src={QR} alt="QR" className="w-[100px] h-[100px]" />
            <div className="flex flex-col gap-[16px] h-[88px]">
              <p className="text-[20px] text-[#fff] font-normal leading-normal">
                Scan to download App on the Playstore and Appstore.
              </p>
              <span className="flex gap-[12px]">
                <img src={PlayS} alt="Playstore" />
                <img src={Apple} alt="Apple" />
              </span>
            </div>
          </div>
          <div>
            <div className="flex gap-[52px]">
              <div className="w-[200px] flex flex-col gap-[16px]">
                <p className="text-[20px] text-[#fff] font-[510] leading-normal">
                  About us
                </p>
                <ul className="list-none text-[16px] font-normal leading-normal text-[#EFEFEF]">
                  <li>Our company</li>
                  <li>Careers</li>
                  <li>Press kits</li>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col gap-[16px]">
                <p className="text-[20px] text-[#fff] font-[510] leading-normal">
                  Legal
                </p>
                <ul className="list-none text-[16px] font-normal leading-normal text-[#EFEFEF]">
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                  <li>About us</li>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col gap-[16px]">
                <p className="text-[20px] text-[#fff] font-[510] leading-normal">
                  Support
                </p>
                <ul className="list-none text-[16px] font-normal leading-normal text-[#EFEFEF]">
                  <li>Contact us</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[56px]">
          <select name="country" id="" className="bg-[#000] text-[#fff] outline-none text-[24px] font-normal leading-normal">
            <option value="English (United Kingdom)" className="bg-[#000] text-[#fff]">
              English (United Kingdom)
            </option>
          </select>
          <div className="flex items-center justify-center">
            <img src={Copy} alt="copyright"/>
            <p className="font-normal text-[16px] leading-normal text-[#fff]">
              Raft Corp, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
