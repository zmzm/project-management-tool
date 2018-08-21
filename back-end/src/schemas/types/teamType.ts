import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const TeamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A single team.',
  fields: {
    id: { type: GraphQLID },
    teamName: { type: GraphQLString },
  },
});

export default TeamType;
