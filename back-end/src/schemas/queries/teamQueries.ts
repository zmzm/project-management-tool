import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import Context from '../../context';
import { Team } from '../../models/teamModel';
import TeamType from '../types/teamType';

const findAll = {
  type: new GraphQLList(TeamType),
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Team[]> {
    const teams = await ctx.Services.TeamService.findAll();
    return teams.map((team) => new Team(team));
  },
};

const findById = {
  args: {
    id: { type: GraphQLInt },
  },
  type: TeamType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Team> {
    const team = await ctx.Services.TeamService.findById(args.id);
    return new Team(team);
  },
};

const findByTeamName = {
  args: {
    teamName: { type: GraphQLString },
  },
  type: TeamType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Team> {
    const team = await ctx.Services.TeamService.findByTeamName(args.teamName);
    return team;
  },
};

export default {
  findAll,
  findById,
  findByTeamName,
};
