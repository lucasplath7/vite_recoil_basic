// Node Module Imports
import { Link } from 'react-router-dom';

// Styles
import './index.css';

export default function Nav(props) {
  const { routeDefinition, className } = props;

  // Helpers
  const routes = routeDefinition.reduce((acc, route) => {
    const navRoutes = [];

    if (route.children) {
      route.children.forEach((childRoute) => {
        if (childRoute.forNav) navRoutes.push(childRoute);
      });
    }

    if (route.forNav) navRoutes.push(route);

    return [
      ...acc,
      ...navRoutes,
    ];
  }, []);

  // Renderers
  function renderNavItem(route) {
    return (
      <li key={route.id}>
        <Link to={route.path}>
          {route.label}
        </Link>
      </li>
    );
  }

  function renderNavList() {
    return (
      <ul>
        { routes.map((routeId) => renderNavItem(routeId)) }
      </ul>
    );
  }

  return (
    <div className={`nav ${className}`}>
      { renderNavList() }
    </div>
  );
}
