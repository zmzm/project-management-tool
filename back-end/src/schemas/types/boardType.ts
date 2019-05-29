import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const BoardType = new GraphQLObjectType({
  description: 'A single board.',
  fields: {
    boardName: { type: GraphQLString },
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    isClosed: { type: GraphQLBoolean },
    teamId: { type: GraphQLInt },
  },
  name: 'Board',
});

export default BoardType;
