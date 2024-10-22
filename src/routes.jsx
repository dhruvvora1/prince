import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLogin from "./app/authentication/login";
import MatxLayout from "./app/component/maxLayout";
import NotFound from "./app/layout/sessions/NotFound";
// import { Suspense } from "react";
// import Loader from "./app/layout/loader/loader";

import PageType from "./app/component/dashboard";
import Comminities from "./app/component/blog/index";
import Page from "./app/component/page/index";
import UserTable from "./app/component/blog/userTable";
import DetailsTable from "./app/component/page/pageDetailTable";
import FeedDetailPage from "./app/component/page/feedpage";
import Blog from "./app/component/blog/index";
import Learning from "./app/component/learning";
import Broker from "./app/component/broker";

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
        path: "/page/",
        element: <Page />,
      },
      {
        path: "/pagedeatils/:id",
        element: <DetailsTable />,
      },
      {
        path: "/feeddetail/:id",
        element: <FeedDetailPage />,
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
