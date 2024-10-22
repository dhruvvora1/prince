import axios from "axios";
import config from "./config";

const BASE_URL = config.baseApi;

const customAxios = axios.create({
  baseURL: BASE_URL,
});

const requestHandler = (request) => {

  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    request.headers.Authorization = `${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401 || response.status === 403) {
    // window.location = "/";
    // localStorage.removeItem("token");
  }
  return response;
};

const requestErrorHandler = (error) => {
  return Promise.reject(error);
};

const responseErrorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      // localStorage.removeItem("token");
      // localStorage.clear();
      // window.location = "/";
      // return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  responseErrorHandler
);

export default customAxios;
