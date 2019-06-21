import { gql } from 'apollo-boost';

export const CreateListMutation = gql`
  mutation createList($listName: String, $boardId: Int) {
    createList(listName: $listName, boardId: $boardId) {
      id
      listName
    }
  }
`;
