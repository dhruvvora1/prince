import serverCall from "../../serverCall";

const createBroker = (create) => {
  const response = serverCall.post(`/broker`, create);
  return response;
};

const UpdateBroker = (create) => {
  // const response = serverCall.post(`/communities/admin/update`, create);
  // return response;
};

const getAllBroker = (pageNumber, pagesize) => {
  const response = serverCall.get(
    `broker/all?page=${pageNumber}&size=${pagesize}`
  );
  return response;
};

const getBrokerByID = (id) => {
  const response = serverCall.get(`/broker=${id}`);
  return response;
};

const deleteBroker = (id) => {
  // const response = serverCall.delete(`/communities/admin/delete?id=${id}`);
  // return response;
};

const BrokerSevice = {
  createBroker,
  deleteBroker,
  getAllBroker,
  UpdateBroker,
  getBrokerByID,
};

export default BrokerSevice;
