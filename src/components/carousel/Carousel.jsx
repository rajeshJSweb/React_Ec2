/*eslint-disable*/
import { motion } from "framer-motion";
import '../../App.css';
import freelanceImage from '../../static/img/freelance-image01.png';

const Carousel = ({ isScrolled }) => {
    const parent = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        },
    };

    const item = {
        hidden: { x: "-100%", opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
            },
        },
    };

    return (
        <div
            className={`bg-primary md:mx-[25px] py-10 md:py-0 px-2 md:px-[30px] md:rounded-b-[20px]
        ${isScrolled ? "rounded-t-[20px]" : ""}`}>
            <div className="md:flex md:gap-[31px] text-white">
                <motion.div initial={{ x: -130 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2.5, delay: 0.7 }} className="flex-1 w-full md:ml-[100px] mb-[15px] md:pb-[52px] md:pt-[10px]">
                    <motion.div className="px-[10px] md:py-[37px]" variants={item}>
                        <h1 className="font-primary md:text-[48px] text-[30px] leading-[36px] md:leading-[64px] font-bold tracking-[0.5px]">Your Reliable Assistant for Home service</h1>
                        <p className="md:mt-[24px] mt-[10px] text-[16px] md:text-[22px] leading-[30px] font-medium">We Offer one stop handyman service for your various home services without hassle and full of comfort.</p>
                    </motion.div>
                    <motion.div variants={item} className='font-secondary px-[10px]'>
                        <p className="text-[16px] leading-[20px] tracking-[0.5px] font-medium">Popular categories</p>
                        <div className="mt-[14px] flex gap-[10px]">
                            <button className="bg-shadow rounded-lg md:py-1 px-2 py-[3px] md:px-4">Plumber</button>
                            <button className="bg-shadow rounded-lg md:py-1 px-2 py-[3px] md:px-4">Electrician</button>
                            <button className="bg-shadow rounded-lg md:py-1 px-2 py-[3px] md:px-4">Office Moving</button>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex-1 hidden md:block h-auto"
                    initial={{ x: 130 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.5, delay: 0.7 }}>
                    <img src={freelanceImage} alt="Freelance Image" className='md:relative w-[754px]' />
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
