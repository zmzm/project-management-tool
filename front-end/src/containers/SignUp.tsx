import * as React from 'react';

import { Formik } from 'formik';
import { graphql } from 'react-apollo';
import {
  ISignUpFormValues,
  SignUpForm,
} from '../components/core/Forms/SignUp/SignUpForm';
import { PageSection } from '../components/core/PageSection/PageSection';
import { Padding } from '../components/core/Padding/Padding';
import { Text, TextWeight } from '../components/core/Text/Text';
import { signupValidationSchema } from '../components/core/Forms/SignUp/Validation';
import { Margin } from '../components/core/Margin/Margin';
import { RegisterUser } from '../graphql/mutations/userMutations';
import colors from '../styles/default/colors';

export interface ISignUpProps {
  mutate?: any;
}

class SignUp extends React.PureComponent<ISignUpProps> {
  private initialValues: ISignUpFormValues = {
    email: '',
    name: '',
    password: '',
  };

  public render() {
    return (
      <PageSection>
        <Padding padding="10rem 1rem">
          <PageSection margin="0 auto" maxWidth={400}>
            <Text
              component="h1"
              fontSize="4.5"
              color={colors.white}
              weight={TextWeight.Bold}
            >
              Create Account
            </Text>
            <Formik
              initialValues={this.initialValues}
              onSubmit={this.handleSubmit}
              render={SignUpForm}
              validationSchema={signupValidationSchema}
            />
            <Margin margin="3rem 0 0 0">
              <Text component="div" fontSize="3" weight={TextWeight.Medium}>
                Already have an account? Log in
              </Text>
            </Margin>
          </PageSection>
        </Padding>
      </PageSection>
    );
  }

  public handleSubmit = (values: any) => {
    this.props
      .mutate({
        variables: {
          email: values.email,
          firstName: values.name,
          password: values.password,
        },
      })
      .then(res =>
        // tslint:disable-next-line:no-console
        console.log(res),
      )
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err.graphQLErrors.map(error => error.message)),
      );
  };
}

export default graphql(RegisterUser)(SignUp);
