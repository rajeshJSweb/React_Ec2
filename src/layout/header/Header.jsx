import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import phone from '../../static/icon/phone.png';
import Vector from '../../static/logo/Vector.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const detailsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (detailsRef.current && !detailsRef.current.contains(event.target)) {
                detailsRef.current.removeAttribute('open');
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about-us';

    return (
        <div
            className={`navbar w-auto flex justify-between bg-primary md:mx-[25px] md:h-[82px] px-2 md:px-[30px] py-[15px] ${isScrolled ? `fixed top-0 right-0 left-0 z-50 transition-all md:rounded-b-[20px] ${isHomePage ? 'md:rounded-t-[0px]' : ''} duration-500 ease-in-out` : `transition-transform duration-500 md:rounded-[10px] ease-in-out ${isHomePage ? 'md:mt-[25px] md:rounded-t-[20px] md:rounded-b-[0px]' : `md:mt-[25px] ${isAboutPage && 'rounded-b-none'}`}`
                }`}
            style={{
                boxShadow: isScrolled ? '0px 20px 20px rgba(0, 0, 0, 0.25)' : 'none',
            }}
        >
            <div className="navbar-start w-auto md:w-[20%]">
                <div className="dropdown text-white">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-60 bg-shadow p-2 shadow"
                    >
                        <li><Link to='/'>Home</Link></li>
                        <li><a href='#our-work'>Work</a></li>
                        <li><a href='#our-work'>About</a></li>
                        <li>
                            <a>Service List</a>
                            <ul className="p-2">
                                <li><Link to="/plumbing">Plumbing</Link></li>
                                <li><Link to="/electric">Electric</Link></li>
                                <li><Link to="/office-moving">Office Moving</Link></li>
                                <li><Link to="/painting">Painting</Link></li>
                                <li><Link to="/aircon">Aircon</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-3">
                    <img src={Vector} alt="Logo" />
                    <h1 id="home" className="md:block hidden font-semibold text-white text-[20px] leading-[24px] tracking-[0.5px]">Servicemen</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex justify-center flex-1">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li className="px-[15px] text-[15px] font-medium leading-[26px] font-secondary"><Link to="/">Home</Link></li>
                    <li className="text-[15px] font-medium leading-[26px] font-secondary"><a href="#our-work">Work</a></li>
                    <li className="text-[15px] font-medium leading-[26px] font-secondary"><a href="/about-us">About</a></li>
                    <li className="px-[15px] text-[15px] font-medium leading-[26px] font-secondary">
                        <details ref={detailsRef}>
                            <summary>Service List</summary>
                            <ul className="p-2 text-white bg-shadow w-[300px] z-50">
                                <li><Link to="/plumbing">Plumbing</Link></li>
                                <li><Link to="/electric">Electric</Link></li>
                                <li><Link to="/office-moving">Office Moving</Link></li>
                                <li><Link to="/painting">Painting</Link></li>
                                <li><Link to="/aircon">Aircon</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end md:flex gap-3 text-white md:w-[20%] w-auto">
                <p className="py-1 font-semibold text-[14px] md:text-[16px] leading-[16px] md:leading-[22px] tracking-[0.5px]">
                    Book Now
                </p>
                <div className="flex items-center border-white border-[1px] py-2 px-5 md:px-[20px] md:py-[6px] rounded-[10px]">
                    <img src={phone} alt="Phone Icon" className="mr-[8px]" />
                    <button className="text-secondary font-semibold">
                        +65 9057 8010
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
