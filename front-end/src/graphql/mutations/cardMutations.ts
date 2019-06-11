import { gql } from 'apollo-boost';

export const CreateCard = gql`
  mutation createCard($cardName: String, $about: String, $listId: Int) {
    createCard(cardName: $cardName, about: $about, listId: $listId) {
      id
      cardName
      about
      labels
    }
  }
`;
