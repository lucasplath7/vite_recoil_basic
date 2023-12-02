// Default Imports
import { useState } from 'react'
import { Link } from "react-router-dom";

// Styles
import './index.css';

export default function Nav(props) {
  const routes = props.routeDefinition.reduce((acc, route) => {
    const routes = [];

    if (route.children) {
      route.children.forEach((childRoute) => {
        childRoute.forNav ? (routes.push(childRoute)) : null;
      })
    }

    route.forNav ? (routes.push(route)) : null;

    return [
      ...acc,
      ...routes,
    ]
  }, []);

  function renderNavItem(route) {
    return (
      <li key={route.id}>
        <Link to={route.path}>
          {route.label}
        </Link>
      </li>
    )
  }

  function renderNavList() {
    return (
      <ul>
        { routes.map(routeId => renderNavItem(routeId)) }
      </ul>
    )
  }

  return (
    <div className={'nav ' + props.className}>
      { renderNavList() }
    </div>
  );
}