import * as React from 'react';

import { Formik } from 'formik';
import { graphql } from 'react-apollo';
import {
  ISignInFormValues,
  SignInForm,
} from '../components/core/Forms/SignIn/SignInForm';
import { PageSection } from '../components/core/PageSection/PageSection';
import { Padding } from '../components/core/Padding/Padding';
import { Text, TextWeight } from '../components/core/Text/Text';
import { signinValidationSchema } from '../components/core/Forms/SignIn/Validation';
import { LogInUser } from '../graphql/mutations/userMutations';
import { StorageHelper } from '../utils/localStorage';

export interface ISignUpProps {
  mutate?: any;
  history?: any;
}

class SignIn extends React.PureComponent<ISignUpProps> {
  private initialValues: ISignInFormValues = {
    email: '',
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
              color="#fff"
              weight={TextWeight.Bold}
            >
              Log in to Huello
            </Text>
            <Formik
              initialValues={this.initialValues}
              onSubmit={this.handleSubmit}
              render={SignInForm}
              validationSchema={signinValidationSchema}
            />
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
          password: values.password,
        },
      })
      .then(res => {
        StorageHelper.add('user', res.data.loginUser.user);
        this.props.history.push({
          pathname: '/home',
          state: { user: res.data.loginUser.user },
        });
      })
      .catch(err => {
        console.log(err.graphQLErrors);
      });
  };
}

export default graphql(LogInUser)(SignIn);
