import serverCall from "../../serverCall";

const createPage = (form) => {
  // const response = serverCall.post(`/blog`, form);
  // return response;
};

const UpdatePage = (form) => {
  // const response = serverCall.post(`/pagetype/admin/update`, form);
  // return response;
};

const deletePage = (card) => {
  // const response = serverCall.delete(`/pagetype/admin/delete?id=${card}`);
  // return response;
};

const getAllPage = (form) => {
  // const response = serverCall.get(`/blog`, form);
  // return response;
};

const getPageByID = (id) => {
  // const response = serverCall.get(`/pagetype/getById/${id}`);
  // return response;
};

const getPageUID = (id) => {
  // const response = serverCall.get(`/pagetype/byId?id=${id}`);
  // return response;
};

const pageTypeSevice = {
  createPage,
  deletePage,
  getAllPage,
  getPageByID,
  UpdatePage,
  getPageUID,
};

export default pageTypeSevice;
