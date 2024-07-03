import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllDefinitions from "./taskpane/components/AllDefinitions";
import SelectedDefinitions from "./taskpane/components/SelectedDefinitions";
import App from "./taskpane/components/App";

export const router = createBrowserRouter([
  {
    path: "/taskpane.html",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllDefinitions />,
      },
      {
        path: "definitions",
        element: <AllDefinitions />,
      },
      {
        path: "selected-definitions",
        element: <SelectedDefinitions />,
      },
    ],
  },
]);
