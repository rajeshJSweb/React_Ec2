import Aircon from '../container/services/Aircon';
import Demo from '../container/services/Demo';
import Electric from '../container/services/Electric';
import OfficeMoving from '../container/services/OficeMoving';
import Painting from '../container/services/Painting';
import Plumbing from '../container/services/Plumbing';

const servicesRoutes = [
    { path: '/plumbing', element: <Plumbing /> },
    { path: '/electric', element: <Electric /> },
    { path: '/office-moving', element: <OfficeMoving /> },
    { path: '/painting', element: <Painting /> },
    { path: '/aircon', element: <Aircon /> },
    { path: '/demo', element: <Demo /> },
];

export default servicesRoutes;
