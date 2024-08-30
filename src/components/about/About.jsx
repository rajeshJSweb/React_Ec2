/*eslint-disable*/
import icon3 from '../../static/icon/24-hours 1.png';
import icon from '../../static/icon/Figure_margin.png';
import icon2 from '../../static/icon/Figureloadn.png';
import graph from '../../static/icon/graph.png';
import svg from '../../static/icon/SVG.png';
import handymanImage from '../../static/img/09.jpg.png';
import figureIOmage from '../../static/img/Figure.png';
import manImage from '../../static/img/man.png';

const About = ({ aboutSection, services, aboutPage }) => {
    return (
        <div className='md:flex justify-center gap-5 font-secondary'>
            <div className="md:w-5/12 w-full relative">
                <h1 className="md:text-[40px] text-[30px] leading-[36px] font-semibold tracking-[0.5px] md:leading-[50px] pr-[34px]">Why We are the Best Choice for Your Handyman Service</h1>
                <img src={graph} alt="" width={154} height={72} className='absolute top-28 z-10 -right-20' />
                <p className="text-[16px] md:text-[20px] leading-[24px] md:pr-16 py-[22px] font-secondary">With 15 years of experience we serve our customer with perfection and dedication. Our trained handyman provides expert service with professionalism. We also provide transparent and comprehensive pricing so that you always win with us.</p>
                <img src={handymanImage} alt="Handyman" />
                <img src={figureIOmage} alt="Handyman" className={`absolute right-0 ${aboutPage ? "bottom-44" : 'bottom-10'}`} />
            </div>
            <div initial={{ x: "100%" }}
                className="md:w-7/12 w-full relative top-14">
                <img src={manImage} alt="manImage" />
                <div className='bg-white shadow-md -top-20 md:-left-10 relative inline-block px-5 rounded-2xl py-4'>
                    <h1 className='text-[36px] font-semibold leading-[46px] text-[#5143D9]'>8.2k+</h1>
                    <p className='font-semibold'>Total Booking</p>
                </div>
                <div className='md:grid grid-cols-2 gap-3'>
                    <div className='flex gap-3'>
                        <img src={icon} alt="" />
                        <div>
                            <h1 className='text-[20px] leading-[26px] font-semibold'>Best Rate Guarantee</h1>
                            <p className='text-[#747579] md:text-[20px] text-[16px] font-secondary leading-[24px]'>We give you the best ratefor handyman service and related accessories.</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={icon2} alt="" />
                        <div>
                            <h1 className='text-[20px] leading-[26px] font-semibold'>No Booking Fee</h1>
                            <p className='text-[#747579] md:text-[20px] text-[16px] font-secondary leading-[24px]'>To book your service you just need to whatsapp us or call us, no fee is required for booking</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <img src={icon3} alt="" className='w-[52px] h-[52px]' />
                        <div>
                            <h1 className='text-[20px] leading-[26px] font-semibold'>24/7 Service</h1>
                            <p className='text-[#747579] md:text-[20px] text-[16px] font-secondary leading-[24px]'>We give you the best ratefor handyman service and related accessories.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <img src={svg} alt="" className='h-[52px]' />
                        <div>
                            <h1 className='text-[20px] leading-[26px] font-semibold'>Money Back Guarantee</h1>
                            <p className='text-[#747579] md:text-[20px] text-[16px] font-secondary leading-[24px]'>We give you the best ratefor handyman service and related accessories.</p>
                        </div>
                    </div>
                </div>
                <div className={`grid md:grid-cols-2 grid-cols-1 gap-5 font-primary mt-10 ${!aboutPage && 'hidden'}`}>
                    <div className='bg-white rounded-md py-8 px-7 gap-2 flex justify-center items-center' style={{ boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.3)' }}>
                        <h1 className='text-[50px] text-[#106745] font-semibold'>15</h1><p className='text-[32px] text-[#868EAE] font-semibold leading-[30px]'>Years of Experience </p>
                    </div>
                    <div className='bg-white rounded-md py-8 px-7 gap-2 flex justify-center items-center' style={{ boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.3)' }}>
                        <h1 className='text-[40px] text-[#106745] font-semibold'>590</h1><p className='text-[32px] text-[#868EAE] font-semibold leading-[30px]'>Satisfied
                            Customers </p>
                    </div>
                    <div className='bg-white rounded-md py-8 px-7 gap-2 flex justify-center items-center' style={{ boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.3)' }}>
                        <h1 className='text-[40px] text-[#106745] font-semibold'>875</h1><p className='text-[32px] text-[#868EAE] font-semibold leading-[30px]'>Project
                            Completed </p>
                    </div>
                    <div className='bg-white rounded-md py-8 px-7 gap-2 flex justify-center items-center' style={{ boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.3)' }}>
                        <h1 className='text-[40px] text-[#106745] font-semibold'>1200+</h1><p className='text-[32px] text-[#868EAE] font-semibold leading-[30px]'>Unit
                            Installed  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
