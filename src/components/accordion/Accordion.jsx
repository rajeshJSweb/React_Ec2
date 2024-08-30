/*eslint-disable*/
import { useRef, useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full border-gray-300 bg-[#F0F0F0] px-4 rounded-lg py-2 my-4 ">
            <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={toggleAccordion}
            >
                <h2 className="font-semibold">{title}</h2>
                <span className='font-semibold'>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <p className="py-4 text-gray-700 font-secondary">{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
