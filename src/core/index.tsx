import router from "@routes";
import { RouterProvider } from "react-router";

import CoreProviders from "./providers";

const Core = () => {
  return (
    <CoreProviders>
      <RouterProvider router={router} />
    </CoreProviders>
  );
};

export default Core;
