import { Board } from './../../models/boardModel';
import { GraphQLInt } from "graphql";
import BoardType from "../types/boardType";
import Context from "../../context";

const findById = {
  args: {
    id: { type: GraphQLInt },
  },
  type: BoardType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Board> {
    const board = await ctx.Services.BoardService.findById(args.id);
    return new Board(board);
  },
};

export default {
  findById,
};