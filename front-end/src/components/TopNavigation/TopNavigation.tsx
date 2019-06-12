import { css } from 'emotion';
import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../core/Button/Button';
import { Icon, IconSize } from '../core/Icon/Icon';
import { Header } from '../core/Header/Header';
import { Margin } from '../core/Margin/Margin';
import { Text, TextSize, TextWeight } from '../core/Text/Text';
import { URLS } from '../../consts/urls';
import colors from '../../styles/default/colors';

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

const linkCss = css`
  color: ${colors.white};
`;

/**
 * Main top navigation for auth user
 */
export class TopNavigation extends React.Component {
  public render() {
    return (
      <nav>
        <Header>
          <Margin margin="0 0.4rem 0 0">
            <Button
              size={ButtonSize.Big}
              icon={<Icon name="home" color="white" size={IconSize.Medium} />}
            />
          </Margin>
          <Margin margin="0 0.6rem 0 0">
            <Button size={ButtonSize.Big}>
              <Text
                component="span"
                fontSize={TextSize.Medium}
                color="white"
                weight={TextWeight.Bold}
              >
                <Link to={URLS.BOARDS} className={linkCss}>
                  Boards
                </Link>
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
              <Link to={URLS.PROFILE} className={linkCss}>
                Profile
              </Link>
            </Text>
          </Button>
        </Header>
      </nav>
    );
  }
}
