import { gql } from 'apollo-boost';

export const GetBoardInfo = gql`
  query findBoardById($id: Int) {
    findBoardById(id: $id) {
      id
      boardName
      lists {
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
