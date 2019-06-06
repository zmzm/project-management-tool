import { Card } from './../../models/cardModel';
import { GraphQLInt } from 'graphql';
import Context from '../../context';
import CardType from '../types/cardType';

const findById = {
  args: {
    id: { type: GraphQLInt },
  },
  type: CardType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Card> {
    const board = await ctx.Services.CardService.findById(args.id);
    return new Card(board);
  },
};

export default {
  findById,
};
