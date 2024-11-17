/* eslint-disable  no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { AddPage, DeleteImages, DeleteImagesModal } from "./modalCommunities";
import { useFormik } from "formik";
import withLoader from "../../layout/loader/withLoader";
import UserTable from "./userTable";
import * as yup from 'yup';
import BrokerSevice from "../../services/broker.service";

const Broker = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(1)
  const [listof, setListof] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [idListOfData, setIdListOfData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const [update, setUpdate] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectedType2, setSelectedType2] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [image, setImage] = useState("");

  const getAllPage = async () => {
    const response = await BrokerSevice.getAllBroker(
      page+1,
      10
    );
    setData(response.data.apiresponse.data.broker);
  };

  useEffect(() => {
    getAllPage();
  }, []);

  const options = [
    { value: " ", label: "All" },
    ...listof.map((item, index) => ({
      value: idListOfData[index],
      label: item,
    })),
  ];

  const options2 = [
    ...listof.map((item, index) => ({
      value: idListOfData[index],
      label: item,
    })),
  ];

  const initialValue = {
    heading:"",
    link: "",
    file: null,
  };

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      try {
        const { file, heading, link, description } = values;
        const editdata = new FormData();
        editdata.append("photo", file);
        editdata.append("heading", heading);
        editdata.append("link", link);
        setLoader(true);
        await BrokerSevice.createBroker(editdata);
        setLoader(false);
        getAllPage();
        handleClose();
        action.resetForm();
      } catch (e) {
        console.log("error", e);
      }
    } else {
      try {
        const id = values.id;
        const { file, heading, link, description } = values;
        const editData = new FormData();
        editData.append("id", id);
        editData.append("heading", heading);
        editData.append("link", link);
        if (file) {
          editData.append("photo", file);
        }
        setLoader(true);
        await BrokerSevice.UpdateBroker(editData);
        setLoader(false);
        handleClose();
        getAllPage();
        action.resetForm();
      } catch (e) {
        console.log("update error", e);
      }
    }
  };
  const schema = yup.object().shape({
    heading: yup.string().required("Heading is required"),
    link: yup.string().required("Link is required")
  });
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema:schema,
    onSubmit: handleFormSubmit,
  });

  const handleOpen = async (id) => {
    setOpen(true);
    if (id !== "") {
      setUpdate(true);
      const response = await BrokerSevice.getBrokerByID(id);
      const result = response.data.apiresponse.data;
      formik.setFieldValue("id", result.id);
      formik.setFieldValue("heading", result.heading);
      formik.setFieldValue("file", result.photo);
      formik.setFieldValue("link", result.link);
      setImage(result.image);
    } else {
      setUpdate(false);
      formik.setFieldValue("heading", "");
      formik.setFieldValue("link", "");
      formik.setFieldValue("file", "");
    }
  };

  const DeleteBlog = (id) => {
    setOpenDelete(!openDelete);
    setDeleteId(id);
  };

  const columns = [
    {
      name: <b>Heading</b>,
      selector: (row) => row.heading,
      sortable: true,
    },
    {
      name: <b>Link</b>,
      selector: (row) => row.link,
      sortable: true,
    },
    {
      name: <b>Photo</b>,
      selector: (row) => <img src={row.photo} alt="" style={{objectFit:"cover", margin:5}} width="100" height="80" />,
      sortable: true,
    },
    {
      name: <b>Action</b>,
      selector: (row) => (<>
        <div>
          <Button className="btn-primary" onClick={() => handleOpen(row.id)}>
          <i className="fas fa-edit"></i>
          </Button>
          <Button className="ms-2 btn-danger" onClick={() => DeleteBlog(row.id)}>
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </>),
      sortable: true,
    },
  ];

  return (
    <>
      <div className="page-header2"></div>
      <div className="d-flex">
        <div className="mb-4 main-content-label tx-24">All Broker</div>
        <div className="ms-auto me-4 d-flex">
          <button
            className="text-white btn btn-primary ms-auto mb-4"
            onClick={() => handleOpen("")}
            type="button"
          >
            <i className="fas fa-plus"></i>
            &nbsp; Add
          </button>
        </div>
        <AddPage
          show={open}
          onHide={handleClose}
          update={update}
          formik={formik}
          options={options2}
          image={image}
          loading={loader}
        />
      </div>
      <div className="row">
        <UserTable name="broker" columns={columns} data={data} />
      </div>
      <DeleteImagesModal
        show={openDelete}
        onHide={handleCloseDelete}
        card={deleteId}
        getAllPage={getAllPage}
      />
    </>
  );
};

export default withLoader(Broker);
