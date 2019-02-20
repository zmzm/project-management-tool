import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const ListType = new GraphQLObjectType({
  description: 'A single list.',
  fields: {
    boardId: { type: GraphQLInt },
    id: { type: GraphQLID },
    listName: { type: GraphQLString },
  },
  name: 'List',
});

export default ListType;
