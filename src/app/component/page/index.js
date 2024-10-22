/* eslint-disable  no-unused-vars */
import React, { Fragment, useCallback } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import PageService from "../../services/page.service";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { AddPageModal, DeletePage } from "./modalPages";
import withLoader from "../../layout/loader/withLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import loaderGif from "../../../assets/img/brand/loading.gif";
import { useRef } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Please Enter Page name"),
  establishDate: yup.string().required("Please Enter Establish Date"),
  contact: yup.string().required("Please Enter Contact"),
  website: yup.string().required("Please Enter Website"),
  otherIds: yup.mixed().required("Please Enter Other Ids"),
  lat: yup.number().required("Please Enter Latitude"),
  long: yup.number().required("Please Enter Longitude"),
  address: yup.string().required("Please Enter Address"),
  description: yup.string().required("Please Enter Description"),
  file: yup.mixed().required("Please Upload File"),
});

const Page = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize] = useState(30);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [update, setUpdate] = useState("");
  const [pageType, setPageType] = React.useState(" ");
  const [loader, setLoader] = useState(false);
  const [records, setRecords] = useState("");
  const [dataList, setDataList] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);
  const [imageListDelete, setImageListDelete] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [singleImage, setSingleImage] = useState("");

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  async function deleteHandler(image) {
    const dataStatus = selectedImages.filter((e) => e !== image);
    setSelectedImages(dataStatus);

    const fileList = await Promise.all(
      dataStatus.map(async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const fileName = url.split("/").pop();
        return new File([blob], fileName);
      })
    );
    formik.setFieldValue("fileList", fileList);
    URL.revokeObjectURL(image);
  }

  const deleteHandler2 = async (imageUrl) => {
    await PageService.DeletImage(imageUrl, encodeURIComponent(id));
    const response = await PageService.getDetailsById(id);
    const latestImage = response.data.imageList;
    setImageList(latestImage);
    setSelectedImages((previousImages) =>
      previousImages.filter((image) => image !== imageUrl)
    );
  };

  const showFileToUpload = (e) => {
    let files = Array.from(e.target.files);
    formik.setFieldValue("fileList", files);
    const imagesArray = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const showFileToSingleUpload = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("file", selectedFile);
    setSingleImage([selectedFile]);
    const imageUrl = URL.createObjectURL(selectedFile);
    setSingleImage((previousImages) => [imageUrl]);
  };

  const handleOpen = async (id) => {
    setOpen(true);
    if (id !== "") {
      setUpdate(true);
      const response = await PageService.getDetailsById(id);
      const result = response.data;
      setId(result.id);
      setImageListDelete(result.imageList);
      formik.setFieldValue("id", result.id);
      formik.setFieldValue("name", result.name);
      formik.setFieldValue("establishDate", result.establishDate);
      formik.setFieldValue("contact", result.contact);
      formik.setFieldValue("website", result.website);
      formik.setFieldValue("otherIds", result.otherIds);
      formik.setFieldValue("lat", result.lat);
      formik.setFieldValue("long", result.long);
      formik.setFieldValue("address", result.address);
      formik.setFieldValue("description", result.description);
      formik.setFieldValue("file", result.image);
      setImage(result.image);
      formik.setFieldValue("fileList", result.imageList);
      setImageList(result.imageList);
    } else {
      setUpdate(false);
      formik.setFieldValue("id", "");
      formik.setFieldValue("name", "");
      formik.setFieldValue("establishDate", "");
      formik.setFieldValue("contact", "");
      formik.setFieldValue("website", "");
      formik.setFieldValue("otherIds", "");
      formik.setFieldValue("lat", "");
      formik.setFieldValue("long", "");
      formik.setFieldValue("address", "");
      formik.setFieldValue("description", "");
      formik.setFieldValue("file", "");
      formik.setFieldValue("fileList", "");
    }
  };

  const getPage = useCallback(async () => {
    try {
      const response = await PageService.getPageList(
        pageNumber,
        pageType,
        pageSize
      );
      const newData = response.data.data;
      setRecords(response.data.totalRecords);

      const filteredData = newData.filter((item) =>
        item.name.toLowerCase().includes(pageType.toLowerCase())
      );

      setFilter([...data, ...filteredData]);
      setData([...data, ...newData]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      if (newData.length === 0) {
      } else {
        setDataList(filteredData);
      }
    } catch (error) {
      console.log("Page List Error", error);
    }
  }, [pageSize, pageType]);

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      const {
        name,
        establishDate,
        contact,
        website,
        otherIds,
        lat,
        long,
        address,
        description,
        file,
        fileList,
      } = values;
      var date = new Date(establishDate);
      var milliseconds = date.getTime();
      const ids =
        typeof otherIds === "string"
          ? otherIds
              .trim()
              .split(",")
              .map((value) => value.trim())
          : [];

      const formData = new FormData();
      formData.append("name", name);
      formData.append("establishDate", milliseconds);
      formData.append("contact", contact);
      formData.append("website", website);
      formData.append("otherIds", ids);
      formData.append("lat", lat);
      formData.append("long", long);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("file", file);
      for (let i = 0; i < fileList.length; i++) {
        if (fileList !== null && fileList.length > 0) {
          formData.append("fileList", fileList[i]);
        }
      }

      try {
        setLoader(true);
        setPageNumber(0);
        setData([]);
        const response = await PageService.createPage(formData);
        getPage();
        window.location.reload();
        setLoader(false);
        handleClose();
        action.resetForm();
      } catch (e) {
        console.log("Create page error", e);
      }
    } else {
      try {
        const id = values.id;
        const {
          name,
          establishDate,
          contact,
          website,
          otherIds,
          lat,
          long,
          address,
          description,
          file,
          fileList,
          type,
        } = values;
        const estDate = new Date(establishDate).getTime();
        const ids =
          typeof otherIds === "string"
            ? otherIds
                .trim()
                .split(",")
                .map((value) => value.trim())
            : [];

        const editData = new FormData();
        editData.append("id", id);
        editData.append("name", name);
        editData.append("establishDate", estDate);
        editData.append("contact", contact);
        editData.append("website", website);
        editData.append("otherIds", ids);
        editData.append("lat", lat);
        editData.append("long", long);
        editData.append("address", address);
        editData.append("description", description);
        if (file) {
          editData.append("file", file);
        }
        editData.append("type", type);

        console.log("update image", fileList);

        for (let i = 0; i < fileList.length; i++) {
          if (fileList !== null && fileList.length > 0) {
            editData.append("fileList", fileList[i]);
          }
        }
        setLoader(true);
        setPageNumber(0);
        setData([]);
        await PageService.updatePage(editData);
        handleClose();
        setLoader(false);
        getPage();
        window.location.reload();
        action.resetForm();
      } catch (e) {
        console.log("update page error", e);
      }
    }
  };

  const initialValue = {
    name: "",
    establishDate: "",
    contact: "",
    website: "",
    otherIds: "",
    lat: "",
    long: "",
    address: "",
    description: "",
    file: null,
    fileList: null,
    type: "",
  };

  const handleSearchText = (e) => {
    const searchText = e.target.value.trim().toLowerCase();
    const filteredData = filter.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setFilter(filteredData);
    setData(filteredData);
    setPageNumber(0);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    getPage();
  }, [getPage]);

  const fetchMore = useCallback(async () => {
    try {
      const response = await PageService.getPageList(
        pageNumber,
        pageType,
        pageSize
      );
      const newData = response.data.data;
      setRecords(response.data.totalRecords);

      const filteredData = newData.filter((item) =>
        item.name.toLowerCase().includes(pageType.toLowerCase())
      );

      setFilter([...data, ...filteredData]);
      setData([...data, ...newData]);
      setPageNumber(pageNumber + 1);
      if (newData.length === 0) {
      } else {
        setDataList(filteredData);
      }
    } catch (error) {
      console.log("Page List Error", error);
    }
  }, [pageSize, pageNumber, pageType]);

  // const fetchMore = useCallback(async () => {
  //   try {
  //     const response = await PageService.getPageList(
  //       pageNumber + 1, // Increment pageNumber by 1
  //       pageType,
  //       pageSize
  //     );
  //     const newData = response.data.data;
  //     setRecords(response.data.totalRecords);

  //     const filteredData = newData.filter((item) =>
  //       item.name.toLowerCase().includes(pageType.toLowerCase())
  //     );

  //     setFilter([...filter, ...filteredData]); // Append filtered data to filter state
  //     setData([...data, ...newData]);
  //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //     if (newData.length === 0) {
  //     } else {
  //       setDataList([...dataList, ...filteredData]); // Append filtered data to dataList state
  //     }
  //   } catch (error) {
  //     console.log("Page List Error", error);
  //   }
  // }, [pageNumber, pageSize, pageType, filter, data, dataList]);

  return (
    <Fragment>
      <div className="page-header2"></div>
      <div className="d-flex">
        <div className="mb-4 main-content-label  tx-24 mg-b-5">All Page</div>
        <div className="ms-auto d-flex">
          <div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchText}
            />
          </div>
          <button
            className="text-white btn btn-primary ms-3 mb-4"
            onClick={() => handleOpen("")}
            type="button"
          >
            <i className="fas fa-plus"></i>
            &nbsp; Add
          </button>
          <AddPageModal
            show={open}
            update={update}
            onHide={handleClose}
            formik={formik}
            loading={loader}
            id={id}
            imageList={imageList}
            setImageList={setImageList}
            image={image}
            imageListDelete={imageListDelete}
            selectedImages={selectedImages}
            deleteHandler={deleteHandler}
            deleteHandler2={deleteHandler2}
            showFileToUpload={showFileToUpload}
            showFileToSingleUpload={showFileToSingleUpload}
            singleImage={singleImage}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
        hasMore={true}
        loader={
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.length === records ? "" : <img src={loaderGif} alt="" />}
          </div>
        }
        endMessage={<h4>No More Pages</h4>}
      >
        <Row className="row-sm">
          {data.map((item) => (
            <Col xl={3} lg={6} md={6} sm={6} key={item.id}>
              <Card className="custom-card">
                <Link to={`/pagedeatils/${item.id}`}>
                  <div className="px-3 pt-3" style={{ height: "300px" }}>
                    <img
                      src={item.image}
                      alt="Page img"
                      className="rounded-lg img-fit-cover"
                    />
                  </div>
                  <Card.Body className="p-3" style={{ minHeight: "130px" }}>
                    <div>
                      <h5 className="text-black mb-0">{item.name}</h5>
                      <div className="tx-14 mt-2">
                        {truncateString(item.description, 80)}
                      </div>
                    </div>
                  </Card.Body>
                </Link>
                <Card.Footer className="tx-20 tx-right rounded-0 text-primary">
                  {item.createdByUser === true ? (
                    <>
                      <button
                        style={{
                          position: "absolute",
                          right: "70px",
                        }}
                        className="ms-3 mb-2 btn btn-primary"
                        onClick={() => handleOpen(item.id)}
                      >
                        <i className="fa fa-pencil text-white "></i>
                      </button>
                      <DeletePage item={item} getPage={getPage} />
                    </>
                  ) : (
                    ""
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Fragment>
  );
};

export default withLoader(Page);
