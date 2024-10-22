import { Link } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => (
  <div className="main-footer text-center">
    <Container>
      <Row className="row-sm">
        <Col md={12} className="col-md-12">
          <span>
            Copyright © 2023 <Link href="#">Neighbour</Link>. Designed by{" "}
            <Link href="">Neighbour</Link> All rights reserved.
          </span>
        </Col>
      </Row>
    </Container>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
