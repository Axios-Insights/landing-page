import { Outlet } from "react-router";

import { ScrollToHashBehavior } from "./scroll_to_hash_behavior";

export const Behaviors = () => {
  return (
    <>
      <ScrollToHashBehavior />
      <Outlet />
    </>
  );
};
