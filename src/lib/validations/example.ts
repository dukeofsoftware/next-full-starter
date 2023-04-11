import * as yup from "yup";

const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required")
  });