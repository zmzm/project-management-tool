import { List } from './../../models/listModel';
import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import CardType from './cardType';
import Context from '../../context';

// tslint:disable-next-line
const ListType = new GraphQLObjectType({
  description: 'A single list.',
  fields: {
    boardId: { type: GraphQLInt },
    id: { type: GraphQLID },
    listName: { type: GraphQLString },
    cards: {
      type: new GraphQLList(CardType),
      async resolve(source: List, args: any, ctx: Context<any>) {
        if (Object.keys(source).length !== 0) {
          const cards = await ctx.Services.CardService.findByListId(
            source.getId(),
          );
          return cards;
        }
        return null;
      },
    },
  },
  name: 'List',
});

export default ListType;
