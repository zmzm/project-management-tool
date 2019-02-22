import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Context from '../../context';
import { Team } from '../../models/teamModel';
import TeamType from '../types/teamType';

const createTeam = {
  args: {
    teamName: { type: GraphQLString },
  },
  type: TeamType,
  async resolve(root: any, args: any, ctx: Context<any>) {
    const teamModel = new Team(args, false);

    const fieldsToReturn = Object.keys(teamModel.toDatabaseObject());
    const result = await ctx.Services.TeamService.create(teamModel, fieldsToReturn);
    const returnedFields = result[0];

    return Object.assign(new Team(returnedFields));
  },
};

const deleteTeam = {
  args: {
    id: { type: GraphQLID },
  },
  type: TeamType,
  async resolve(root: any, args: any, ctx: Context<any>) {
    await ctx.Services.TeamService.delete(args.id);
  },
};

const updateTeam = {
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    teamName: { type: new GraphQLNonNull(GraphQLString) },
  },
  type: TeamType,
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
