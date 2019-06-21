import { GraphQLString, GraphQLInt } from 'graphql';
import Context from '../../context';
import ListType from '../types/listType';
import { List } from '../../models/listModel';

const createList = {
  args: {
    listName: { type: GraphQLString },
    boardId: { type: GraphQLInt },
  },
  type: ListType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<List> {
    try {
      const tempList = new List(args, false);
      const result = await ctx.Services.ListService.create(tempList);

      return new List(result);
    } catch (err) {
      throw err;
    }
  },
};

export default {
  createList,
};
