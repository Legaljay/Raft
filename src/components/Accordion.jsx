import PropTypes from 'prop-types'
import AccordionItem from './AccordionItem';
import { useState } from 'react';

const data =[
    {
        title: 'How do I create an account with RAFT?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis iure officia, nulla earum illum. Necessitatibus distinctio suscipit rerum! Mollitia.',
    },
    {
        title: 'How does RAFT ensure the security of my financial data?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis iure officia, nulla earum illum. Necessitatibus distinctio suscipit rerum! Mollitia.',
    },
    {
        title: 'What types of transactions can I perform with RAFT?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis iure officia, nulla earum illum. Necessitatibus distinctio suscipit rerum! Mollitia.',
    },
    {
        title: 'What benefits does RAFT offer for wealth management?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis iure officia, nulla earum illum. Necessitatibus distinctio suscipit rerum! Mollitia.',
    },
    
]

export default function Accordion() {
  const [currOpen, setCurrOpen] = useState(null)
  return (
    <div className="w-[1296px] mx-auto mt-[100px]">
      {data.map((el, index) => 
      <AccordionItem
        key={el.title}
        title={el.title}
        num={index}
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        {el.text}
      </AccordionItem>
      )}
    </div>
    
  );
}

Accordion.propTypes={
  data: PropTypes.arrayOf(Object)
}
  