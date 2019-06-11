import { gql } from 'apollo-boost';

export const GetBoardInfo = gql`
  query findBoardById($id: Int) {
    findBoardById(id: $id) {
      id
      boardName
      lists {
        id
        listName
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
  }
`;
