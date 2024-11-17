/* eslint-disable  no-unused-vars */
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import comminitiesSevice from "../../services/blog.service";
import { AddPage, DeleteImages, DeleteImagesModal } from "./modalCommunities";
import Select from "react-select";
import pageTypeSevice from "../../services/Dashboard.service";
import { useFormik } from "formik";
import * as yup from "yup";
import withLoader from "../../layout/loader/withLoader";
import UserTable from "./userTable";
import moment from "moment";
import blogSevice from "../../services/blog.service";

const Blog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [listof, setListof] = useState([]);
  const [idListOfData, setIdListOfData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const [update, setUpdate] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectedType2, setSelectedType2] = useState("");
  const [image, setImage] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const getAllPage = async () => {
    const response = await blogSevice.getAll(page + 1, 10);
    setData(response.data.apiresponse.data.blog);
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

  const selectedOption = options.find(
    (option) => option.value === Object(idListOfData)
  );

  const initialValue = {
    heading: "",
    description: "",
    link: "",
    file: null,
  };

  const schema = yup.object().shape({
    heading: yup.string().required("Heading is required"),
    description: yup.string().required("Description is required"),
    link: yup.string().required("Link is required")
  });

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      try {
        const { file, heading, link, description } = values;
        const editdata = new FormData();
        editdata.append("photo", file);
        editdata.append("heading", heading);
        editdata.append("description", description);
        editdata.append("link", link);
        setLoader(true);
        await blogSevice.create(editdata);
        setLoader(false);
        getAllPage();
        handleClose();
        action.resetForm();
      } catch (e) {
        console.log("add Communities error", e);
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
        await blogSevice.Update(editData);
        setLoader(false);
        handleClose();
        getAllPage();
        action.resetForm();
      } catch (e) {
        console.log("update page error", e);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema:schema,
    onSubmit: handleFormSubmit,
  });

  const handleOpen = async (id) => {
    setOpen(true);
    if (id !== "") {
      setUpdate(true);
      const response = await blogSevice.getByID(id);
      const result = response.data.apiresponse.data;
      formik.setFieldValue("id", result.id);
      formik.setFieldValue("heading", result.heading);
      formik.setFieldValue("description", result.description);
      formik.setFieldValue("file", result.photo);
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
      selector: (row) => (
        <img
          src={row.photo}
          alt=""
          style={{ objectFit: "cover", margin: 5 }}
          width="100"
          height="80"
        />
      ),
      sortable: true,
    },
    {
      name: <b>Action</b>,
      selector: (row) => (
        <>
          <div>
            <Button className="btn-primary" onClick={() => handleOpen(row.id)}>
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              className="ms-2 btn-danger"
              onClick={() => DeleteBlog(row.id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </>
      ),
      sortable: true,
    },
  ];

  return (
    <>
      <div className="page-header2"></div>
      <div className="d-flex">
        <div className="mb-4 main-content-label tx-24">All Blog</div>
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
          selectedOption2={selectedOption}
          loading={loader}
        />
      </div>
      <div className="row">
        <UserTable name="blog" columns={columns} data={data} />
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

export default withLoader(Blog);
