import Layout from '../../components/layout/Layout';
import { PageHeader } from '../../components/page-header/page-header';
import { navItems, serviceData } from '../../demoData/servicesData';

const Electric = () => {
    const contents = [
        { key: 'title', label: "Air Conditioning Service" },
        {
            key: "item",
            label: [
                "Excludes all components and parts (if used)",
                "Excludes Transportation cost (if applied)"
            ]
        },
        {
            key: "rating",
            label: "4.5"
        },
    ];


    return (
        <div>
            <PageHeader
                title={contents[0].label}
                item={contents[1].label}
                rating={contents[2].label}
            />
            <Layout navItems={navItems} data={serviceData} />
        </div>
    );
};

export default Electric;
