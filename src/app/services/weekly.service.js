import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/weekly/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/weekly/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/weekly/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/weekly/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/weekly/${id}`);
  return response;
};

const Weeklyevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default Weeklyevice;
