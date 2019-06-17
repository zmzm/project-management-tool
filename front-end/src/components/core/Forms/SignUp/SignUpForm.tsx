import * as React from 'react';
import { FormikProps } from 'formik';
import { Margin } from '../../Margin/Margin';
import { Input, InputTypes } from '../../Input/Input';
import { Text, TextWeight } from '../../Text/Text';
import { Button, ButtonSize } from '../../Button/Button';
import colors from '../../../../styles/default/colors';

export interface ISignUpFormValues {
  email: string;
  name: string;
  password: string;
}

export const SignUpForm = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  isValid,
  errors,
  touched,
}: FormikProps<ISignUpFormValues>) => (
  <form onSubmit={handleSubmit}>
    <Margin margin="2.5rem 0 0 0">
      <Input
        name="name"
        label={
          <Text
            component="span"
            fontSize="3"
            color={colors.white}
            weight={TextWeight.Bold}
          >
            Name
          </Text>
        }
        type={InputTypes.Text}
        placeholder="John Johnson"
        variant="default"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {errors.name && touched.name ? (
        <Text
          component="span"
          fontSize="1.5"
          color={colors.vividYellow}
          weight={TextWeight.Bold}
        >
          {errors.name}
        </Text>
      ) : null}
    </Margin>
    <Margin margin="2rem 0">
      <Input
        name="email"
        label={
          <Text
            component="span"
            fontSize="3"
            color={colors.white}
            weight={TextWeight.Bold}
          >
            Email
          </Text>
        }
        type={InputTypes.Email}
        placeholder="asd@asdasd.asd"
        variant="default"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email ? (
        <Text
          component="span"
          fontSize="1.5"
          color={colors.vividYellow}
          weight={TextWeight.Bold}
        >
          {errors.email}
        </Text>
      ) : null}
    </Margin>
    <Margin margin="2rem 0">
      <Input
        name="password"
        label={
          <Text
            component="span"
            fontSize="3"
            color={colors.white}
            weight={TextWeight.Bold}
          >
            Password
          </Text>
        }
        type={InputTypes.Password}
        placeholder="***********"
        variant="default"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password ? (
        <Text
          component="span"
          fontSize="1.5"
          color={colors.vividYellow}
          weight={TextWeight.Bold}
        >
          {errors.password}
        </Text>
      ) : null}
    </Margin>
    <Margin margin="1rem 0 0 0">
      <Button
        disabled={!isValid}
        type="submit"
        size={ButtonSize.Big}
        color={colors.limeGreen}
        block
      >
        <Text
          component="span"
          fontSize="2.5"
          color={colors.white}
          weight={TextWeight.Bold}
        >
          Create New Account
        </Text>
      </Button>
    </Margin>
  </form>
);
