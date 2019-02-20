import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// tslint:disable-next-line
const TeamType = new GraphQLObjectType({
  description: 'A single team.',
  fields: {
    id: { type: GraphQLID },
    teamName: { type: GraphQLString },
  },
  name: 'Team',
});

export default TeamType;
