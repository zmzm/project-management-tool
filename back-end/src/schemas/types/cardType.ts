import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const CardType = new GraphQLObjectType({
  description: 'A single card.',
  fields: {
    about: { type: GraphQLString },
    cardName: { type: GraphQLString },
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    listId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
  },
  name: 'Card',
});

export default CardType;
