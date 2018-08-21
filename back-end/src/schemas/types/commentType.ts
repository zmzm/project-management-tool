import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'A single comment.',
  fields: {
    id: { type: GraphQLID },
    commentText: { type: GraphQLString },
    userId: { type: GraphQLInt },
    cardId: { type: GraphQLInt },
    created: { type: GraphQLString },
  },
});

export default CommentType;
