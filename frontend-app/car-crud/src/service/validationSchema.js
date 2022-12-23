import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const aadharCardRegExp = /^\d{4}\d{4}\d{4}$/;
const panCardRegExp = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
const isAlpha = /[a-zA-Z ]+/;
const isAlphaNumeric = /[0-9a-zA-Z ]+/;
const isSpace = /^\S+$/;
const emailReg = /^[[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const isUpiId = /^[\w.-]+@[\w.-]+$/;
const isValidUrl =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
const isGSTINNumber =
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
function noWhitespace() {
  return this.transform((value, originalValue) =>
    /\s/.test(originalValue) ? NaN : value
  );
}
Yup.addMethod(Yup.number, "noWhitespace", noWhitespace);

export const AddProductSchema = Yup.object().shape({
  productName: Yup.string().label("Product Name").required(),
  price: Yup.string().label("Price").required(),
  // productDescription: Yup.string().label("Product Description").required(),
  // otherDescription: Yup.string().label("Other Description").required(),
  // weight: Yup.string().label("Weight").required(),
  // dimensions: Yup.string().label("Dimensions").required(),
  // modelName: Yup.string().label("Model Name").required(),
  // type: Yup.string().label("Type").required(),
  // color: Yup.string().label("Color").required(),
  // baseMaterial: Yup.string().label("Base Meterial").required(),
  // size: Yup.string().label("Size").required(),
});

export const billingInfoSchema = Yup.object().shape({
  fullName: Yup.string()
  .label("Full Name")
  .required(),
  mobileNumber: Yup.string()
  .min(10, 'Number must have 10 digits')
  .max(10, 'Number must have 10 digits')
  .required('Please enter a registered Number')
  .matches(isSpace, 'Spaces are not allowed')
  .matches(phoneRegExp, "Please enter valid mobile number"),
  email: Yup.string()
  .label('Email')
  .required()
  .email('Enter a valid email'),
  address: Yup.string()
  .label("Address")
  .required(),
}); 