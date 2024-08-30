
import Review from '../review/review';
import './../page-header/style.css';

const ContentPage = () => {

    return (
        <div className="md:pl-8 px-2 md:px-0 md:pr-24">
            <div>
                <div id='overview'>
                    <p className='md:mt-5'>
                        Plumbing emergencies can strike at any time, catching us off guard. Fortunately, 24 hour plumbing services in Singapore are always ready to respond to urgent needs. Whether it’s a burst pipe, a clogged drain, or a malfunctioning water heater, these round the clock plumbers are equipped to handle emergencies promptly and efficiently.
                    </p>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Whats included?</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none' >Well-trained plumber</li>
                        <li className='list-none'>Safety assurance</li>
                    </ul>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Whats excluded?</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none'>Excludes all components and parts (if used)</li>
                        <li className='list-none'>Excludes Transportation cost (if applied)</li>
                    </ul>
                </div>
                {/* Details */}
                <div id='detailes'>
                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Details</h2>
                    <p className="mt-2 pl-5">
                        All your Plumbing and Sanitary-related problems will be taken care of by Serviceman.xyz. We have trusted professionals who are experts in fitting, installations, and drainage-related issues. Finding affordable plumbing services in Singapore can be a daunting task, but Advance Handyman Singapore provides budget-friendly solutions for various plumbing issues, ensuring the functionality of your home or business without straining your budget.
                    </p>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Service Features:</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none'>Well-trained Workmen</li>
                        <li className='list-none'>7 Days Service Warranty</li>
                        <li className='list-none'>Doorstep service</li>
                        <li className='list-none'>Safety Assurance</li>
                    </ul>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Pricing:</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none'>Only Service Charge</li>
                        <li className='list-none'>Visiting Charge is $25 if no service is availed</li>
                        <li className='list-none'>Excludes all components and parts (if used)</li>
                        <li className='list-none'>Excludes Transportation cost (if applied)</li>
                    </ul>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Payment:</h2>
                    <p className="mt-2 pl-5">After service completion, the customer will pay directly to the servicemen.</p>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Warranty:</h2>
                    <p className="mt-2 pl-5">Warranty on consumables and parts will be as per manufacturer. 7 Days Service Warranty will be given by Serviceman.xyz.</p>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Terms & Conditions:</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none'>
                            Serviceman.xyz or its representatives are not liable for any direct or incidental loss or damage of the clients property or personal security during availing the service, caused by accident, theft, burglary, or any other type of incidental damages.
                        </li>
                        <li className='list-none'>
                            The client is solely responsible for monitoring, using, and supervising the activities of the resource provided by Serviceman.xyz.
                        </li>
                        <li className='list-none'>
                            By availing of the service, the client automatically discharges Serviceman.xyz from any claims or legal/moral liabilities other than stated in the details of services specified by Serviceman.xyz.
                        </li>
                    </ul>

                    <h2 className="custom-list-item font-semibold mt-7 text-[18px]">Night Shift Service:</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li className='list-none'>Night Shift Service period starts from 10:00 pm to 8:00 am.</li>
                        <li className='list-none'>Minimum hours will be charged for night shift service booking.</li>
                        <li className='list-none'>In excess of 45 mins will be charged as Emergency Support Service Charge for availing this service at night shift service period.</li>
                        <li className='list-none'>If for any reason the customer refuses to take service after order confirmation, only the Emergency Support Service Charge will be applicable.</li>
                    </ul>
                </div>
                {/* Review */}
                <div id='review' className='pl-5 mt-10'>
                    <h1 className='text-[24px] leading-[28px] font-semibold text-[#5C5C5C]'>Review of Plumbing & Sanitary Services</h1>
                    <Review />
                </div>
            </div>
        </div>
    );
};

export default ContentPage;
