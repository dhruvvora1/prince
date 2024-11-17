import { get } from "lodash";
import serverCall from "../../serverCall";

const signUp = (userSignInRequest) => {
  const { email, password } = userSignInRequest;
  return serverCall
    .post(`/auth/admin/login?email=${email}&password=${password}`)
    .then((response) => {
      const data = get(response, "data.apiresponse", null);
      if (data) {
        localStorage.setItem("token", get(data, "data.token", null));
        localStorage.setItem("email", get(data, "data.email", null));
        localStorage.setItem("id", get(data, "data.id", null));
      }
      return data;
    });
};

const Dashboard = () => {
  const response = serverCall.get(`/dashboard/total`);
  return response;
};

const AuthenticationService = {
  signUp,
  Dashboard
};

export default AuthenticationService;
