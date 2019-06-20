import { css } from 'emotion';
import * as React from 'react';
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

const homeIconCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.3rem;
  background-color: hsla(0, 0%, 100%, 0.2);
  padding: 0 0.65rem;
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
            <div className={homeIconCss}>
              <Link to={URLS.HOME}>
                <Icon name="home" color={colors.white} size={IconSize.Medium} />
              </Link>
            </div>
          </Margin>
          <Margin margin="0 0.6rem 0 0">
            <Button size={ButtonSize.Big}>
              <Text
                component="span"
                fontSize={TextSize.Normal}
                color={colors.white}
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
              fontSize={TextSize.Normal}
              color={colors.white}
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
