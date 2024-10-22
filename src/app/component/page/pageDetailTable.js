import React from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import DataTableExtensions from "react-data-table-component-extensions";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import PageService from "../../services/page.service";
import { useEffect } from "react";
import { useState } from "react";
import * as yup from "yup";
// import feedSevice from "../../services/feed.service";
import { useFormik } from "formik";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import { DeleteImagesModal } from "./modalPages";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";

const DetailsTable = () => {
  const id = useParams();
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState([]);
  const [singleImg, setSingleImg] = useState("");
  const idGet = localStorage.getItem("id");
  const NewId = itemData.createdBy;
  const IdMatch = idGet === NewId;

  const columns = [
    {
      name: <b>NAME</b>,
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: <b>REG. DATE</b>,
      selector: (row) => moment(row.createdAt).format("YYYY-MM-DD"),
      sortable: true,
    },
    {
      name: <b>VIEWERS COUNT</b>,
      selector: (row) => row.viewersCount,
      sortable: true,
    },
    {
      name: <b>LIKED COUNT</b>,
      selector: (row) => row.likedCount,
      sortable: true,
    },
    {
      name: <b>ACTION</b>,
      selector: (row) => (
        <div className="justify-content-center">
          <Link to={`/feeddetail/${row.id}`}>
            <button className="btn btn-primary btn-sm">
              <i className="fe fe-eye"></i>
            </button>
          </Link>

          <button
            className="btn btn-primary btn-sm ms-2"
            onClick={() => {
              setUserId(row.id);
              setModalShow3(true);
            }}
          >
            <i className="fe fe-trash"></i>
          </button>
          <DeleteImagesModal
            show={modalShow3}
            id={userId}
            name={row.name}
            getFeedList={getFeedList}
            onHide={() => setModalShow3(false)}
          />
        </div>
      ),
    },
  ];

  const getAllDetails = async () => {
    const response = await PageService.getDetailsById(id.id);
    setItemData(response.data);
    setImage(response.data.imageList.map((res) => res));
    setSingleImg(response.data.image);
  };

  const getFeedList = async () => {
    // const response = await feedSevice.GetList(id.id);
    // setData(response.data.data);
  };
  useEffect(() => {
    getAllDetails();
    getFeedList();
  }, []);

  const tableData = {
    columns,
    data,
  };
  let [img, setImg] = useState("");

  let click = (id) => {
    if (id === "image_2") {
      setImg(image[1]);
    } else if (id === "image_1") {
      setImg(image[0]);
    } else if (id === "image_3") {
      setImg(image[2]);
    } else if (id === "image_4") {
      setImg(image[3]);
    }
  };

  const date = moment(itemData.created).format("YYYY-MM-DD");

  return (
    <>
      <div className="page-header2" />

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card productdesc">
            <Card.Body className="h-100">
              <Row>
                <Col xl={image.length !== 0 ? 6 : 4} lg={12} md={12}>
                  <Row>
                    {(image !== "" &&
                      image !== undefined &&
                      image !== null &&
                      image.length > 0) ||
                    image.length !== 0 ? (
                      <div className="col-2">
                        <div className="clearfix carousel-slider">
                          <div className="carousel slide">
                            <div className="carousel-inner">
                              <div className="img-responsive4">
                                <div className="thumb my-2">
                                  {image[0] ? (
                                    <div className="thumb my-2">
                                      <img
                                        src={image[0]}
                                        alt="img"
                                        onClick={() => {
                                          click("image_1");
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {image[1] ? (
                                    <div
                                      data-bs-slide-to="1"
                                      className="thumb my-2"
                                    >
                                      <img
                                        src={image[1]}
                                        alt="img"
                                        onClick={() => {
                                          click("image_2");
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {image[2] ? (
                                    <div
                                      data-bs-slide-to="2"
                                      className="thumb my-2"
                                    >
                                      <img
                                        src={image[2]}
                                        alt="img"
                                        onClick={() => {
                                          click("image_3");
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {image[3] ? (
                                    <div
                                      data-bs-slide-to="3"
                                      className="thumb my-2"
                                    >
                                      <img
                                        src={image[3]}
                                        alt="img"
                                        onClick={() => {
                                          click("image_4");
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div>
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => setModalShow2(true)}
                                  >
                                    <i className="fas fa-caret-down"></i> &nbsp;
                                    More
                                  </button>

                                  <ImageList
                                    show={modalShow2}
                                    images={image}
                                    onHide={() => setModalShow2(false)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div
                      className={
                        image.length !== 0
                          ? "col-md-7 offset-md-1 col-sm-9 col-8"
                          : ""
                      }
                    >
                      <div className="product-carousel">
                        <div
                          id="carousel"
                          className="carousel slide"
                          data-bs-ride="false"
                        >
                          <div className="carousel-inner">
                            <div>
                              {(image !== "" &&
                                image !== undefined &&
                                image !== null &&
                                image.length > 0) ||
                              image.length !== 0 ? (
                                <img
                                  src={img ? img : image[0]}
                                  alt="img"
                                  height="400px"
                                  width="400px"
                                  className="rounded-5"
                                />
                              ) : (
                                <img
                                  src={singleImg}
                                  alt="img"
                                  height="400px"
                                  width="600px"
                                  className="rounded-5"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col xl={image.length !== 0 ? 6 : 8} lg={12} md={12}>
                  <div className="item-card-desc d-md-flex mb-3">
                    <Link to="#">
                      <span className="text-primary fs-18 me-2">
                        <i className="fe fe-calendar"></i>
                      </span>
                    </Link>
                    <span className="my-auto text-dark">{date}</span>
                    <Link to="#" className="d-flex me-4"></Link>
                    <Link to="#">
                      <span className="text-primary fs-18 me-2">
                        <i className="fe fe-layout"></i>
                      </span>
                    </Link>
                    <span className="my-auto text-dark">{itemData.name}</span>
                  </div>
                  <Link to="#" className="mt-4">
                    <h5 className="font-weight-semibold">{itemData.website}</h5>
                  </Link>
                  <p>{itemData.description}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div>
        {IdMatch ? (
          <button
            className="text-white ms-3 mb-2 btn btn-primary ms-auto d-block"
            onClick={() => setModalShow(true)}
          >
            <i className="fas fa-plus"></i>
            &nbsp; Add Feed
          </button>
        ) : (
          ""
        )}
        <AddPage
          show={modalShow}
          id={id.id}
          getFeedList={getFeedList}
          onHide={() => setModalShow(false)}
        />
      </div>
      <Card className="custom-card overflow-hidden">
        <Card.Body className="pt-3 pl-3 pr-3">
          <div>
            <h6 className="main-content-label mb-1 fs-20">all feed detail</h6>
          </div>
          <div>
            <DataTableExtensions {...tableData}>
              <DataTable
                columns={columns}
                data={data}
                noHeader
                responsive={true}
                defaultSortField="id"
                defaultSortAsc={false}
                striped={true}
                center={true}
                persistTableHead
                pagination
                highlightOnHover
              />
            </DataTableExtensions>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailsTable;

export function AddPage(props) {
  const [loader, setLoader] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const initialValue = {
    name: "",
    title: "",
    file: null,
    description: "",
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    title: yup.string().required(),
    file: yup.mixed().required(),
    description: yup.string().required(),
  });

  const addFeedPage = async (values, action) => {
    try {
      setLoader(true);
      const { title, name, file, description } = values;
      const editdata = new FormData();
      editdata.append("pageId", props.id);
      editdata.append("name", name);
      editdata.append("title", title);
      editdata.append("file", file);
      editdata.append("description", description);
      // await feedSevice.feedCreate(editdata, props.id);
      props.onHide();
      setLoader(false);
      props.getFeedList();
      action.resetForm();
    } catch (e) {
      console.log("Add feed Error", e);
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: addFeedPage,
  });

  return (
    <>
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <div className="col-122">
            <div className="card custom-card">
              <form onSubmit={formik.handleSubmit}>
                <h4>ADD PAGE</h4>
                <div className="col-12">
                  <Form.Group
                    controlid="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label
                      style={{
                        textAlign: "start",
                        color: "#000",
                        marginTop: "15px",
                      }}
                    >
                      Feed Name: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Feed Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p className="text-start error"> {formik.errors.name}</p>
                    ) : null}
                  </Form.Group>
                </div>

                <div className="col-12">
                  <Form.Group
                    controlid="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label
                      style={{
                        textAlign: "start",
                        color: "#000",
                        marginTop: "15px",
                      }}
                    >
                      Title : <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.title && formik.touched.title ? (
                      <p classtitle="text-start error">
                        {" "}
                        {formik.errors.title}
                      </p>
                    ) : null}
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group
                    controlid="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label
                      style={{
                        textAlign: "start",
                        color: "#000",
                        marginTop: "15px",
                      }}
                    >
                      Description : <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.description && formik.touched.description ? (
                      <p classdescription="text-start error">
                        {" "}
                        {formik.errors.description}
                      </p>
                    ) : null}
                  </Form.Group>
                </div>
                <Form.Group className="position-relative col-12">
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={(event) =>
                      formik.setFieldValue("file", event.currentTarget.files[0])
                    }
                    style={{ marginTop: "15px" }}
                    isInvalid={formik.touched.file && formik.errors.file}
                  />
                  {formik.errors.file && formik.touched.file ? (
                    <p className="text-start error"> {formik.errors.file}</p>
                  ) : null}
                </Form.Group>

                <div>
                  <button
                    type="submit"
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "15px",
                      marginTop: "15px",
                    }}
                    className="btn btn-primary"
                  >
                    {loader ? (
                      <>
                        {" "}
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <CircularProgress
                            size={30}
                            style={{ textAlign: "center", color: "#fff" }}
                          />
                        </div>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function ImageList(props) {
  const { images } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const renderGallery = () => {
    const colsPerRow = 2;
    const rows = Math.ceil(images.length / colsPerRow);
    const gallery = [];

    for (let row = 0; row < rows; row++) {
      const cols = [];
      for (let col = 0; col < colsPerRow; col++) {
        const index = row * colsPerRow + col;
        if (index < images.length) {
          cols.push(
            <div
              key={index}
              className="thumbnail"
              onClick={() => openLightbox(index)}
              style={{ flex: 1, marginLeft: "15px" }}
            >
              <img
                src={images[index]}
                className="img-responsive2 mt-3"
                alt={`Image ${index + 1}`}
              />
            </div>
          );
        }
      }
      gallery.push(
        <div key={row} className="d-flex">
          {cols}
        </div>
      );
    }

    return <div className="image-gallery">{gallery}</div>;
  };

  return (
    <>
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center me-3 p-1">
          <div className="col-12">
            <h4>
              <strong>IMAGE LIST</strong>
            </h4>
            <div className="card custom-card">
              {renderGallery()}
              {isOpen && <Lightbox mainSrc={images[photoIndex]} />}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
