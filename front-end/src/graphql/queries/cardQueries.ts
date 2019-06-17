import { gql } from 'apollo-boost';

export const GetCardsByList = gql`
  query findCardsByListId($id: Int) {
    finCardsByListId(id: $id) {
      cards {
        id
        cardName
        labels
        about
        comments {
          id
          commentText
          created
        }
      }
    }
  }
`;
