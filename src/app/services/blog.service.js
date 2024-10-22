import serverCall from "../../serverCall";

const create = (create) => {
  const response = serverCall.post(`/blog`, create);
  return response;
};

const Update = (create) => {
  // const response = serverCall.post(`/communities/admin/update`, create);
  // return response;
};

const getAll = (pageNumber, pagesize) => {
  const response = serverCall.get(
    `blog/all?page=${pageNumber}&size=${pagesize}`
  );
  return response;
};

const getByID = (id) => {
  const response = serverCall.get(`/blog/${id}`);
  return response;
};

const Delete = (id) => {
  // const response = serverCall.delete(`/communities/admin/delete?id=${id}`);
  // return response;
};

const blogSevice = {
  create,
  Delete,
  getAll,
  Update,
  getByID,
};

export default blogSevice;
