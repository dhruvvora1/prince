import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/monthly/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/monthly/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/monthly/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/monthly/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/monthly/${id}`);
  return response;
};

const Monthlyevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default Monthlyevice;
