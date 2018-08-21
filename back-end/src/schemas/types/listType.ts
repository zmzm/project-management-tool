import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

const ListType = new GraphQLObjectType({
  name: 'List',
  description: 'A single list.',
  fields: {
    id: { type: GraphQLID },
    listName: { type: GraphQLString },
    boardId: { type: GraphQLInt },
  },
});

export default ListType;
