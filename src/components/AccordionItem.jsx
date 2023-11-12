import PropTypes from "prop-types";
import chevronDown from "../assets/chevron-down.svg";

export default function AccordionItem({
  num,
  title,
  currOpen,
  onOpen,
  children,
}) {
  const isOpen = num === currOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="flex flex-col gap-[40px]">
        <div className="flex justify-between items-center">
          <p className="text-[16px] lg:text-[24px] text-[#fff] font-[510] leading-normal">
            {title}
          </p>
          <span
            className={`flex items-center justify-center ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <img src={chevronDown} alt="chevron down" />'
          </span>
        </div>
        {!isOpen && <hr className="h-[0.2px] w-full bg-[#3D3D3D]" />}
      </div>

      {isOpen && (
        <div className="flex flex-col gap-6">
            <div className="text-[12px] lg:text-[18px] font-normal leading-[24px] text-[#BDBDBD]">
                {children}
            </div>
            <hr className="h-[0.2px] w-full bg-[#3D3D3D]" />
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  currOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.string,
};
