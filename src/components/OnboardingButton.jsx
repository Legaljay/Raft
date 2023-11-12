/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function OnboardingButton({ text, onClick, onNav, disabled }) {
  const navigate = useNavigate()
  function handleClick(){
    onClick
    navigate(onNav)
  }
  return (
    <button
      disabled={disabled}
      // disabled={!isDirty && !isValid}////
      className="
    bg-[#2b892E] text-[#fff] mx-auto text-[16px] md:text-[24px] font-medium leading-normal w-[358px] md:w-full rounded-[8px] py-[16px] px-[32px]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
