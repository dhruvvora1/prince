/* eslint-disable  no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { AddPage, DeleteImagesModal } from "./modalCommunities";
import { useFormik } from "formik";
import withLoader from "../../layout/loader/withLoader";
import UserTable from "./userTable";
import * as yup from 'yup';
import mutualSevice from "../../services/mutualfund.service";

const Mutualfund = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(1)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const [update, setUpdate] = useState("");
  const [loader, setLoader] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [image, setImage] = useState("");

  const getAllPage = async () => {
    const response = await mutualSevice.getAll(
      page+1,
      10
    );
    setData(response.data.apiresponse.data.mutualFund);
  };

  useEffect(() => {
    getAllPage();
  }, []);

  const initialValue = {
    heading:"",
    description:"",
    link: "",
    file: null,
  };

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      try {
        const { file, heading, link, description } = values;
        const editdata = new FormData();
        editdata.append("photo", file);
        editdata.append("description", description);
        editdata.append("heading", heading);
        editdata.append("link", link);
        setLoader(true);
        await mutualSevice.create(editdata);
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
        editData.append("description", description);
        editData.append("link", link);
        if (file) {
          editData.append("photo", file);
        }
        setLoader(true);
        await mutualSevice.Update(editData);
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
    heading: yup.string().required("Heading is required")
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
      const response = await mutualSevice.getByID(id);
      const result = response.data.apiresponse.data;
      formik.setFieldValue("id", result.id);
      formik.setFieldValue("heading", result.heading);
      formik.setFieldValue("file", result.photo);
      formik.setFieldValue("description", result.description);
      formik.setFieldValue("link", result.link);
      setImage(result.image);
    } else {
      setUpdate(false);
      formik.setFieldValue("heading", "");
      formik.setFieldValue("description", "");
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
      name: <b>Description</b>,
      selector: (row) => row.description,
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
        <div className="mb-4 main-content-label tx-24">All Mutual Fund</div>
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
          image={image}
          loading={loader}
        />
      </div>
      <div className="row">
        <UserTable name="mutual fund" columns={columns} data={data} />
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

export default withLoader(Mutualfund);
