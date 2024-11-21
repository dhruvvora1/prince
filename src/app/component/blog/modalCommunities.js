import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import blogSevice from "../../services/blog.service";

export function AddPage(props) {
  const {formik} = props
  const [selectedimages, setSelectedimages] = useState([]);


  useEffect(() => {
    if(props.update && selectedimages.length === 0 && props.formik.values.file){
      setSelectedimages([props.formik.values.file])
    }
  }, [formik])
  

  const showFileToUpload = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("file", selectedFile);
    setSelectedimages([selectedFile]);
    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedimages((previousImages) => [imageUrl]);
  };

  const handleClose = () =>{
    props.onHide()
    formik.resetForm();
    setSelectedimages([])
  }

  console.log(props, selectedimages,"selected images")

  return (
    <>
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <div className="col-122">
            <div className="card custom-card">
              <form onSubmit={formik.handleSubmit}>
                <h4>
                  {props.update ? "Update Blog" : "Add Blog"}
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
                      Heading: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="heading"
                      placeholder="Heading"
                      value={formik.values.heading}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.heading && formik.touched.heading ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.heading}
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
                      Link: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="link"
                      placeholder="Link"
                      value={formik.values.link}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.link && formik.touched.link ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.link}
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
                      {props.file ? (
                        <>
                          <img
                            src={props.file}
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
    await blogSevice.Delete(card);
    props.getAllPage();
    props.onHide()
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
