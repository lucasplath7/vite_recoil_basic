// Node Module Imports
import { Outlet } from 'react-router-dom';

// Custom Components
import Banner from '../Banner';
import Footer from '../Footer';
import Nav from '../Nav';
import routeDefinition from '../../routes';

// Styles
import './index.css';

export default function Layout() {
  return (
    <div className="app-grid-container">
      <Banner
        title="VITE_RECOIL_BASIC"
        className="app-banner"
      />
      <Nav
        routeDefinition={routeDefinition}
        className="app-nav"
      />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer
        className="app-footer"
        contactEmail="lucas.plath@gmail.com"
        author="Lucas Plath"
      />
    </div>
  );
}
