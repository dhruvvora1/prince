import serverCall from "../../serverCall";

const create = (create) => {
  const response = serverCall.post(`/mutualfund/`, create);
  return response;
};

const Update = (create) => {
  const response = serverCall.post(`/mutualfund/update`, create);
  return response;
};

const getAll = (pageNumber, pagesize) => {
  const response = serverCall.get(
    `mutualfund/all?page=${pageNumber}&size=${pagesize}`
  );
  return response;
};

const getByID = (id) => {
  const response = serverCall.get(`/mutualfund/${id}`);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/mutualfund/${id}`);
  return response;
};

const mutualSevice = {
  create,
  Delete,
  getAll,
  Update,
  getByID,
};

export default mutualSevice;
