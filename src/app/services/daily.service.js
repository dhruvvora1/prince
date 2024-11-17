import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/daily/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/daily/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/daily/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/daily/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/daily/${id}`);
  return response;
};

const Dailylyevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default Dailylyevice;
