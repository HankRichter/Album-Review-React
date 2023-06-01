import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // loader: rootLoader,
    // children:
    //   {
    //     path: "/login",
    //     element: <div>This is the Login page</div>,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <div>This is the Login page</div>,
    // loader: teamLoader,
  },
]);
