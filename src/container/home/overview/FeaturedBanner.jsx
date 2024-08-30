import { PiStarThin } from "react-icons/pi";
import BackgroundImage from "../../../static/img/featuredBanner.png";

const FeaturedBanner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '500px', width: '100%',
            }}
            className="md:mt-[87px] flex justify-center items-center px-2 md:px-0"
        >
            <div className="w-full bg-red-500 md:block hidden" />
            <div className="w-full md:pr-32 md:mr-32 text-white">
                <div className="inline-block bg-slate-50 w-auto px-4 rounded-md">
                    <div className="flex items-center"> <PiStarThin className="text-[#F7C32E] text-[20px]" />
                        <p className="text-black ml-2 font-semibold">Featured</p></div>
                </div>

                <h1 className="md:text-[40px] text-[30px] font-semibold leading-[60px] py-2">Live your daily life <br />With Comfort</h1>
                <p className="md:pr-24 py-2 text-[14px] md:text-[20px] leading-[24px] font-normal font-secondary">Advance Handyman Singapore is more than just a service provider; we are your dedicated partner in craftsmanship. With a legacy of reliability and precision, we embody a commitment to excellence, infusing passion into every project we undertake.</p>
                <button className="bg-[#5143D9] px-4 py-2 rounded-lg mt-2">Call Now</button>
            </div>
        </div>
    );
};

export default FeaturedBanner;
