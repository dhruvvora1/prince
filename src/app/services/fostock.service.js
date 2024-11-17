import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/fostocks/`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/fostocks/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/fostocks/${id}`);
  return response;
};

const Update = (data) => {
  const response = serverCall.post(`/fostocks/update`, data);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/fostocks/${id}`);
  return response;
};

const FOStockSevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default FOStockSevice;
