import * as React from 'react';

import { Header, HeaderVariants } from './core/Header/Header';
import { Icon, IconSize } from './core/Icon/Icon';
import { Text, TextWeight } from './core/Text/Text';
import { Padding } from './core/Padding/Padding';
import { Margin } from './core/Margin/Margin';
import { Button, ButtonSize } from './core/Button/Button';

import { css } from 'emotion';
import { globalCss } from '../themes/global';
import { CardList } from './core/CardList/CardList';
import { BoardContent } from './core/BoardContent/BoardContent';

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
  border-left: 1px solid hsla(0,0%,100%,.2);
  height: 16px;
  margin: 8px 4px 0 0;
`;

export default class App extends React.Component<{}> {
  public state = {
    cards: [
      {cardName: 'card 1', commentCount: 10, colorMark: ['#f2d600', 'red', 'green', 'pink', 'coral', 'aqua']},
      {cardName: 'card 2'},
    ],
  };

  public render() {
    return (
      <React.Fragment>
        <Header>
          <Margin margin='0 0.4rem 0 0'>
            <Button size={ButtonSize.Big } icon={<Icon name='home' color='white' size={IconSize.Medium} />} />
          </Margin>
          <Margin margin='0 0.4rem 0 0'>
            <Button size={ButtonSize.Big} >
              <Text component='span' fontSize='1.6' color='white' weight={TextWeight.Bold}>Boards</Text>
            </Button>
          </Margin>
          <div className={logoCss} />
          <Button size={ButtonSize.Big} >
            <Text component='span' fontSize='1.6' color='white' weight={TextWeight.Bold}>Profile</Text>
          </Button>
        </Header>
        <Margin margin='0.4rem'>
          <Header variant={HeaderVariants.Transparent}>
            <Margin margin='0 0.4rem 0 0'>
              <Button size={ButtonSize.Default} outline >
                <Text component='span' fontSize='1.8' color='white' weight={TextWeight.Bold}>Test</Text>
              </Button>
            </Margin>
            <Margin margin='0 0.4rem 0 0'>
              <Button size={ButtonSize.Default} icon={<Icon name='star_border' color='white' />} outline />
            </Margin>
            <span className={buttonDivider} />
            <Margin margin='0 0.4rem 0 0'>
              <Button size={ButtonSize.Default} icon={<Icon name='android' left='13' color='white' />} outline>
                <Padding padding='0 0 0 2.3rem'>
                  <Text fontSize='1.5' color='white'>dream-team</Text>
                </Padding>
              </Button>
            </Margin>
          </Header>
        </Margin>
        <BoardContent>
          <CardList listName='List name' cards={this.state.cards} />
        </BoardContent>
      </React.Fragment>
    );
  }
}
