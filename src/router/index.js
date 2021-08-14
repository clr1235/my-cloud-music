import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import allRoutes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        {renderRoutes(allRoutes)}
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
