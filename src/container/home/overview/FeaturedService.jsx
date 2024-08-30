import { useEffect, useState } from "react";
import ServiceCard from "../../../components/cards/ServiceCard";


const FeaturedService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/demoData/serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    // const { ref, scaleV } = useScrolGrow();

    return (
        <div className="md:mt-[92px] md:mx-32 md:px-24 px-2">
            <div>
                <h1 className="font-semibold md:text-[40px] text-[30px] leading-[40px] md:leading-[60px] text-center py-2">Explore Our Services</h1>
                <p className="md:px-32 text-center py-1 font-secondary">Advance Handyman Singapore is more than just a service provider; we are your dedicated partner in craftsmanship. With a legacy of reliability and precision, we embody a commitment to excellence, infusing passion into every project we undertake.</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-7 mt-[17px]">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedService;