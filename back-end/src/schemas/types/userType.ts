import { Team } from './../../models/teamModel';
import { User } from './../../models/userModel';
import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import TeamType from './teamType';
import Context from '../../context';

// tslint:disable-next-line
const UserType = new GraphQLObjectType({
  description: 'A single user.',
  fields: {
    created: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    id: { type: GraphQLID },
    lastName: { type: GraphQLString },
    roleId: { type: GraphQLInt },
    teamId: { type: GraphQLInt },
    updated: { type: GraphQLString },
    team: {
      type: TeamType,
      async resolve(source: User, args: any, ctx: Context<any>) {
        if (Object.keys(source).length !== 0) {
          const dbTeam = await ctx.Services.TeamService.findById(source.TeamId);
          return new Team(dbTeam);
        }
        return null;
      },
    },
  },
  name: 'User',
});

export default UserType;
