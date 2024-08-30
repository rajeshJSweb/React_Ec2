import About from "../../../components/about/About";
import AdsBanner from "../../../static/img/Background.png";

const Info = () => {
    return (
        <div className="w-full md:mt-[73px]">
            <div className="md:mx-32 md:px-24 px-2">
                <About aboutPage={false} />
                <div className="mt-16 py-10 md:py-0">
                    <img src={AdsBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Info;