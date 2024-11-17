import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/intraday/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/intraday/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/intraday/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/intraday/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/intraday/${id}`);
  return response;
};

const IntradaySevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default IntradaySevice;
