import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Your email is required."),
  body: Yup.string()
    .min(5, "Message too short.")
    .required("Your message is required"),
});
