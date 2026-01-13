import { Outlet } from "react-router";

import ScrollToHash from "./scroll_to_hash";

const RouteBehaviors = () => {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
};

export default RouteBehaviors;
