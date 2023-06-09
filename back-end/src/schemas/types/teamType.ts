import { Team } from './../../models/teamModel';
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import BoardType from './boardType';
import Context from '../../context';

// tslint:disable-next-line
const TeamType = new GraphQLObjectType({
  description: 'A single team.',
  fields: {
    id: { type: GraphQLID },
    teamName: { type: GraphQLString },
    boards: {
      type: new GraphQLList(BoardType),
      async resolve(source: Team, args: any, ctx: Context<any>) {
        if(Object.keys(source).length !== 0) {
          const boards = await ctx.Services.BoardService.findByTeamId(
            source.getId(),
          );
          return boards;
        }
        return null;
      },
    },
  },
  name: 'Team',
});

export default TeamType;
