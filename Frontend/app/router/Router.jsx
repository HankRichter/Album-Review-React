import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
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
