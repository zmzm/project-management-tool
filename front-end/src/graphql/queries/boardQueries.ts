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
          marks
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
