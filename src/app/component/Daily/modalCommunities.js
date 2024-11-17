import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import Dailylyevice from "../../services/daily.service";

export function AddPage(props) {
  const {formik} = props
  const [selectedimages, setSelectedimages] = useState([]);
  const showFileToUpload = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("file", selectedFile);
    setSelectedimages([selectedFile]);
    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedimages((previousImages) => [imageUrl]);
  };

  useEffect(() => {
    if(props.update && selectedimages.length === 0 && props.formik.values.file){
      setSelectedimages([props.formik.values.file])
    }
  }, [formik])

  const handleClose = () =>{
    props.onHide()
    formik.resetForm();
    setSelectedimages([])
  }

  return (
    <>
      <Modal
        {...props}
        size="large"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <div className="col-122">
            <div className="card custom-card">
              <form onSubmit={formik.handleSubmit}>
                <h4>
                  {props.update ? "Update Intraday" : "Add Intraday"}
                </h4>
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
                      Title: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.title && formik.touched.title ? (
                      <p className="text-start error">
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
                      Description: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.description && formik.touched.description ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.description}
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
                      level: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="level"
                      placeholder="Level"
                      value={formik.values.level}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.name}
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
                      Pattern: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="pattern"
                      placeholder="Pattern"
                      value={formik.values.pattern}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.name}
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
                      Date: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      placeholder="Pattern"
                      value={moment(formik.values.date).format("YYYY-MM-DD")}
                      onChange={props.handleChangeDate}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </Form.Group>
                </div>
                <Form.Group className="position-relative col-12">
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={(r) => showFileToUpload(r)}
                    style={{ marginTop: "15px" }}
                  />
                  {props.update ? (
                    <>
                      {props.photo ? (
                        <>
                          <img
                            src={props.photo}
                            className="img-responsive2 mt-3 pos-relative"
                            alt="Image"
                          />
                        </>
                      ) : (
                        <>
                          {selectedimages &&
                            selectedimages.map((image, index) => {
                              return (
                                <div key={image} className="image">
                                  <img
                                    src={image}
                                    className="img-responsive2 mt-3"
                                    alt="upload"
                                  />
                                </div>
                              );
                            })}
                        </>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  {formik.errors.file && formik.touched.file ? (
                    <p className="text-start error">
                      {" "}
                      {formik.errors.file}
                    </p>
                  ) : null}
                </Form.Group>

                <div>
                  <>
                    {" "}
                    <Button
                      type="submit"
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "15px",
                        marginTop: "15px",
                      }}
                    >
                      {props.loading ? (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
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
                    </Button>
                  </>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function DeleteImagesModal(props) {
  const { card } = props;
  const DeleteImages = async () => {
    await Dailylyevice.Delete(card);
    props.getAllPage();
    props.onHide();
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
        <Modal.Body className="text-center">
          <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-danger  mg-t-20 "></i>

          <h4 className="tx-danger tx-semibold mg-b-20">Delete!</h4>
          <p className="mg-b-20 mg-x-20 text-lowercase">
            are you sure want to delete {props.cardName} !
          </p>

          <Button
            type="button"
            onClick={() => DeleteImages(card)}
            variant="danger"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
