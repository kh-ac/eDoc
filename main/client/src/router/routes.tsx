import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import FindDoctor from "../pages/FindDoctor";
import DoctorsPage from "../pages/doctors/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/find-doctor",
    element: <FindDoctor />,
  },
  {
    path: "/doctors",
    element: <DoctorsPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
