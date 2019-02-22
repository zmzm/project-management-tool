import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// TODO: find way to extend user type to avoid repeating of user fields
// tslint:disable-next-line
const SignUpResponseType = new GraphQLObjectType({
  description: 'Response to successfull sign-up request, that contains user entity and JWT token',
  fields: {
    created: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    id: { type: GraphQLID },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    roleId: { type: GraphQLInt },
    teamId: { type: GraphQLInt },
    token: { type: GraphQLString },
    updated: { type: GraphQLString },
  },
  name: 'SignUpResponse',
});

export default SignUpResponseType;
