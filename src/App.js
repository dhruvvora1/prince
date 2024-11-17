import React from "react";
import "../src/assets/css/style.css";
import "./index.scss";
// import Loader from "./app/layout/loader/loader";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setToken } from "./app/store/slice/auth";
import Loader from "./app/layout/loader/loader";
import OpenAI from "openai";

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

    


useEffect(() => {
  const apiKey= "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"

  if (!apiKey) {
    console.error("OpenAI API key is missing!");
    return;
  }

  // Use the OpenAI class to create a client instance
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  async function getCompletion() {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "write a 20-word story about an employee" }],
      });

      console.log(response.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching completion:", error);
    }
  }

  getCompletion();
}, []);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_HOME_PAGE_URL}>
        <React.Suspense fallback={<Loader />}>
          <Routes isLoggedIn={isLoggedin} />
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
