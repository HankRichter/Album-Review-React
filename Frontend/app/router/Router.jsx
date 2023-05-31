import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the homepage</div>,
    // loader: rootLoader,
    // children: [
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
