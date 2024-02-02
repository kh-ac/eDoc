import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import FindDoctor from "../pages/FindDoctor";

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
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
