import React from "react";
import "../src/assets/css/style.css";
import "./index.scss";
// import Loader from "./app/layout/loader/loader";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setToken } from "./app/store/slice/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(setToken(localStorage.getItem("accessToken")));
    }
    if (localStorage.getItem("isLoggedIn")) {
      dispatch(setLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn"))));
    }
  }, [dispatch]);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const isLoggedin = isLoggedIn || localStorage.getItem("accessToken");
  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_HOME_PAGE_URL}>
        <React.Suspense>
          <Routes isLoggedIn={isLoggedin} />
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
