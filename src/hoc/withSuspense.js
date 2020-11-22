import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export function withSuspense(Component) {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
}
