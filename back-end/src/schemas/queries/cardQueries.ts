import { Card } from './../../models/cardModel';
import { GraphQLInt } from 'graphql';
import Context from '../../context';
import CardType from '../types/cardType';
import CardListType from '../types/cardListType';

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

const findByListId = {
  args: {
    id: { type: GraphQLInt },
  },
  type: CardListType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<any> {
    const cards = await ctx.Services.CardService.findByListId(args.id);
    return {cards};
  },
};

export default {
  findById,
  findByListId,
};
