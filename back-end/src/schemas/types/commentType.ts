import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import DateType from './dateType';

const CommentType = new GraphQLObjectType({
  description: 'A single comment.',
  fields: {
    cardId: { type: GraphQLInt },
    commentText: { type: GraphQLString },
    created: { type: DateType },
    id: { type: GraphQLID },
    userId: { type: GraphQLInt },
  },
  name: 'Comment',
});

export default CommentType;
