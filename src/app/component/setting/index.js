import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useState } from "react";
import withLoader from "../../layout/loader/withLoader";
import AuthenticationService from "../../services/auth.service";
import { AddPage } from "./modalCommunities";

const PageType = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const getAllPageList = async (list) => {
    const response = await AuthenticationService.Dashboard();
    setData(response.data.apiresponse.data);
    console.log(response, "response");
  };

  useEffect(() => {
    getAllPageList();
  }, []);

  const handleOpen = async (id) => {
    setOpen(true);
  }

  return (
    <>
      <div className="page-header2"></div>
      <div class="row row-sm">
        <div class="col-sm-6 col-md-6 col-xl-4">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Users
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
              <Button className="btn-primary" onClick={() => handleOpen("row.id")}>
              <i className="fas fa-edit"></i>
            </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 col-xl-4">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Blog
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
              <Button className="btn-primary" onClick={() => handleOpen("row.id")}>
              <i className="fas fa-edit"></i>
            </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-4">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Broker
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
              <Button className="btn-primary" onClick={() => handleOpen("row.id")}>
              <i className="fas fa-edit"></i>
            </Button>
              </div>
            </div>
          </div>
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
          handleChangeDate={handleChangeDate}
        />
      </div>
    </>
  );
};

export default withLoader(PageType);
