import { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Sliders from "../../components/slider/Sliders";

import AboutCard from '../../components/about/About';

const images = [
    "/src/static/img/slider/Figure (1).png",
    "/src/static/img/slider/Figure (2).png",
    "/src/static/img/slider/Figure copy.png",
    "/src/static/img/slider/9.png",
    "/src/static/img/slider/Figure (2).png",
    "/src/static/img/slider/Figure copy.png",
    "/src/static/img/slider/9.png",
];

const About = () => {
    const [aboutData, setAboutData] = useState([])
    useEffect(() => {
        fetch('/demoData/aboutData.json')
            .then(res => res.json())
            .then(data => setAboutData(data))
    }, [])

    return (
        <div>
            <Carousel />
            <div className="mt-[50px]">
                <h1 className="text-[40px] leading-[60px] tracking-[0.5px] font-semibold text-center font-secondary mb-[17px]">Some of Our Work</h1>
                <Sliders images={images} icon={false} />
            </div>
            <div className="md:mx-32 md:px-24 md:mt-[76px] md:mb-44 mb-24">
                {aboutData?.map(about => <AboutCard aboutPage={true} key={about} aboutSection={about.aboutSection} service={about.servicer} />)}
            </div>
        </div>
    );
};

export default About;