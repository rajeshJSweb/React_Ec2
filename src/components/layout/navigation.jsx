/*eslint-disable*/
const Navigation = ({ items, selectedItem, setSelectedItem, isSticky }) => (
    <div className={`md:border-r-[2px] border-r-[#8f8f8f] md:min-h-dvh ${isSticky ? 'sticky top-[100px]' : ''}`}>
        <ul className="flex md:flex-col md:gap-[25px] font-semibold justify-center md:justify-start md:text-[24px] text-[18px] md:font-bold font-secondary md:pl-4">
            {items.map(item => (
                <li
                    key={item.id}
                    className={`md:h-[40px] md:pr-4 px-5 md:px-0 md:text-[24px] text-[#5C5C5C] ${selectedItem === item.id ? 'relative px-4 text-[#EE4710] border-r-[#106745] border-r-[3px]' : ''}`}
                    onClick={() => setSelectedItem(item.id)}
                >
                    {selectedItem === item.id && (
                        <span className="absolute inset-0 bg-[#D9D9D9] opacity-30"></span>
                    )}
                    <a href={`#${item.id}`} className="px-2 relative z-10">{item.label}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default Navigation;
