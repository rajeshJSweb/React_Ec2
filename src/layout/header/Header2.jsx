import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import phone from '../../static/icon/phone.png';
import Vector from '../../static/logo/Vector.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                className={`bg-primary md:mx-[25px] md:h-[82px] px-2 md:px-[30px] py-[15px] md:rounded-t-[30px] 
                ${isScrolled
                        ? "fixed mt-0 right-0 left-0 z-50 transition-all md:rounded-b-[30px] md:rounded-t-[0px] duration-500 ease-in-out"
                        : "md:mt-[25px] transition-transform duration-500 ease-in-out"}`} style={{
                            boxShadow: isScrolled ? '0px 0px 25px rgba(0, 0, 0, 1)' : 'none'
                        }}>
                <div className="flex">
                    <div className="w-2/12">
                        <Link to="/" className='flex items-center gap-3'><img src={Vector} alt="Logo" />
                            <h1 className='md:block hidden font-semibold text-white text-[20px] leading-[24px] tracking-[0.5px]'>Servicemen</h1></Link>
                    </div>
                    <div className="w-7/12 text-white navbar-center flex justify-center">
                        <ul className="menu menu-horizontal">
                            <li className="px-[15px] text-[15px] font-medium leading-[26px] font-secondary">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="px-[15px] text-[15px] font-medium leading-[26px] font-secondary">
                                <Link to="/">Work</Link>
                            </li>
                            <li className="px-[15px] text-[15px] font-medium leading-[26px] font-secondary">
                                <details>
                                    <summary>Service List</summary>
                                    <ul className="p-2 text-black">
                                        <li><Link to='/plumbing'>Plumbing</Link></li>
                                        <li><Link to='/electric'>Electric</Link></li>
                                        <li><Link to='/office-moving'>Office Moving</Link></li>
                                        <li><Link to='/painting'>Painting</Link></li>
                                        <li><Link to='/aircon'>Aircon</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12 flex items-center gap-[15px] text-white justify-end">
                        <p className="py-1 font-semibold text-[14px] md:text-[16px] leading-[16px] md:leading-[22px] tracking-[0.5px]">
                            Book Now
                        </p>
                        <div className="flex items-center border-white border-[1px] px-[20px] py-[12px] rounded-[10px]">
                            <img src={phone} alt="Phone Icon" className="mr-[8px]" />
                            <button className="text-secondary font-semibold">
                                +65 9057 8010
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* <Carousel isScrolled={isScrolled} /> */}
        </div>
    );
};

export default Header;
