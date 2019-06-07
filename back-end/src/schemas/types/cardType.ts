import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import CommentType from './commentType';
import Context from '../../context';
import { Card } from '../../models/cardModel';

const CardType = new GraphQLObjectType({
  description: 'A single card.',
  fields: {
    about: { type: GraphQLString },
    cardName: { type: GraphQLString },
    comments: {
      type: new GraphQLList(CommentType),
      async resolve(source: Card, args: any, ctx: Context<any>) {
        if (Object.keys(source).length !== 0) {
          const cards = await ctx.Services.CommentService.findByCardId(
            source.getId(),
          );
          return cards;
        }
        return null;
      },
    },
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    listId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    marks: {type: new GraphQLList(GraphQLString)}
  },
  name: 'Card',
});

export default CardType;
