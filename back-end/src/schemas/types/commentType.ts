import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const CommentType = new GraphQLObjectType({
  description: 'A single comment.',
  fields: {
    cardId: { type: GraphQLInt },
    commentText: { type: GraphQLString },
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    userId: { type: GraphQLInt },
  },
  name: 'Comment',
});

export default CommentType;
