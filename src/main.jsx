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
import CreatePayment from "./pages/CreatePayment";
import CreateAd from "./pages/CreateAd";
import CreateAdsSet from "./pages/CreateAdsSet";
import CreateCampaing from "./pages/CreateCampaing";
import ViewMyCampaings from "./pages/ViewMyCampaings";
import MainNavigation from "./pages/MainNavigation";
import ViewAdSet from "./pages/ViewAdSet";
import ViewPayments from "./pages/ViewPayments";
import ViewAds from "./pages/ViewAds";
import EditMyCampaing from "./pages/EditMyCampaing";

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

  {
    path: "/createpayment",
    element: <CreatePayment />
  },
  {
    path: "/createad",
    element: <CreateAd />
  },
  {
    path: "/createAdSet",
    element: <CreateAdsSet />
  },
  {
    path: "/createcampaing",
    element: <CreateCampaing />
  },
  {
    path: "/viewmyampaings",
    element: <ViewMyCampaings />
  },
  {
    path: "/mainnavigation",
    element: <MainNavigation />
  },
  {
    path: "/viewadsset",
    element: <ViewAdSet />
  },
  {
    path: "/viewpayments",
    element: <ViewPayments />
  },
  {
    path: "/viewads",
    element: <ViewAds />
  },
  {
    path: "/editmycampaing/:id",
    element: <EditMyCampaing />
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
