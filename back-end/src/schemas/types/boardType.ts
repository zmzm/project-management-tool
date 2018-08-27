import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const BoardType = new GraphQLObjectType({
  name: 'Board',
  description: 'A single board.',
  fields: {
    id: { type: GraphQLID },
    bardName: { type: GraphQLString },
    isClosed: { type: GraphQLBoolean },
    teamId: { type: GraphQLInt },
    created: { type: GraphQLString },
  },
});

export default BoardType;
