/* eslint-disable  no-unused-vars */
import React from "react";
import { Card, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { AddPage, DeleteImages } from "./modalPagetype";
import pageTypeSevice from "../../services/pageType.service";
import { useFormik } from "formik";
import * as yup from "yup";
import withLoader from "../../layout/loader/withLoader";

const PageType = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState("");

  const getAllPageList = async (list) => {
    const response = await pageTypeSevice.getAllPage(list);
    setData(response.data.data);
    setTotalPages(response.data.data.length);
  };

  const initialValue = {
    pageName: "",
    file: null,
  };
  const schema = yup.object().shape({
    pageName: yup.string().required("Please Enter PageName"),
    file: yup.mixed().required("Please Upload File"),
  });

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      try {
        setLoader(true);
        const { pageName, file } = values;
        const editData = new FormData();
        editData.append("pageName", pageName);
        editData.append("file", file);
        await pageTypeSevice.createPage(editData);
        getAllPageList();
        handleClose();
        setLoader(false);
        action.resetForm();
      } catch (e) {
        console.log("add page error", e);
      }
    } else {
      try {
        setLoader(true);
        const id = values.id;
        const { pageName, file } = values;
        const editData = new FormData();
        editData.append("id", id);
        editData.append("pageName", pageName);
        if (file) {
          editData.append("file", file);
        }
        await pageTypeSevice.UpdatePage(editData);
        getAllPageList();
        handleClose();
        setLoader(false);
        action.resetForm();
      } catch (e) {
        console.log("update page error", e);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    getAllPageList();
  }, []);

  const handleOpen = async (id) => {
    setOpen(true);
    if (id !== "") {
      setUpdate(true);
      const response = await pageTypeSevice.getPageUID(id);
      const result = response.data;
      formik.setValues({
        ...formik.values,
        id: result.id,
        pageName: result.pageName,
        file: result.image,
      });
      setImage(result.image);
    } else {
      setUpdate(false);
      formik.setFieldValue("pageName", "");
      formik.setFieldValue("file", "");
    }
  };

  return (
    <>
      <div className="page-header2"></div>
      <div className="d-flex">
        <div className="mb-4 main-content-label  tx-24 mg-b-5">
          All Page type
        </div>
        <div className="ms-auto">
          <button
            className="text-white btn btn-primary ms-auto mb-4 me-1"
            onClick={() => handleOpen("")}
            type="button"
          >
            <i className="fas fa-plus"></i>
            &nbsp; Add
          </button>
          <AddPage
            show={open}
            onHide={handleClose}
            update={update}
            formik={formik}
            image={image}
            loader={loader}
          />
        </div>
      </div>
      <div className="row">
        {data.map((card) => (
          <Col key={card.id} sm={12} md={6} lg={6} xl={3}>
            <Card className="custom-card pointer" onClick={() => {}}>
              <img
                src={card.image}
                className="img-responsive2 pos-relative"
                alt="img"
              />
              <Card.Body className="pos-absolute card-body2">
                <div className="card-order bg-000">
                  <label className="main-content-label font-weight-bold mb-0 pointer">
                    {card.pageName}
                  </label>
                </div>
              </Card.Body>
            </Card>
            <button
              style={{
                position: "absolute",
                right: "65px",
                top: "155px",
              }}
              className="text-white ms-3 mb-2 btn btn-primary"
              onClick={() => handleOpen(card.id)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <DeleteImages
              card={card.id}
              cardName={card.pageName}
              getAllPage={getAllPageList}
            />
          </Col>
        ))}
      </div>
    </>
  );
};

export default withLoader(PageType);
