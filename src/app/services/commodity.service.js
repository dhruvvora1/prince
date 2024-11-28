import serverCall from "../../serverCall";

const create = (create) => {
  const response = serverCall.post(`/commodity/`, create);
  return response;
};

const Update = (create) => {
  const response = serverCall.post(`/commodity/update`, create);
  return response;
};

const getAll = (pageNumber, pagesize) => {
  const response = serverCall.get(
    `commodity/all?page=${pageNumber}&size=${pagesize}`
  );
  return response;
};

const getByID = (id) => {
  const response = serverCall.get(`/commodity/${id}`);
  return response;
};

const Delete = (id) => {
  const response = serverCall.delete(`/commodity/${id}`);
  return response;
};

const commoditySevice = {
  create,
  Delete,
  getAll,
  Update,
  getByID,
};

export default commoditySevice;
