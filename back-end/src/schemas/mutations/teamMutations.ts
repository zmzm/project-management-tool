import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { Team } from '../../models/teamModel';
import TeamType from '../types/teamType';
import Context from '../../context';

const createTeam = {
  type: TeamType,
  args: {
    teamName: { type: GraphQLString },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const teamModel = new Team(args, false);

    const fieldsToReturn = Object.keys(teamModel.toDatabaseObject());
    const result = await ctx.Services.TeamService.create(teamModel, fieldsToReturn);
    const returnedFields = result[0];

    return Object.assign(new Team(returnedFields));
  },
};

const deleteTeam = {
  type: TeamType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    await ctx.Services.TeamService.delete(args.id);
  },
};

const updateTeam = {
  type: TeamType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    teamName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const teamModel = new Team()
      .setId(args.id)
      .setName(args.teamName);
    const team = await ctx.Services.TeamService.update(teamModel);
    return new Team(team);
  },
};

export default {
  createTeam,
  deleteTeam,
  updateTeam,
};
