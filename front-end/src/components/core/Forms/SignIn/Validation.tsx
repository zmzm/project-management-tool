import * as Yup from 'yup';

export const signinValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string()
    .required('Please enter a valid password'),
 });