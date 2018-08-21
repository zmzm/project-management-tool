import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

const CardType = new GraphQLObjectType({
  name: 'Card',
  description: 'A single card.',
  fields: {
    id: { type: GraphQLID },
    cardName: { type: GraphQLString },
    about: { type: GraphQLString },
    userId: { type: GraphQLInt },
    listId: { type: GraphQLInt },
    created: { type: GraphQLString },
  },
});

export default CardType;
