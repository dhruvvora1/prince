import React from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import DataTableExtensions from "react-data-table-component-extensions";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

const FeedDetailPage = () => {
  const id = useParams();
  const [feed, setFeed] = useState(-1);
  const [data, setData] = useState([]);
  const columns = [
    {
      name: <b>USER NAME</b>,
      selector: (row) => [row.username],
      sortable: true,
    },
    {
      name: <b>GENDER</b>,
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: <b>COUNTRY</b>,
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: <b>PROFILE</b>,
      selector: (row) => (
        <div className="justify-content-center">
          <button className="btn btn-rounded">
            <img
              src={row.userImage}
              alt=""
              width={"50px"}
              height={"50px"}
              style={{
                borderRadius: "50%",
                border: "1px solid",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  const getFeedList = async () => {
    // const response = await feedSevice.GetListByID(id.id);
    // setFeed(response.data.data);
    // setData(response.data.userList);
  };
  useEffect(() => {
    getFeedList();
  }, []);

  const tableData = {
    columns,
    data,
  };

  const date = moment(feed.created).format("YYYY-MM-DD");

  return (
    <>
      <div className="page-header2" />

      <div xxl={12} lg={12} md={12}>
        <Card className="custom-card overflow-hidden">
          <div className="d-flex">
            <Col xxl={4} lg={4} md={6} sm={12}>
              <div className="p-4">
                {feed.isImage === true ? (
                  <img
                    src={feed.image}
                    alt="img"
                    height="400px"
                    width="400px"
                    className="rounded-5"
                  />
                ) : (
                  <video
                    src={feed.image}
                    controls
                    height="400px"
                    width="400px"
                    className="rounded-5"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </Col>
            <Col xxl={8} lg={8} md={6} sm={12}>
              <Card.Body>
                <div className="item-card-desc d-md-flex mb-3">
                  <Link to="#">
                    <span className="text-primary fs-18 me-2">
                      <i className="fe fe-calendar"></i>
                    </span>
                  </Link>
                  <span className="my-auto text-dark">{date}</span>
                </div>
                <form className="form-horizontal">
                  <div className="mb-4 main-content-label fs-20">
                    Feed Detail
                  </div>

                  <>
                    <FormGroup className="form-group">
                      <Row className=" row-sm align-items-center">
                        <Col md={3}>
                          <Form.Label
                            style={{ color: "#000", fontWeight: "600" }}
                          >
                            Feed Name
                          </Form.Label>
                        </Col>
                        <Col md={9}>
                          <Form.Control value={feed.name} disabled />
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup className="form-group">
                      <Row className=" row-sm align-items-center">
                        <Form.Label
                          style={{ color: "#000", fontWeight: "600" }}
                        >
                          Description
                        </Form.Label>
                        <p style={{ textAlign: "justify" }}>
                          {feed.description}
                        </p>
                      </Row>
                    </FormGroup>
                  </>
                </form>
                <div className="text-start mt-4 mb-4 btn-list">
                  <div className="btn ripple btn-primary">
                    <i className="fe fe-heart"></i> {feed.likesCount}
                  </div>
                  <div className="btn ripple btn-secondary">
                    <i className="fe fe-eye"> </i> {feed.viewersCount}
                  </div>
                </div>
              </Card.Body>
            </Col>
          </div>
        </Card>
      </div>
      <div></div>
      <Card className="custom-card overflow-hidden">
        <Card.Body className="pt-3 pl-3 pr-3">
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

export default FeedDetailPage;
