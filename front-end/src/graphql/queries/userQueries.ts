import { gql } from 'apollo-boost';

export const GetUserInfo = gql`
  query findUserById($id: Int!) {
    findUserById(id: $id) {
      email
      firstName
      lastName
      roleId
      team {
        teamName
        boards {
          boardName
        }
      }
    }
  }
`;
