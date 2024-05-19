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
import EditChartMain from "./pages/EditChartMain";
import EditChartTwo from "./pages/EditChartTwo";
import EditChartThree from "./pages/EditChartThree";
import PaymentPage from "./pages/PaymentPage";

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
  {
    path: "/editmainchart",
    element: <EditChartMain />
  },
  {
    path: "/editmaincharttwo",
    element: <EditChartTwo />
  },
  {
    path: "/editmainchartthree",
    element: <EditChartThree />
  },
  {
    path: "/payment",
    element: <PaymentPage />
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
