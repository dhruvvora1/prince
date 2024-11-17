import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLogin from "./app/authentication/login";
import MatxLayout from "./app/component/maxLayout";
import NotFound from "./app/layout/sessions/NotFound";
const PageType = lazy(() => import("./app/component/dashboard/index"));
const Blog = lazy(() => import("./app/component/blog/index"));
const Learning = lazy(() => import("./app/component/learning"));
const Broker = lazy(() => import("./app/component/broker"));
const Intraday = lazy(() => import("./app/component/Intraday"));
const FoStocks = lazy(() => import("./app/component/F&O/index"));
const Yearly = lazy(() => import("./app/component/Yearly"));
const Monthly = lazy(() => import("./app/component/Monthly"));
const Weekly = lazy(() => import("./app/component/Weekly"));
const Daily = lazy(() => import("./app/component/Daily"));
const Notification = lazy(() => import("./app/component/Notification"));

function RedirectionWrapper({ to }) {
  const queryString = window.location.search;
  if (queryString) {
    return <Navigate to={`${to}${queryString}`} />;
  }
  return <Navigate to={to} />;
}

const routes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <MatxLayout /> : <RedirectionWrapper to="/login" />,
    children: [
      {
        index: true,
        element: <RedirectionWrapper to="/dashboard/" />,
      },
      {
        path: "/dashboard/",
        element: <PageType />,
      },
      {
        path: "/blog/",
        element: <Blog />,
      },
      {
        path: "/broker/",
        element: <Broker />,
      },
      {
        path: "/learning",
        element: <Learning />,
      },
      {
        path: "/intraday",
        element: <Intraday />,
      },
      {
        path: "/fostocks",
        element: <FoStocks />,
      },
      {
        path: "/yearly",
        element: <Yearly />,
      },
      {
        path: "/monthly",
        element: <Monthly />,
      },
      {
        path: "/weekly",
        element: <Weekly />,
      },
      {
        path: "/daily",
        element: <Daily />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/login",
    element: !isLoggedIn ? (
      <AuthLogin />
    ) : (
      <RedirectionWrapper to="/dashboard/" />
    ),
  },
  { path: "*", element: <NotFound /> },
];

export default function Routes(props) {
  const { isLoggedIn } = props;
  return useRoutes(routes(isLoggedIn));
}
