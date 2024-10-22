import React, { Fragment } from "react";
import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { login, setLoggedIn } from "../store/slice/auth";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const formerr = {
    color: "#ff3300",
    fontSize: "16px",
    fontWeight: "500px",
  };

  const schema = object({
    email: string().email().required(" Enter Your Email"),
    password: string().min(4).required(" Enter Your password"),
  });

  const submit = async (values, action) => {
    const { email, password } = values;
    try {
      await dispatch(login({ email, password })).unwrap();
      dispatch(setLoggedIn(true));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      //  navigate('/dashboard/')
      action.resetForm();
    } catch (e) {
      navigate("/login");
      enqueueSnackbar("Invalid credentials ", { variant: "error" });
    }
  };
  const initialValue = {
    email: "",
    password: "",
  };

  const { errors, touched, handleSubmit, values, handleChange } = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: submit,
  });

  return (
    <>
      <Fragment>
        <div className="page main-signin-wrapper">
          <Row className="signpages text-center">
            <Col md={12}>
              <Card>
                <Row className="row-sm">
                  <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                  >
                    <div className="mt-5 pt-4 p-2 pos-absolute">
                      <div className="clearfix"></div>
                      <img
                        src={require("../../assets/img/svgs/user.svg").default}
                        className="ht-100 mb-0"
                        alt="user"
                      />
                      <h5 className="mt-4 text-white">Create Your Account</h5>
                      <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                        Signup to create, discover and connect with the global
                        community
                      </span>
                    </div>
                  </Col>
                  <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                    <Container fluid>
                      <Row className="row-sm">
                        <Card.Body className="mt-2 mb-2">
                          <form onSubmit={handleSubmit}>
                            <h5 className="text-start mb-2">
                              Signin to Your Account
                            </h5>
                            <p className="mb-4 text-muted tx-13 ms-0 text-start">
                              Signin to create, discover and connect with the
                              global community
                            </p>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formEmail"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {errors.email && touched.email ? (
                                <p style={formerr}>{errors.email}</p>
                              ) : null}
                            </Form.Group>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formpassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                              />
                              {errors.password && touched.password ? (
                                <p style={formerr}>{errors.password}</p>
                              ) : null}
                            </Form.Group>
                            <Button
                              type="submit"
                              className="btn ripple btn-main-primary btn-block mt-2"
                            >
                              Sign In
                            </Button>
                          </form>
                          <div className="text-start mt-5 ms-0">
                            <div className="mb-1">
                              <Link to="#"> Forgot password ?</Link>
                            </div>
                          </div>
                        </Card.Body>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    </>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
