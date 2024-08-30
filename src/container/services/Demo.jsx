import Layout from "../../components/layout/Layout";
import { PageHeader } from "../../components/page-header/page-header";
import { navItems, serviceData } from "../../demoData/servicesData";


const Demo = () => {

    return (
        <main>
            <PageHeader />
            <Layout navItems={navItems} data={serviceData} />
        </main>
    );
};

export default Demo;