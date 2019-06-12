import * as React from 'react';
import { FormikProps } from 'formik';
import { Margin } from '../../Margin/Margin';
import { Input, InputTypes } from '../../Input/Input';
import { Text, TextWeight } from '../../Text/Text';
import { Button, ButtonSize } from '../../Button/Button';
import colors from '../../../../styles/default/colors';

export interface ISignInFormValues {
  email: string;
  password: string;
}

export const SignInForm = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  isValid,
  errors,
  touched,
}: FormikProps<ISignInFormValues>) => (
  <form onSubmit={handleSubmit}>
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
        color={colors.lightGreen}
        block
      >
        <Text
          component="span"
          fontSize="2.5"
          color={colors.white}
          weight={TextWeight.Bold}
        >
          Log in
        </Text>
      </Button>
    </Margin>
  </form>
);
