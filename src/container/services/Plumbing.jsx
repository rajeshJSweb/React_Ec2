
import Layout from '../../components/layout/Layout';
import { PageHeader } from '../../components/page-header/page-header';
import { navItems, serviceData } from '../../demoData/servicesData';

const Plumbing = () => {
    const contents = [
        { key: 'title', label: "Plumbing & Sanitary Services" },
        {
            key: "item",
            label: [
                "On Time Work Completion ",
                "Experienced and Trusted Plumber"
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

export default Plumbing;