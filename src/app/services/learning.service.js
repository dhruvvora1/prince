import serverCall from "../../serverCall";

const Create = async (create) => {
  const response = await serverCall.post(`/learning`, create);
  return response;
};
const GetList = (page, size) => {
  const response = serverCall.get(`/learning/all?page=${page}&size=${size}`);
  return response;
};

const GetListByID = (id) => {
  const response = serverCall.get(`/learning?id=${id}`);
  return response;
};

const Update = (id) => {
  const response = serverCall.get(`/learning?id=${id}`);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/learning?id=${id}`);
  return response;
};

const learningSevice = {
  Create,
  Delete,
  GetList,
  GetListByID,
  Update
};

export default learningSevice;
