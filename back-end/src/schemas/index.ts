import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import TeamQuery from './queries/teamQueries';
import UserQuery from './queries/userQueries';
import BoardQuery from './queries/boardQueries';
import CardQuery from './queries/cardQueries';

import TeamMutation from './mutations/teamMutations';
import UserMutation from './mutations/userMutations';
import CardMutation from './mutations/cardMutations';
import ListMutation from './mutations/listMutations';

/**
 * Creating GraphQL schema
 *
 * @export
 * @class Schema
 */
export default class Schema {

  public static get(): GraphQLSchema {
    if (!Schema.instance) {
      Schema.instance = new Schema();
    }
    return Schema.instance.schema;
  }
  private static instance: Schema;

  private rootQuery: GraphQLObjectType = new GraphQLObjectType({
    fields: {
      findAllUsers: UserQuery.findAll,
      findUserByEmail: UserQuery.findByEmail,
      findUserById: UserQuery.findById,

      findAllTeams: TeamQuery.findAll,
      findTeamById: TeamQuery.findById,
      findTeamByTeamName: TeamQuery.findByTeamName,

      findBoardById: BoardQuery.findById,

      findCardById: CardQuery.findById,
      finCardsByListId: CardQuery.findByListId
    },
    name: 'Query',
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    fields: {
      createUser: UserMutation.createUser,
      deleteUser: UserMutation.deleteUser,
      loginUser: UserMutation.login,
      updateUser: UserMutation.updateUser,

      createTeam: TeamMutation.createTeam,
      deleteTeam: TeamMutation.deleteTeam,
      updateTeam: TeamMutation.updateTeam,
      
      createCard: CardMutation.createCard,

      createList: ListMutation.createList
    },
    name: 'Mutation',
  });

  private schema: GraphQLSchema = new GraphQLSchema({
    mutation: this.rootMutation,
    query: this.rootQuery,
  });
}
