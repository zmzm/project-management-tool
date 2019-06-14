import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import CardType from './cardType';

const CardListType = new GraphQLObjectType({
  description: 'A list of cards.',
  fields: {
    cards: { type: new GraphQLList(CardType) },
  },
  name: 'CardList',
});

export default CardListType;
