import * as React from 'react';
import { Query } from 'react-apollo';
import { Switch } from 'react-router-dom';
import { GetUserInfo } from '../graphql/queries/userQueries';
import { StorageHelper } from '../utils/localStorage';
import { TopNavigation } from '../components/TopNavigation/TopNavigation';
import { URLS } from '../consts/urls';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import Home from './Home';
import Board from './Board';

export default class Authorized extends React.Component {
  public render() {
    const userFromStorage = StorageHelper.get('user');
    const userId = this.props['location'].state
      ? Number.parseInt(this.props['location'].state.user.id)
      : userFromStorage && Number.parseInt(userFromStorage.id);

    return (
      <Query
        query={GetUserInfo}
        variables={{
          id: userId,
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>LOADING.....</p>;
          if (error) return <p>ERROR</p>;

          return (
            <div>
              <TopNavigation />
              <main>
                <Switch>
                  <PrivateRoute path={URLS.BOARD} component={Board} />
                  <PrivateRoute path={URLS.HOME} component={Home} />
                </Switch>
              </main>
            </div>
          );
        }}
      </Query>
    );
  }
}
