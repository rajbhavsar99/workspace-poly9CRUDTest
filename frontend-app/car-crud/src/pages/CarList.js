import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  FormGroup,

} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";


import * as url from "../service/url_helper";
import { ApiServices } from "../service/apiServices";
import DetailTable from "../components/table/DetailTable";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CarList = (props) => {
  toastr.options = {
    positionClass: "toast-top-right",
    timeOut: 1200,
    extendedTimeOut: 1000,
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    newestOnTop: true,
    showEasing: "swing",
    hideEasing: "swing",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    showDuration: 300,
    hideDuration: 500
  };
  document.title = "Car List | Poly9";
  const [carList, setCarList] = useState([]);
  const [reset, setReset] = useState(Date.now())
  const [isUpdate, setIsUpdate] = useState(false)
  const [button, setButton] = useState("Add");
  const [carId, setCarId] = useState("");


  const deleteRecord = (record) => {
    console.log("deleteRecord record", record)
    try {
      let uri = url.DELETE_RECORD + record._id;
      ApiServices.callServiceDelete(uri)
        .then((response) => {
          console.log("deleteRecord  Response>>", response);
          if (response?.result?.type === "success") {
            getCarList();
          }
        })
        .catch((error) => {
          console.log("DEL_CarRecord API call Error", error);
        });
    } catch (error) {
      console.log("DEL_CarRecord API Function Error", error);
    }
  }
  const getCarList = () => {
    try {
      let uri = url.GET_ALL_RECORDS;
      ApiServices.callServiceGet(uri)
        .then((response) => {
          console.log("getCarList response", response);
          if (response?.result?.type === "success") {
            setCarList(response.result.data);
          }
        })
        .catch((error) => {
          console.log("getCarList API call Error", error);
        });
    } catch (error) {
      console.log("getCarList API Function Error", error);
    }
  };
  useEffect(() => {
    getCarList();
  }, []);

  const addCar = (values) => {
    validation.resetForm()
    console.log("values", values);
    try {
      let uri = url.CREATE_RECORD;
      ApiServices.callServicePostWithBodyData(uri, values).then((response) => {
        console.log("addCar response", response)
        if (response.result.type === "success") {
          getCarList();
        }
      })
        .catch((error) => {
          console.log("addCar API call Error", error);
        });
    } catch (error) {
      console.log("addCar API Function Error", error);
    }

  }

  const updateCar = (values) => {
    validation.resetForm()
    setIsUpdate(false)
    setButton("Add")
    setCarId("")
    console.log("values", values);
    try {
      let uri = url.UPDATE_RECORD + carId;
      ApiServices.callServicePutWithBodyData(uri, values).then((response) => {
        console.log("updateCar  response", response)
        if (response.result.type === "success") {

          getCarList();
        }
      })
        .catch((error) => {
          console.log("updateCar API call Error", error);
        });
    } catch (error) {
      console.log("updateCar API Function Error", error);
    }
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      modelName: "",
      color: "",
      manufacturer: "",
      contact: "",
      year: "",
    },
    validationSchema: Yup.object({
      modelName: Yup.string().required("Please enter car model no/name"),
      color: Yup.string().required("Please enter car color"),
      manufacturer: Yup.string().required("Please enter manufacturer name"),
      contact: Yup.string().required("Please enter contact Number"),
      year: Yup.string().required("Please Select Your Birthdate"),
    }),
    onSubmit: isUpdate ? updateCar : addCar
  });

  const updateRecord = (record) => {
    console.log("record", record)
    setIsUpdate(true)
    setButton("Update")
    setCarId(record._id)
    validation.setValues({
      modelName: record.modelName,
      color: record.color,
      manufacturer: record.manufacturer,
      contact: record.contact,
      year: record.year,
    })

  }

  return (
    <React.Fragment>
      <div className="">
        <Container fluid>
          <Row className="d-flex bg-white p-2 justify-content-between align-items-center w-100 m-0 mb-2">
            <Col>
              <h5 className="mb-0 fw-bold">Car List</h5><br />
            </Col>
          </Row>
          <Row className="align-items-center px-4">
            <Col lg="5" md="8" sm="10">
              <Card
                className="mb-0 mt-5 mt-lg-0"
                style={{
                  boxShadow: "0px 0px 10px 2px #62ffca",
                  opacity: "0.95",
                  borderRadius: "10px",
                }}
              >
                <CardBody>
                  <div className="mt-4">
                    <Form
                      className="needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <Row>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom01">
                              Model Name <sup className="text-danger">*</sup>
                            </Label>
                            <Input
                              name="modelName"
                              placeholder="Enter Model no/name"
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.modelName || ""}
                              invalid={
                                validation.touched.modelName &&
                                  validation.errors.modelName
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.modelName &&
                              validation.errors.modelName ? (
                              <FormFeedback type="invalid">
                                {validation.errors.modelName}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom02">
                              Color <sup className="text-danger">*</sup>
                            </Label>
                            <Input
                              name="color"
                              placeholder="Enter Color"
                              type="text"
                              className="form-control"
                              id="validationCustom02"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.color || ""}
                              invalid={
                                validation.touched.color &&
                                  validation.errors.color
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.color &&
                              validation.errors.color ? (
                              <FormFeedback type="invalid">
                                {validation.errors.color}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom03">
                              Manufacturer <sup className="text-danger">*</sup>
                            </Label>
                            <Input
                              name="manufacturer"
                              placeholder="Enter Manufacturer Name"
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.manufacturer || ""}
                              invalid={
                                validation.touched.manufacturer &&
                                  validation.errors.manufacturer
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.manufacturer &&
                              validation.errors.manufacturer ? (
                              <FormFeedback type="invalid">
                                {validation.errors.manufacturer}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom04">
                              Manufacturing Year <sup className="text-danger">*</sup>
                            </Label>
                            <Input
                              name="year"
                              placeholder="Enter Year"
                              type="text"
                              className="form-control"
                              id="validationCustom04"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.year || ""}
                              invalid={
                                validation.touched.year && validation.errors.year
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.year &&
                              validation.errors.year ? (
                              <FormFeedback type="invalid">
                                {validation.errors.year}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom05">
                              Contact Number <sup className="text-danger">*</sup>{" "}
                            </Label>
                            <Input
                              name="contact"
                              placeholder="Enter Contact number"
                              type="number"
                              className="form-control"
                              id="validationCustom05"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.contact || ""}
                              invalid={
                                validation.touched.contact &&
                                  validation.errors.contact
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.contact &&
                              validation.errors.contact ? (
                              <FormFeedback type="invalid">
                                {validation.errors.contact}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>

                      <div className="text-center mt-4">
                        <Button color="success" type="submit">
                          {button + "  Car"}
                        </Button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="bg-white">
            <Col lg="12" className="px-0 py-2">
              {carList.length > 0 ?
                <DetailTable
                  {...props}
                  reset={reset}
                  carList={carList}
                  updateRecord={updateRecord}
                  deleteRecord={deleteRecord}
                />
                :
                <Row>
                  <Col xs="12">
                    <div className="text-center my-3">
                      <p to="#" className="text-primary">
                        <i className="mdi mdi-alert-circle-outline me-2" />
                        No data
                      </p>
                    </div>
                  </Col>
                </Row>
              }

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CarList
