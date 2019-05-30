import { User } from './../../models/userModel';
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import UserType from './userType';

const AuthResponseType = new GraphQLObjectType({
  description: 'Response to successfull sign-up/sign-in request, that contains user entity and JWT token',
  fields: {
    user: {
      type: UserType,
      async resolve(source) {
        return new User(source, false);
      },
    },
    token: { type: GraphQLString },
  },
  name: 'AuthResponse',
});

export default AuthResponseType;
