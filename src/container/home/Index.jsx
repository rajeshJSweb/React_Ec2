import Carousel from "../../components/carousel/Carousel";
import Sliders from "../../components/slider/Sliders";
import TestimonialSlider from "../../components/slider/Testimonial";
import './../../App.css';
import FeaturedBanner from "./overview/FeaturedBanner";
import FeaturedService from "./overview/FeaturedService";
import Info from "./overview/Info";
import Support from "./overview/Support";

const logos = [
    "/src/static/img/slider/abbott.png",
    "/src/static/img/slider/visa.png",
    "/src/static/img/slider/fedx.png",
    "/src/static/img/slider/paypal.png",
    "/src/static/img/slider/toyota.png",
    "/src/static/img/slider/google.png",
    "/src/static/img/slider/adidas.png",
];
const images = [
    "/src/static/img/slider/Figure (1).png",
    "/src/static/img/slider/Figure (2).png",
    "/src/static/img/slider/Figure copy.png",
    "/src/static/img/slider/9.png",
    "/src/static/img/slider/Figure (2).png",
    "/src/static/img/slider/Figure copy.png",
    "/src/static/img/slider/9.png",
];

const Home = () => (
    <div className="font-primary overflow-x-hidden">
        <Carousel id="home" />
        <div className="mt-[33px]">
            <h1 className="py-3 text-[16px] px-14 md:px-0 md:text-[20px] text-center leading-[20px] md:leading-[24px] tracking-[0.5px] font-semibold text-[#585858]">Client we served from different corporate</h1>
            <Sliders images={logos} icon={true} />
        </div>
        <FeaturedService />
        <FeaturedBanner />
        <Info />
        <div className="md:mt-[104px] md:mx-32 md:px-24">
            <TestimonialSlider />
        </div>
        <div className="md:mt-[110px] mt-10">
            <Support />
        </div>
        <div className="mt-[100px] mb-[70px]" id="our-work">
            <h1 className="md:text-[40px] text-[30px] leading-[36px] md:leading-[60px] tracking-[0.5px] font-semibold text-center mb-[37px]">Some of Our Work</h1>
            <Sliders images={images} icon={false} />
        </div>
    </div>
);

export default Home;
