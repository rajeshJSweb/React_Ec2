import icon from "../../static/icon/reviewer.png";
import './style.css';

const Review = () => {
    return (
        <div className='mt-7 pl-3'>
            <div className='flex md:gap-14 gap-2'>
                <div>
                    <h1 className='text-[48px] leading-[54px] font-bold text-[#5C5C5C]'>4.82</h1>
                    <div className="stars" >
                        <span>★★★★★</span>
                    </div>
                </div>
                <div className="md:rating-bars md:w-2/6 w-full">
                    <div className="rating-bar">
                        <span>5</span>
                        <div className="bar w-3">
                            <div className="fill fill-5"></div>
                        </div>
                    </div>
                    <div className="rating-bar">
                        <span>4</span>
                        <div className="bar">
                            <div className="fill fill-4"></div>
                        </div>
                    </div>
                    <div className="rating-bar">
                        <span>3</span>
                        <div className="bar">
                            <div className="fill fill-3"></div>
                        </div>
                    </div>
                    <div className="rating-bar">
                        <span>2</span>
                        <div className="bar">
                            <div className="fill fill-2"></div>
                        </div>
                    </div>
                    <div className="rating-bar">
                        <span>1</span>
                        <div className="bar">
                            <div className="fill fill-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-14'>
                <div className='flex items-center gap-10'>
                    <div>
                        <img src={icon} alt="Avatar" />
                    </div>
                    <div className='font-secondary'>
                        <h1 className='text-[#1F1F1F] text-[16px] font-semibold leading-[20px]'>Leo Chang</h1>
                        <div className="review-stars py-1">★★★★★</div>
                        <p className='text-[#383A3C]'>My work got though it seems to be on expensive one</p>
                    </div>
                </div>
                <div className='flex items-center gap-10 mt-12'>
                    <div>
                        <img src={icon} alt="Avatar" />
                    </div>
                    <div className='font-secondary'>
                        <h1 className='text-[#1F1F1F] text-[16px] font-semibold leading-[20px]'>Sunny Harris</h1>
                        <div className="review-stars py-1">★★★★★</div>
                        <p className='text-[#383A3C]'>My work got though it seems to be on expensive one</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
