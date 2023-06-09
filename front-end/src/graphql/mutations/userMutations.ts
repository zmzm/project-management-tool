import { gql } from 'apollo-boost';

export const RegisterUser = gql`
  mutation RegisterUserMutation(
    $firstName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $firstName
      email: $email
      password: $password
    ) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const LogInUser = gql`
  mutation LogInUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`;
