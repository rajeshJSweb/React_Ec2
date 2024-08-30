/*eslint-disable*/
import { useEffect, useState } from 'react';
import Review from '../review/review';
import Navigation from './Navigation';

const Layout = ({ navItems, data }) => {
    const [selectedItem, setSelectedItem] = useState('overview');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(data);

    return (
        <div className='md:mx-32 my-10 md:my-[129px]'>
            <div className='md:flex md:px-24 px-2 gap-[34px]'>
                <div className='md:w-auto'>
                    <Navigation items={navItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isSticky={isSticky} />
                </div>
                <div className='md:flex-1 w-full'>
                    {data.map((item, index) => (
                        <div key={index} id={item?.id} className='text-[#5C5C5C] font-secondary'>
                            {index === 1 && (
                                <h1 className='custom-list-item mt-5 font-bold text-[18px] md:text-[24px] font-primary capitalize '>{item.id}</h1>
                            )}
                            <p className='md:mt-5 text-[18px] pl-5'>{item.paragraph}</p>
                            {item.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className='mt-7'>
                                    <h2 className="custom-list-item font-bold text-[18px] md:text-[24px] font-primary">{section.title}</h2>
                                    <ul className="list-disc pl-5 mt-2 text-[18px]">
                                        {section.items.map((listItem, listIndex) => (
                                            <li key={listIndex} className='list-none'>{listItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Review Section */}
                    <div id={navItems[2].id} className='pl-5 mt-10'>
                        <h1 className='text-[24px] leading-[28px] font-semibold text-[#5C5C5C]'>Review of Plumbing & Sanitary Services</h1>
                        <Review />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
