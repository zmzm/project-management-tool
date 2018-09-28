import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const RoleType = new GraphQLObjectType({
  name: 'Role',
  description: 'A single role.',
  fields: {
    id: { type: GraphQLID },
    roleName: { type: GraphQLString },
  },
});

export default RoleType;
