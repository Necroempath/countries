import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./pages/SiteLayout.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CountriesPage />,
      },
      {
        path: "/region/:regionId",
        element: <CountriesPage />,
      },
      {
        path: "/country/:countryId",
        element: <CountryDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
