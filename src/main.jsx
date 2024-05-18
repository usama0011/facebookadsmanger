import * as React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import EditCompaing from "./pages/EditCompaing";
import EditCompaingTwo from "./pages/EditCompaingTwo";
import EditCompaingThree from "./pages/EditCompaingThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/editcampaing",
    element: <EditCompaing />
  },
  {
    path: "/editcampaingtwo",
    element: <EditCompaingTwo />
  },
  {
    path: "/editcampaingthree",
    element: <EditCompaingThree />
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
