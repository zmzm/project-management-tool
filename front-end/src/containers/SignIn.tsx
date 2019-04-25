import * as React from 'react';

import { Formik } from 'formik';
import { ISignInFormValues, SignInForm } from '../components/core/Forms/SignIn/SignInForm';
import { PageSection } from '../components/core/PageSection/PageSection';
import { Padding } from '../components/core/Padding/Padding';
import { Text, TextWeight } from '../components/core/Text/Text';
import { signinValidationSchema } from '../components/core/Forms/SignIn/Validation';
import { Margin } from '../components/core/Margin/Margin';
import { graphql } from 'react-apollo';
import { LogInUser } from '../graphql/mutation/userMutations';

export interface ISignUpProps {
  mutate?: any;
}

class SignIn extends React.PureComponent<ISignUpProps> {
  private initialValues: ISignInFormValues = {
    email: '',
    password: '',
  };
  
  public render() {
    return (
      <PageSection>
        <Padding padding='10rem 1rem'>
          <PageSection margin='0 auto' maxWidth={400}>
            <Text component='h1' fontSize='4.5' color='#fff' weight={TextWeight.Bold}>
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

  public handleSubmit = (values:any) => {
    this.props.mutate(
      { variables:
        {
          email: values.email,
          password: values.password,
        },
      })
      .then(res =>
        // tslint:disable-next-line:no-console
        console.log(res)
      )
      .catch(err => 
        // tslint:disable-next-line:no-console
        console.log(err.graphQLErrors.map(error => error.message))
      );
  }
}

export default graphql(LogInUser)(SignIn);