import { Board } from './../../models/boardModel';
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import ListType from './listType';
import Context from '../../context';

const BoardType = new GraphQLObjectType({
  description: 'A single board.',
  fields: {
    boardName: { type: GraphQLString },
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    isClosed: { type: GraphQLBoolean },
    teamId: { type: GraphQLInt },
    lists: {
      type: new GraphQLList(ListType),
      async resolve(source: Board, args: any, ctx: Context<any>) {
        if (Object.keys(source).length !== 0) {
          const lists = await ctx.Services.ListService.findByBoardId(
            source.getId(),
          );
          return lists;
        }
        return null;
      },
    },
  },
  name: 'Board',
});

export default BoardType;
