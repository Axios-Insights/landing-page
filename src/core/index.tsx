import { router } from "@routes";
import { RouterProvider } from "react-router";

import { Providers } from "./providers";

export const Core = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
