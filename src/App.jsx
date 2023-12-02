// Default Imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Custom Components
import routeDefinition from './routes';

// Styles
import './App.css'

export default function App() {
  return (
    <>
      <RouterProvider router={ createBrowserRouter(routeDefinition) } />
    </>
  )
}
