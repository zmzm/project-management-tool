import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  name: Yup.string()
    .max(40, 'Please enter no more than 40 characters')
    .required( 'Please enter your name' ),
  password: Yup.string()
    .min(8, 'Please enter not less than 8 characters')
    .max(20, 'Please enter no more than 20 characters')
    .required('Please enter a valid password'),
 });