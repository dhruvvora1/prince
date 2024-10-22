import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import pageTypeSevice from "../../services/pageType.service";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";

export function AddPage(props) {
  const { image, formik } = props;
  const [selectedimages, setSelectedimages] = useState([]);
  const showFileToUpload = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("file", selectedFile);
    setSelectedimages([selectedFile]);

    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedimages((previousImages) => [imageUrl]);
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
          <div className="col-122">
            <div className="card custom-card">
              <form onSubmit={formik.handleSubmit}>
                <h4>{props.update ? "UPDATE PAGE" : "ADD PAGE"}</h4>
                <div className="col-12">
                  <Form.Group
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label
                      style={{
                        textAlign: "start",
                        color: "#000",
                        marginTop: "15px",
                      }}
                    >
                      Page Name: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="pageName"
                      placeholder="Page Name"
                      value={formik.values.pageName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.pageName &&
                    formik.touched.pageName ? (
                      <p className="text-start error">
                        {" "}
                        {formik.errors.pageName}
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
                      {image ? (
                        <>
                          <img
                            src={image}
                            className="img-responsive2 mt-3 pos-relative"
                            alt="Image"
                          />
                        </>
                      ) : (
                        selectedimages.map((image, index) => (
                          <div key={image} className="image">
                            <img
                              src={image}
                              className="img-responsive2 mt-3"
                              alt="upload"
                            />
                          </div>
                        ))
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
                  <Button
                    type="submit"
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "15px",
                      marginTop: "15px",
                    }}
                  >
                    {props.loader ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CircularProgress
                          size={30}
                          style={{ textAlign: "center", color: "#fff" }}
                        />
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function DeleteImages({ getAllPage, card, cardName }) {
  const [modalShow, setModalShow] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Fragment>
      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "155px",
        }}
        className="text-white ms-3 mb-2 btn btn-primary"
        onClick={() => setModalShow(true)}
      >
        <i className="fas fa-trash"></i>
      </button>
      <DeleteImagesModal
        show={modalShow}
        card={card}
        cardName={cardName}
        enqueueSnackbar={enqueueSnackbar}
        getAllPage={getAllPage}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
}

export function DeleteImagesModal(props) {
  const DeleteImages = async () => {
    try {
      await pageTypeSevice.deletePage(props.card);
      props.getAllPage();
      props.onHide();
    } catch (e) {
      props.enqueueSnackbar("Please Delete Communities This Filter Related", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
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
            Are you sure want to delete {props.cardName} page !
          </p>

          <Button
            type="button"
            onClick={() => DeleteImages(props.card)}
            variant="danger"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
