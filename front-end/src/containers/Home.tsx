import * as React from 'react';
import { css } from 'emotion';
import { Query } from 'react-apollo';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { PageSection } from '../components/core/PageSection/PageSection';
import { Padding } from '../components/core/Padding/Padding';
import { Card } from '../components/core/Card/Card';
import { GetUserInfo } from '../graphql/queries/userQueries';
import { StorageHelper } from '../utils/localStorage';
import colors from '../styles/default/colors';
import IBoard from '../interfaces/BoardInterface';

const pageSectionCss = css`
  background: ${colors.veryLightGray};
  min-height: calc(100vh - 43px);
`;

const boardsRowCss = css`
  padding: 0 0 1.5rem 3rem;
  display: flex;
  flex-direction: row;
`;

const cardCss = css`
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.strongBlue};
  width: 17rem;
  margin: 0 2% 0 0;

  &:hover {
    background-color: ${colors.blueDark};
  }
`;

export default class Home extends React.Component {
  public renderBoards(boards: IBoard[]) {
    return boards.map((board: IBoard, index: number) => (
      <Card
        key={`${board.boardName}_${index}`}
        className={cardCss}
        cardName={
          <Text fontSize={TextSize.Big} weight={TextWeight.Bold}>
            {board.boardName}
          </Text>
        }
      />
    ));
  }

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

          const team = data.findUserById.team;
          const teamBoards = data.findUserById.team.boards || [];
          const personalBoards = data.findUserById.personalBoards || [];

          return (
            <PageSection className={pageSectionCss}>
              <Padding padding="3rem 0 1rem 3rem">
                <Text
                  component="h1"
                  fontSize="2"
                  color={colors.veryDarkBlue}
                  weight={TextWeight.Bold}
                >
                  Personal boards
                </Text>
              </Padding>
              <PageSection className={boardsRowCss}>
                {this.renderBoards(personalBoards)}
              </PageSection>
              {team.teamName && (
                <React.Fragment>
                  <Padding padding="3rem 0 1rem 3rem">
                    <Text
                      component="h1"
                      fontSize="2"
                      color={colors.veryDarkBlue}
                      weight={TextWeight.Bold}
                    >
                      <em>{team.teamName}</em> boards
                    </Text>
                  </Padding>
                  <PageSection className={boardsRowCss}>
                    {this.renderBoards(teamBoards)}
                  </PageSection>
                </React.Fragment>
              )}
            </PageSection>
          );
        }}
      </Query>
    );
  }
}
