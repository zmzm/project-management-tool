import * as React from 'react';

import { css } from 'emotion';
import { Header, HeaderVariants } from '../components/core/Header/Header';
import { Icon, IconSize } from '../components/core/Icon/Icon';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Padding } from '../components/core/Padding/Padding';
import { Margin } from '../components/core/Margin/Margin';
import { Button, ButtonSize } from '../components/core/Button/Button';

import { globalCss } from '../themes/global';
import { CardList } from '../components/core/CardList/CardList';
import { BoardContent } from '../components/core/BoardContent/BoardContent';

globalCss();

const logoCss = css`
  color: white;
  position absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2.5rem;
  cursor: pointer;
  background-image: url("images/LOGO.png");
  background-size: 15rem 3.7rem;
  width: 15rem;
  height: 3.7rem;
`;

const buttonDivider = css`
  float: left;
  border-left: 1px solid hsla(0, 0%, 100%, 0.2);
  height: 16px;
  margin: 8px 4px 0 0;
`;

export default class Board extends React.Component<{}> {
  public state = {
    cards: [
      {
        cardName: 'Test card 1',
        commentsCount: 10,
        colorMark: [
          '#61bd4f',
          '#f2d600',
          '#ff9f1a',
          '#eb5a46',
          '#c377e0',
          '#0079bf',
        ],
        partisipants: ['SU', 'KA', 'BL', 'AT'],
        detail: 'No description :(',
      },
      { cardName: 'card 2' },
    ],
  };

  public render() {
    return (
      <React.Fragment>
        <Header>
          <Margin margin="0 0.4rem 0 0">
            <Button
              size={ButtonSize.Big}
              icon={<Icon name="home" color="white" size={IconSize.Medium} />}
            />
          </Margin>
          <Margin margin="0 0.4rem 0 0">
            <Button size={ButtonSize.Big}>
              <Text
                component="span"
                fontSize={TextSize.Medium}
                color="white"
                weight={TextWeight.Bold}
              >
                Boards
              </Text>
            </Button>
          </Margin>
          <div className={logoCss} />
          <Button size={ButtonSize.Big}>
            <Text
              component="span"
              fontSize={TextSize.Medium}
              color="white"
              weight={TextWeight.Bold}
            >
              Profile
            </Text>
          </Button>
        </Header>
        <Margin margin="0.4rem">
          <Header variant={HeaderVariants.Transparent}>
            <Margin margin="0 0.4rem 0 0">
              <Button size={ButtonSize.Default} outline>
                <Text
                  component="span"
                  fontSize={TextSize.Big}
                  color="white"
                  weight={TextWeight.Bold}
                >
                  Test
                </Text>
              </Button>
            </Margin>
            <Margin margin="0 0.4rem 0 0">
              <Button
                size={ButtonSize.Default}
                icon={<Icon name="star_border" color="white" />}
                outline
              />
            </Margin>
            <span className={buttonDivider} />
            <Margin margin="0 0.4rem 0 0">
              <Button
                size={ButtonSize.Default}
                icon={<Icon name="android" color="white" />}
                outline
              >
                <Padding padding="0 0 0 1rem">
                  <Text fontSize={TextSize.Normal} color="white">
                    dream-team
                  </Text>
                </Padding>
              </Button>
            </Margin>
          </Header>
        </Margin>
        <BoardContent>
          <CardList listName="In progress" cards={this.state.cards} />
        </BoardContent>
      </React.Fragment>
    );
  }
}
