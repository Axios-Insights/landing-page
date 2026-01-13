import { HomePage, NotFoundPage } from "@pages";
import { createBrowserRouter } from "react-router";

import RouteBehaviors from "./behaviors";
import { PATHS } from "./constants";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <RouteBehaviors />,
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
