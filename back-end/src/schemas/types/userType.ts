import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A single user.',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    roleId: { type: GraphQLInt },
    teamId: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    created: { type: GraphQLString },
    updated: { type: GraphQLString },
  },
});

export default UserType;
