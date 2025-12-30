import { HomePage, NotFoundPage } from "@pages";
import { createBrowserRouter, Outlet } from "react-router";

import { PATHS } from "./constants";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Outlet />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
