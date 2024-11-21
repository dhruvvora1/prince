import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { useState } from "react";
import withLoader from "../../layout/loader/withLoader";
import AuthenticationService from "../../services/auth.service";

const PageType = () => {
  const [data, setData] = useState([]);

  const getAllPageList = async (list) => {
    const response = await AuthenticationService.Dashboard();
    setData(response.data.apiresponse.data);
    console.log(response, "response")
  };

  useEffect(() => {
    getAllPageList()
  }, [])
  

  return (
    <>
      <div className="page-header2"></div>
      <div class="row row-sm">
        <div class="col-sm-6 col-md-6 col-xl-3">
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
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalUsers}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 col-xl-3">
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
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalBlogs}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
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
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                                    {data?.totalBroker}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Learning
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalLearing}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Intraday
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalIntraday}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                F&O Stock
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalFoStocks}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Yearly
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalMultiyear}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Monthly
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalWeekly}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Weekly
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalWeekly}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
          <div class="card custom-card">
            <div class="card-body">
              <p class="mb-1" style={{ fontSize: "18px", fontWeight: "600" }}>
                Daily
              </p>
              <div></div>
              <div class="expansion-value d-flex ">
                <strong></strong>
                <strong class="ms-auto"></strong>
              </div>
              <div class="expansion-label d-flex text-muted">
                <span
                  class="ms-auto fw-blod"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {data?.totalDaily}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withLoader(PageType);
