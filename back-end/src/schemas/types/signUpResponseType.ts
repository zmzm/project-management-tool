import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

// TODO: find way to extend user type to avoid repeating of user fields
const SignUpResponseType = new GraphQLObjectType({
  name: 'SignUpResponse',
  description: 'Response to successfull sign-up request, that contains user entity and JWT token',
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
    token: { type: GraphQLString },
  },
});

export default SignUpResponseType;