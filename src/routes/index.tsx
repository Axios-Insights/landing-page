import { HomePage } from "@pages/home_page";
import { NotFoundPage } from "@pages/not_found_page";
import { createBrowserRouter } from "react-router";

import { Behaviors } from "./behaviors";
import { PATHS } from "./constants";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Behaviors />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
