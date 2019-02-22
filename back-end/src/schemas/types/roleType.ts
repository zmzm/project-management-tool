import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const RoleType = new GraphQLObjectType({
  description: 'A single role.',
  fields: {
    id: { type: GraphQLID },
    roleName: { type: GraphQLString },
  },
  name: 'Role',
});

export default RoleType;
