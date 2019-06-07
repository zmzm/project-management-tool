import CardType from '../types/cardType';
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import Context from '../../context';
import { Card } from '../../models/cardModel';

const createCard = {
  args: {
    cardName: { type: GraphQLString },
    about: { type: GraphQLString },
    userId: { type: GraphQLInt },
    listId: { type: GraphQLInt },
    marks: { type: new GraphQLList(GraphQLString) },
  },
  type: CardType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<Card> {
    try {
      const tempCard = new Card(args, false);
      const result = await ctx.Services.CardService.create(tempCard);

      return new Card(result);
    } catch (err) {
      throw err;
    }
  },
};

export default {
  createCard,
};
