import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import top from '../../static/icon/go-top.png';
import Vector from '../../static/logo/Vector.png';

const Footer = () => {
    return (
        <div className='pb-32 md:pb-[59px] md:py-7 bg-[#1e1e1e]'>
            <div className="md:mx-32 md:px-16 relative">
                <div className="text-white md:flex justify-between py-10">
                    <div className='md:w-4/12 px-3'>
                        <div className="flex gap-3 font-semibold text-[20px] items-center">
                            <img src={Vector} alt="" />
                            <h1 className="font-primary">Servicemen</h1>

                        </div>
                        <p className='py-10 font-secondary'>We are number one Handymen service provider
                            company in Singapore. Serving our customer 24/7
                            for last 15 years. For any service just whatsapp us </p>
                    </div>
                    <div className='md:w-4/12 px-3 font-secondary'>
                        <h1 className='text-[16px] leading-[26px] font-semibold'>Top Rated Service</h1>
                        <div className='flex justify-between py-5'>
                            <ul className='pr-16 leading-[40px] text-[15px]'>
                                <li>Plumbing</li>
                                <li>Electricity</li>
                                <li>Paint Work</li>
                                <li>Gardening</li>
                                <li>Paint Work</li>
                            </ul>
                            <ul className='pr-16 leading-[40px] text-[15px]'>
                                <li>Carpenter works</li>
                                <li>Lock Smith</li>
                                <li>Polishing service</li>
                                <li>Aircon Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-4/12 px-3 font-secondary'>
                        <h1 className='text-[16px] leading-[26px] font-semibold'>Feel Free To Contact us</h1>
                        <div>
                            <ul className='leading-[40px] py-5'>
                                <li>+62 877 77263549 <span className='text-[#999999] text-[16px] font-normal'>(Mon to Sun 9am - 11pm)</span></li>
                                <li>hello@servicemen.xyz</li>
                                <li>+62 811 09998263</li>
                                <li>(+33) 775 55 9375 <span className='text-[#999999] text-[16px] font-normal'>(Mon to Sun 9am - 11pm)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#292929] py-5 px-4 md:flex items-center md:gap-10 rounded-xl text-[#FFFFFFCC] font-secondary">
                    <div className="flex md:w-3/12 justify-between">
                        <p>Terms of service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="flex md:w-7/12 justify-between border-l-[1px] border-[#FFFFFF1A]">
                        <p className="px-2">Copyright © All rights reserved.</p>
                        <p className="pr-5">2024 Developed by <span className="text-[#F7C32E]">Nextstep</span></p>
                    </div>
                    <div className="flex md:w-2/12 justify-end gap-7 pr-5">
                        <FaFacebookF />
                        <CiInstagram />
                        <FaYoutube />
                        <FaTwitter />
                    </div>
                </div>
                <div className="absolute right-0 top-10">
                    <a href="#home"><img src={top} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;