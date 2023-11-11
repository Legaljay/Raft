import PropTypes from 'prop-types'
import chevronDown from "../assets/chevron-down.svg";


export default function AccordionItem({ num, title, currOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === currOpen;
  //onClick={() => setIsOpen(currentValue => !currentValue)}
    // chevronUP = 
  function handleToggle(){
    onOpen(isOpen ? null : num);
  }
  
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle} >
      {/* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
      <div className='flex justify-between items-center'>
        <p className="text-[24px] text-[#fff] font-[510] leading-normal">{title}</p>
        <span className={`flex items-center justify-center ${isOpen ? "rotate-180" : ''}`}><img src={chevronDown} alt='chevron down' />'</span>
      </div>
      
      {isOpen && <div className="text-[18px] font-normal leading-[24px] text-[#BDBDBD]">{children}</div>}
    </div>
  );
}

AccordionItem.propTypes={
  num: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  currOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(Object)
}