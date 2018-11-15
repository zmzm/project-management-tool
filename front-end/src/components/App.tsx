import * as React from 'react';

import { Header, HeaderVariants } from './core/Header/Header';
import { Icon } from './core/Icon/Icon';
import { Text } from './core/Text/Text';
import { Padding } from './core/Padding/Padding';
import { Margin } from './core/Margin/Margin';
import { Button } from './core/Button/Button';

import { css } from 'react-emotion';
import { globalCss } from '../themes/global';

globalCss();

const logoCss = css`
  color: white;
  position absolute;
  left: 50%;
  transform: translate(-50%, -10%);
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

const App: React.SFC<{}> = () => (
  <React.Fragment>
    <Header>
      <Margin margin='0 0.4rem 0 0'>
        <Button size='3' >
          <Icon name='home' color='white' />
        </Button>
      </Margin>
      <Margin margin='0 0.4rem 0 0'>
        <Button size='3' >
          <Padding padding='0 0.6rem'>
            <Text component='span' size='1.5' color='white'>Boards</Text>
          </Padding>
        </Button>
      </Margin>
      <div className={logoCss} />
      <Button size='3' >
        <Padding padding='0 0.6rem'>
          <Text size='1.5' color='white'>Profile</Text>
        </Padding>
      </Button>
    </Header>
    <Header variant={HeaderVariants.Transparent}>
      <Margin margin='0 0.4rem 0 0'>
        <Button float='left' size='2' outline >
          <Padding padding='0.7rem'>
            <Text component='span' size='1.8' color='white'>Test</Text>
          </Padding>
        </Button>
      </Margin>
      <Margin margin='0 0.4rem 0 0'>
        <Button size='2' className={css`padding: 0.7rem;`} outline >
          <Padding padding='1rem'>
            <Icon name='star_border' color='white' />
          </Padding>
        </Button>
      </Margin>
      <span className={buttonDivider} />
    </Header>
  </React.Fragment>
);

export default App;
