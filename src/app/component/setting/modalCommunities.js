import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import Weeklyevice from "../../services/weekly.service";

export function AddPage(props) {
  const {formik} = props

  const handleClose = () =>{
    props.onHide()
    formik.resetForm();
  }

  return (
    <>
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <div className="col-122">
            <div className="card custom-card">
              <form onSubmit={formik.handleSubmit}>
                <h4>
                  Update url
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
    await Weeklyevice.Delete(card);
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
