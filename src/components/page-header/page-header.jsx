/*eslint-disable*/
import rattingImg from '../../static/img/List (1).png';
import image from '../../static/img/young.png';
import './style.css';

const PageHeader = ({ title, item, rating }) => {
    return (
        <div className='bg-primary md:mt-4 md:px-24 md:flex items-center px-2'>
            <div className='md:w-7/12 relative'>
                <h1 className="md:text-[48px] text-[30px] font-primary leading-[40px] md:leading-[72px] font-bold text-white py-4 whitespace-nowrap overflow-hidden">
                    {title}
                </h1>

                <ul className='md:leading-[35px] md:mt-5 text-white md:text-[24px] md:pl-10 font-secondary'>
                    {item?.map((listItem, index) => (
                        <li key={index} className="custom-list-item">
                            {listItem}
                        </li>
                    ))}
                </ul>
                <div className='md:mt-7 mt-3 relative md:left-24 inline-block'>
                    <div className='flex justify-center items-center flex-col'>
                        <img src={rattingImg} alt="" className='text-center' />
                        <p className='text-[20px] leading-[30px] text-white'>(Rating {rating} out of 5)</p>
                    </div>
                </div>
            </div>
            <div className="md:w-5/12 relative">
                <div className='bg-white justify-center absolute bottom-[65px] flex items-center md:left-10 w-[203px] h-[44px] px-[12px] py-[10px] rounded-[20px]'>
                    <p className='text-secondary font-medium md:text-[22px] md:leading-[30px]'>Starts From $ 40</p>
                </div>
                <img src={image} alt="image" />
            </div>
        </div>
    );
};

export { PageHeader };

