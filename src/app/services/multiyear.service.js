import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/multiyear/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/multiyear/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/multiyear/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/multiyear/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/multiyear/${id}`);
  return response;
};

const Multiyearevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default Multiyearevice;
