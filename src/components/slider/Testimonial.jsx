import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import moduleName from '../../static/img/slider/List.png';
import image from './../../static/img/slider/Image.png';
import bigImage from './../../static/img/slider/woman.jpg';

const Testimonial = () => {
    return (
        <div className='md:flex gap-[17px]'>
            <div className='md:flex-1 w-full'>
                <h1 className='md:text-[40px] text-[30px] leading-[40px] font-bold md:leading-[60px] tracking-[0.5px] md:pl-32'>We Love Our<br />
                    Client Feedback</h1>
                <div className='flex justify-end gap-4'>
                    {/* <img src={image} alt="" className='w-[158px] h-[200px] rounded-[20px]' /> */}
                    <img src={image} alt="" className='w-[158px] h-[200px] rounded-[20px]' />
                    <img src={image} alt="" className='w-[158px] h-[200px] rounded-[20px]' />
                    <img src={bigImage} alt="" className='md:w-[396px] w-auto md:h-[480px] rounded-[20px] border-[2px] border-white' />
                </div>
            </div>
            <div className='md:flex-1 w-full flex flex-col justify-center relative'>
                <h1 className='md:px-[96px] px-11 mt-10 md:mt-0 font-primary text-[20.8px] leading-[26px] text-center'>
                    “The teams attention to detail in painting transformed my space beautifully. A trustworthy choice for anyone seeking quality work.”
                </h1>
                <img src={moduleName} alt="" className='mt-[43px]' />
                <h1 className='font-bold text-[20.8px] leading-[26px] text-center mt-[16px] font-primary'>Carolyn Ortiz</h1>
                <p className='font-normal text-[20.8px] leading-[26px] text-center font-secondary'>PM of Google</p>
                <div className="flex md:absolute justify-center mt-10 md:mt-0 bottom-0 gap-3 left-5">
                    <IoIosArrowBack className="bg-slate-50 cursor-pointer border-slate-200 border-[1px] w-[45px] h-[45px] py-2 rounded-md" />
                    <IoIosArrowForward className="bg-slate-50 cursor-pointer border-slate-200 border-[1px] w-[45px] h-[45px] py-2 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;