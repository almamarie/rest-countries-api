import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Country from "./pages/country/Country";
import MainError from "./pages/error/MainError";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <MainError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "countries/",
          element: <Home />,
        },
        { path: "countries/:countryFullName", element: <Country /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
