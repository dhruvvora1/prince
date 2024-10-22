import serverCall from "../../serverCall";

const getPageList = (pageNumber, pageType, pageSize) => {
  // const response = serverCall.get(
  //   `/page?pageNumber=${pageNumber}&pageSize=${pageSize}&searchText=${pageType}`
  // );
  // return response;
};

const createPage = (data) => {
  // const response = serverCall.post(`/page/create`, data);
  // return response;
};

const updatePage = (data) => {
  // const response = serverCall.post(`/page/update`, data);
  // return response;
};

const deletePage = (id) => {
  // const response = serverCall.delete(`/page/delete?id=${id}`);
  // return response;
};

const getDetailsById = (id) => {
  // const response = serverCall.get(`/page/byId?id=${id}`);
  // return response;
};

const DeletImage = (imageUrl, pageId) => {
  // const response = serverCall.delete(
  //   `/page/delete/image?imageUrl=${imageUrl}&pageId=${pageId}`
  // );
  // return response;
};

const PageService = {
  getPageList,
  createPage,
  getDetailsById,
  updatePage,
  deletePage,
  DeletImage,
};

export default PageService;
