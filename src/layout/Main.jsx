import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

const Main = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Main;
