import { useEffect, useState } from "react";
import Accordion from "../../../components/accordion/Accordion";


const Support = () => {
    const [accordions, setAccordions] = useState([])
    useEffect(() => {
        fetch('/demoData/accordionData.json')
            .then(res => res.json())
            .then(data => setAccordions(data))
    }, [])

    return (
        <div className='md:mx-32 md:px-24 md:flex px-2'>
            <div className='md:w-6/12 font-secondary'>
                <p className='text-secondary text-[16px] leading-[20px] tracking-[0.5px] font-[600px]'>Talk to support</p>
                <h1 className="md:text-[40px] text-[30px] leading-[36px] md:leading-[60px] tracking-[.5px] font-semibold">Frequently asked<br />
                    questions</h1>
                <p className="md:text-[18px] text-[16px] leading-[25px] text-[#1E1E1E] md:pr-24">Find answers to your questions instantly. Need more guidance? Dive into our Whatsapp chat or call us 24/7 with all your queries.</p>
                <button className="bg-secondary py-2 px-4 rounded-xl text-white mt-2">Contact Our Team</button>
            </div>
            <div className="md:w-6/12">
                {accordions.map(accordion => <Accordion key={accordion.id} title={accordion.title} content={accordion.content} />)}
            </div>
        </div>
    );
};

export default Support;