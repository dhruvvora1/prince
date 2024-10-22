/* eslint-disable  no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PageService from "../../services/page.service";
import { CircularProgress } from "@mui/material";

export function AddPageModal(props) {
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
          <div className="col-12">
            <div className="card custom-card">
              <form onSubmit={props.formik.handleSubmit}>
                <h4>{!props.update ? "ADD PAGE" : "UPDATE PAGE"}</h4>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Page Name: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Page Name"
                    value={props.formik.values.name}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.name && props.formik.touched.name ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.name}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Establish Date: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="establishDate"
                    placeholder="Establish Date"
                    value={props.formik.values.establishDate}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                  />
                  {props.formik.errors.establishDate &&
                  props.formik.touched.establishDate ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.establishDate}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Contact: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={props.formik.values.contact}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.contact &&
                  props.formik.touched.contact ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.contact}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Website: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={props.formik.values.website}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.website &&
                  props.formik.touched.website ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.website}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Other Ids: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="otherIds"
                    placeholder="abc,xyz"
                    value={props.formik.values.otherIds}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.otherIds &&
                  props.formik.touched.otherIds ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.otherIds}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Lat: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lat"
                    placeholder="Lat"
                    value={props.formik.values.lat}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.lat && props.formik.touched.lat ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.lat}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Long: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="long"
                    placeholder="Long"
                    value={props.formik.values.long}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.long && props.formik.touched.long ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.long}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Address: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={props.formik.values.address}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.address &&
                  props.formik.touched.address ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.address}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Description: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={props.formik.values.description}
                    onChange={props.formik.handleChange}
                  />
                  {props.formik.errors.description &&
                  props.formik.touched.description ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.description}
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    File
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    placeholder="Choose a file"
                    onChange={(e) => props.showFileToSingleUpload(e)}
                  />
                  {props.formik.errors.file && props.formik.touched.file ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.file}
                    </p>
                  ) : null}
                  {props.update ? (
                    <>
                      {props.image ? (
                        <>
                          <img
                            src={props.image}
                            alt={""}
                            className="img-responsive2 mt-3"
                          />
                        </>
                      ) : (
                        <>
                          {props.singleImage &&
                            props.singleImage.map((image, index) => {
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
                </Form.Group>

                <Form.Group>
                  <Form.Label className="text-start text-black mt-3">
                    Multiple files
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="fileList"
                    multiple
                    onChange={props.showFileToUpload}
                  />
                  {props.formik.errors.fileList &&
                  props.formik.touched.fileList ? (
                    <p className="text-start error">
                      {" "}
                      {props.formik.errors.fileList}
                    </p>
                  ) : null}
                </Form.Group>
                <div className="mt-3 justify-content-around">
                  <>
                    {props.imageList.map((imageUrl, index) => (
                      <>
                        <img
                          key={index}
                          src={imageUrl}
                          alt={""}
                          className="img-responsive2 mt-3"
                        />
                        <div className="pos-absolute">
                          <Button
                            onClick={() => props.deleteHandler2(imageUrl)}
                            style={{
                              left: "0px",
                              top: "-200px",
                              position: "relative",
                            }}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </div>
                      </>
                    ))}
                  </>
                  <>
                    {props.selectedImages.length > 0 &&
                      props.selectedImages.map((image, index) => {
                        return (
                          <div
                            key={image}
                            className="image text-start m-2 pointer img-responsive2 w-100"
                          >
                            <Button
                              onClick={() => props.deleteHandler(image)}
                              className="position-absolute z-index-10"
                            >
                              <i className="fas fa-close"></i>
                            </Button>
                            <img
                              src={image}
                              alt="upload"
                              className="img-fit-cover"
                            />
                          </div>
                        );
                      })}
                  </>
                </div>
                <div className="text-end mt-4">
                  <Button type="submit">
                    {props.loading ? (
                      <>
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
                      <>{!props.update ? "Add" : "Update"}</>
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

export function DeletePage({ item, getPage }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <button
        className=" btn btn-primary ms-2"
        type={"button"}
        onClick={() => setModalShow(true)}
      >
        <i className="fas fa-trash text-white"></i>
      </button>
      <DeletePageModal
        show={modalShow}
        item={item}
        onHide={() => setModalShow(false)}
        getPage={getPage}
      />
    </Fragment>
  );
}

export function DeletePageModal(props) {
  const { item } = props;

  const DeletePage = async () => {
    try {
      await PageService.deletePage(item.id);
      props.getPage();
      props.onHide();
    } catch (e) {
      console.log("Create page error", e);
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
          <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-danger mg-t-20"></i>
          <h4 className="tx-danger tx-semibold mg-b-20">Delete?</h4>
          <p className="mg-b-20 mg-x-20 ">
            Are you sure want to delete {item.name} Page?
          </p>

          <Button
            type="button"
            onClick={() => DeletePage(item.id)}
            variant="danger"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function DeleteImagesModal(props) {
  const DeleteImages = async () => {
    // await feedSevice.feedDelete(props.id);
    // props.onHide();
    // props.getFeedList();
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
            are you sure want to delete {props.name} Feed !
          </p>

          <Button
            type="button"
            onClick={() => DeleteImages(props.id)}
            variant="danger"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
