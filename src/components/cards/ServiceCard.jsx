/*eslint-disable*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import arrow from './../../static/icon/arrow.png';

const ServiceCard = ({ service }) => {
    const { title, description, imageUrl } = service;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: service.id * 0.05 }}
            className="rounded-2xl flex flex-col items-center pb-5"
            style={{ boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.06)' }}
        >
            <img src={imageUrl} alt="" className='rounded-t-2xl h-[160px] w-full' />
            <div className='flex-1 py-[13px]'>
                <h1 className='text-[20px] font-semibold leading-[26px] flex-1 px-4'>{title}</h1>
                <p className='text-[14px] leading-[18px] mt-[6px] px-4 font-semibold font-secondary text-[#747579]'>{description}</p>
            </div>
            <div className='border-[0.5px] border-gray-200 w-full ' />
            <div className="py-[15px] flex justify-center items-center gap-[6px] cursor-pointer">
                <button className='text-[#5143D9] font-semibold text-[18px] leading-[24px]'>View Details</button>
                <img src={arrow} alt="" className='flex-1' width={14} />
            </div>
        </motion.div>
    );
};

export default ServiceCard;
