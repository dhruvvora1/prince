/* eslint-disable  no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { AddPage, DeleteImages, DeleteImagesModal } from "./modalCommunities";
import { useFormik } from "formik";
import * as yup from "yup";
import withLoader from "../../layout/loader/withLoader";
import UserTable from "./userTable";
import Monthlyevice from "../../services/monthly.service";

const Notification = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [listof, setListof] = useState([]);
  const [idListOfData, setIdListOfData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const [update, setUpdate] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectedType2, setSelectedType2] = useState("");
  const [image, setImage] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const getAllPage = async () => {
    const response = await Monthlyevice.GetList(page + 1, 10);
    setData(response.data.apiresponse.data.monthly);
  };

  useEffect(() => {
    getAllPage();
  }, []);

  const options = [
    { value: " ", label: "All" },
    ...listof.map((item, index) => ({
      value: idListOfData[index],
      label: item,
    })),
  ];

  const options2 = [
    ...listof.map((item, index) => ({
      value: idListOfData[index],
      label: item,
    })),
  ];

  const selectedOption = options.find(
    (option) => option.value === Object(idListOfData)
  );

  const initialValue = {
    heading: "",
    description: "",
    level: "",
    pattern: "",
    date: "",
    file: null,
  };

  const handleChangeDate = (e) => {
    const newDate = new Date(e.target.value).getTime();
    formik.setFieldValue("date", newDate);
  };

  const handleFormSubmit = async (values, action) => {
    if (!values.id) {
      try {
        const { file, heading, level, pattern, date, description } = values;
        const editdata = new FormData();
        editdata.append("photo", file);
        editdata.append("heading", heading);
        editdata.append("description", description);
        editdata.append("level", level);
        editdata.append("pattern", pattern);
        editdata.append("date", date);
        setLoader(true);
        await Monthlyevice.Create(editdata);
        setLoader(false);
        getAllPage();
        handleClose();
        action.resetForm();
      } catch (e) {
        console.log("add Communities error", e);
      }
    } else {
      try {
        const id = values.id;
        const { file, heading, level, pattern, date, description } = values;
        const editData = new FormData();
        editData.append("id", id);
        editData.append("heading", heading);
        editData.append("description", description);
        editData.append("level", level);
        editData.append("pattern", pattern);
        editData.append("date", date);
        if (file) {
          editData.append("photo", file);
        }
        setLoader(true);
        await Monthlyevice.Update(editData);
        setLoader(false);
        handleClose();
        getAllPage();
        action.resetForm();
      } catch (e) {
        console.log("update page error", e);
      }
    }
  };

  const handleSendMsg = async (msg) => {
    const url =
    "https://fcm.googleapis.com/v1/projects/notification-cf86e/messages:send";
  const body = {
    message: {
      token: "topics/all",
      notification: {
        // title: title,
        // body: description,
        // image: image,
      },
    },
  };
const oAuth = "ya29.c.c0ASRK0GbFHtCIOPxZKXbNxhXXwd7NgcvMTymy3L9DIxlj42_dDFncsJNjHWAEuyzZ9UU4VvA8MZ0JWTe1f4vPCcw5k50P1SnwLb5Ic0IRTDNWOWjB7mVb232nfWRPf0F_xVic62QfFxHl6jUp12blsq6fHsiPqwwZh0-J2gz4N70c9YzhmMxUF4Ljns8DTbvkQb906Qh1P8u0aU-GIwN7_uv4F8MxVoSmsSuriK8otleghu2JZQrb2odfZz_aZYM5k3I6DaxP-VGO3FAxtO7mgb1UtmqoPYWh8GLkepelUcQT_SZ9GfdxGg1Q4CuYSwBT9gBsEWU0IY4LdnXxWHDanoxuKMk8_l61yz9CWsODuqhmrJiZTeaeRmXKRAN387C5S_IFdd0orS8vSY1BfJ3jkXJ-FjpXBvV7WM154k5Bs913tYg2zjMF6dfJYIauep_R1Y439tZMvyrV7WQM1Xq5m3l0bFolnQb74mmIkW74cbBb3dUmZgv5vpprRy3kUVM2yYYXS3Ydw2hB6isd2a-6Bd3Y5_4YrzBhks5JvSOedv-3vmpZJwMf9I47gzs3zSm5BV8y189UtdBFQeYz3hSkg-0wj5jeZi0s6Xu2smeOf_X8p50Y4aW_VOhlf0bYRSohzYuu3ewX7WBuB48Rqlam0r57Qd_WMYF3JX2mjfj2zObVgyWWgoJdk59w8WhmyqR32_mpZdZg5Vw9FufvXX1yOzzomcWf2QyhtSq1yuovnjW2ykgQYdb3Zo3f3I93VvSXzm_rc2-y8-ai8nwvrIsYIonqdyuOoaYekl0VBndz8nfVkgdQi0RnF4jbuUj9Z8nYQa4pVm-ZRwBZzIz1adbZz4_s8IvRbbeISasJb_bRB8abMOv4pZQtg2iXU-JSRcl_vxhV7lFOXWfJv0to40BnItM5JZarauIvp4VSdWuQp6gF2j483g2mJcfSzOo1zdg334OYmygru_t-Xfv2ahoX5wYOB9bXu1c_wFMqIiaecFVSamm0ZnMrdqi"
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${oAuth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Notification sent successfully:", data);
  } catch (error) {
    console.error("Failed to send notification:", error);
  }
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: handleSendMsg,
  });

  const handleOpen = async (id) => {
    setOpen(true);
    if (id !== "") {
      setUpdate(true);
      const response = await Monthlyevice.getByID(id);
      const result = response.data.apiresponse.data;
      formik.setFieldValue("id", result.id);
      formik.setFieldValue("heading", result.heading);
      formik.setFieldValue("description", result.description);
      formik.setFieldValue("file", result.photo);
      formik.setFieldValue("level", result.level);
      formik.setFieldValue("pattern", result.pattern);
      setImage(result.image);
    } else {
      setUpdate(false);
      formik.setFieldValue("heading", "");
      formik.setFieldValue("description", "");
      formik.setFieldValue("link", "");
      formik.setFieldValue("file", "");
    }
  };

  const DeleteBlog = (id) => {
    setOpenDelete(!openDelete);
    setDeleteId(id);
  };

  const columns = [
    {
      name: <b>Heading</b>,
      selector: (row) => row.heading,
      sortable: true,
    },
    {
      email: <b>Description</b>,
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: <b>Link</b>,
      selector: (row) => row.link,
      sortable: true,
    },
    {
      name: <b>Photo</b>,
      selector: (row) => (
        <img
          src={row.photo}
          alt=""
          style={{ objectFit: "cover", margin: 5 }}
          width="100"
          height="80"
        />
      ),
      sortable: true,
    },
    {
      name: <b>Action</b>,
      selector: (row) => (
        <>
          <div>
            <Button className="btn-primary" onClick={() => handleOpen(row.id)}>
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              className="ms-2 btn-danger"
              onClick={() => DeleteBlog(row.id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </>
      ),
      sortable: true,
    },
  ];

  return (
    <>
      <div className="page-header2"></div>
      <div className="d-flex">
        <div className="mb-4 main-content-label tx-24">All Notification</div>
        <div className="ms-auto me-4 d-flex">
          <button
            className="text-white btn btn-primary ms-auto mb-4"
            onClick={() => handleOpen("")}
            type="button"
          >
            <i className="fas fa-plus"></i>
            &nbsp; Add
          </button>
        </div>
        <AddPage
          show={open}
          onHide={handleClose}
          update={update}
          formik={formik}
          image={image}
          selectedOption2={selectedOption}
          loading={loader}
          handleChangeDate={handleChangeDate}
        />
      </div>
      <div className="row">
        <UserTable name="Notification" columns={columns} data={data} />
      </div>
      <DeleteImagesModal
        show={openDelete}
        onHide={handleCloseDelete}
        card={deleteId}
        getAllPage={getAllPage}
      />
    </>
  );
};

export default withLoader(Notification);
