import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const UserType = new GraphQLObjectType({
  description: 'A single user.',
  fields: {
    created: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    id: { type: GraphQLID },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    roleId: { type: GraphQLInt },
    teamId: { type: GraphQLInt },
    updated: { type: GraphQLString },
  },
  name: 'User',
});

export default UserType;
