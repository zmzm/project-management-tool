import { gql } from 'apollo-boost';

export const CreateCard = gql`
  mutation createCard(
    $cardName: String
    $about: String
    $userId: Int
    $listId: Int
  ) {
    createCard(
      cardName: $cardName
      about: $about
      userId: $userId
      listId: $listId
    ) {
      id
      cardName
      about
      marks
    }
  }
`;
