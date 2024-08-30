
import Layout from '../../components/layout/Layout';
import { PageHeader } from '../../components/page-header/page-header';
import { navItems, serviceData } from '../../demoData/servicesData';

const OfficeMoving = () => {
    const contents = [
        { key: 'title', label: "Office Moving & Cleaning Services" },
        {
            key: "item",
            label: [
                "On Time Work Completion ",
                "Experienced and Trusted electric service men"
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
                rating={contents[2].label} />
            <Layout navItems={navItems} data={serviceData} />
        </div>
    );
};

export default OfficeMoving;