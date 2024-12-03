import * as React from "react";
import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import EditCompaing from "./pages/EditCompaing";
import EditCompaingTwo from "./pages/EditCompaingTwo";
import EditCompaingThree from "./pages/EditCompaingThree";
import EditChartMain from "./pages/EditChartMain";
import EditChartTwo from "./pages/EditChartTwo";
import EditChartThree from "./pages/EditChartThree";
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
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
import EditMyAds from "./pages/EditMyAds";
import EditPayment from "./pages/EditPayment";
import EditMyAdsSet from "./pages/EditMyAdsSet";
import PaymentLoadingPage from "./pages/PaymentLoadingPage";
import Login from "./pages/Login";
import CurrentAccount from "./pages/currentAccount";
import NewCalender from "./pages/NewCalender";
import UplaodCampaings from "./pages/UplaodCampaings";
import Reporting from "./pages/Reporting";
import Overview from "./pages/Overview";
import TestPage from "./components/TestPage";
import NewTask from "./components/NewTask";
import History from "./pages/History";
import AccountList from "./pages/AccountList";
import AddAccount from "./pages/AddAccount";
import EditAccount from "./pages/EditAccount";
import UpooadReporting from "./pages/UpooadReporting";
import ReportingCalendar from "./components/ReportingCalender";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/editcampaing/:id",
    element: <EditCompaing />,
  },
  {
    path: "/currentaccount",
    element: <CurrentAccount />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/newtask",
    element: <NewTask />,
  },
  {
    path: "/overviewaccount",
    element: <Overview />,
  },
  {
    path: "/reporting",
    element: <Reporting />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/calender",
    element: <NewCalender />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/accountlist",
    element: <AccountList />,
  },
  {
    path: "/uploadreporting",
    element: <UpooadReporting />,
  },
  {
    path: "/add-account",
    element: <AddAccount />,
  },
  {
    path: "/reportingcalender",
    element: <ReportingCalendar />,
  },
  {
    path: "/edit-account/:id",
    element: <EditAccount />,
  },
  {
    path: "/editcampaingtwo/:id",
    element: <EditCompaingTwo />,
  },
  {
    path: "/editcampaingthree/:id",
    element: <EditCompaingThree />,
  },
  {
    path: "/editmainchart/:id",
    element: <EditChartMain />,
  },
  {
    path: "/editmaincharttwo/:id",
    element: <EditChartTwo />,
  },
  {
    path: "/uploadcamapings",
    element: <UplaodCampaings />,
  },
  {
    path: "/editmainchartthree/:id",
    element: <EditChartThree />,
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={<PaymentLoadingPage />}>
        <PaymentPage />
      </Suspense>
    ),
  },

  {
    path: "/createpayment",
    element: <CreatePayment />,
  },
  {
    path: "/createad",
    element: <CreateAd />,
  },
  {
    path: "/createAdSet",
    element: <CreateAdsSet />,
  },
  {
    path: "/createcampaing",
    element: <CreateCampaing />,
  },
  {
    path: "/viewmyampaings",
    element: <ViewMyCampaings />,
  },
  {
    path: "/mainnavigation",
    element: <MainNavigation />,
  },
  {
    path: "/viewadsset",
    element: <ViewAdSet />,
  },
  {
    path: "/viewpayments",
    element: <ViewPayments />,
  },
  {
    path: "/viewads",
    element: <ViewAds />,
  },
  {
    path: "/editmycampaing/:id",
    element: <EditMyCampaing />,
  },
  {
    path: "/editmyads/:id",
    element: <EditMyAds />,
  },
  {
    path: "/editpayment/:id",
    element: <EditPayment />,
  },
  {
    path: "/editmyadset/:id",
    element: <EditMyAdsSet />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
