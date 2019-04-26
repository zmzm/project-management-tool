import { gql } from 'apollo-boost';

export const LogInUser = gql`
  mutation LogInUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      roleId
    }
  }
`;
