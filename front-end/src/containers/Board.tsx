import * as React from 'react';

import { css } from 'emotion';
import { Query } from 'react-apollo';
import { Header, HeaderVariants } from '../components/core/Header/Header';
import { Icon } from '../components/core/Icon/Icon';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Padding } from '../components/core/Padding/Padding';
import { Margin } from '../components/core/Margin/Margin';
import { Button, ButtonSize } from '../components/core/Button/Button';

import { globalCss } from '../styles/global';
import { BoardContent } from '../components/core/BoardContent/BoardContent';
import { GetBoardInfo } from '../graphql/queries/boardQueries';
import colors from '../styles/default/colors';
import { CardList } from './CardList';

globalCss();

const buttonDivider = css`
  float: left;
  border-left: 1px solid hsla(0, 0%, 100%, 0.2);
  height: 16px;
  margin: 8px 4px 0 0;
`;

export default class Board extends React.Component<{}> {
  public render() {
    return (
      <Query
        query={GetBoardInfo}
        variables={{
          id: Number.parseInt(this.props['match'].params.boardId),
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>LOADING.....</p>;
          if (error) return <p>ERROR</p>;

          const boardName = data.findBoardById.boardName;
          const lists = data.findBoardById.lists;

          return (
            <React.Fragment>
              <Margin margin="0.4rem">
                <Header variant={HeaderVariants.Transparent}>
                  <Margin margin="0 0.4rem 0 0">
                    <Button size={ButtonSize.Default} outline>
                      <Text
                        component="span"
                        fontSize={TextSize.Big}
                        color={colors.white}
                        weight={TextWeight.Bold}
                      >
                        {boardName}
                      </Text>
                    </Button>
                  </Margin>
                  <Margin margin="0 0.4rem 0 0">
                    <Button
                      size={ButtonSize.Default}
                      icon={<Icon name="star_border" color={colors.white} />}
                      outline
                    />
                  </Margin>
                  <span className={buttonDivider} />
                  <Margin margin="0 0.4rem 0 0">
                    <Button
                      size={ButtonSize.Default}
                      icon={<Icon name="android" color={colors.white} />}
                      outline
                    >
                      <Padding padding="0 0 0 1rem">
                        <Text fontSize={TextSize.Normal} color={colors.white}>
                          dream-team
                        </Text>
                      </Padding>
                    </Button>
                  </Margin>
                </Header>
              </Margin>
              <BoardContent>
                {lists &&
                  lists.length &&
                  lists.map(
                    (
                      list: { listName: string; cards: any[] },
                      index: string,
                    ) => (
                      <CardList
                        key={index + '_list_' + boardName}
                        listName={list.listName}
                        cards={list.cards}
                      />
                    ),
                  )}
              </BoardContent>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}
