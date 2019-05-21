import * as React from 'react';

import { css, keyframes } from 'emotion';
import { withTheme } from 'emotion-theming';
import { Button, ButtonSize } from '../components/core/Button/Button';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Margin } from '../components/core/Margin/Margin';

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  90% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  90% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const headerWrapper = css`
  position: relative;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 121, 191, 0.8),
      rgba(2, 106, 167, 0.8)
    ),
    url('../images/index-background.jpg');
  background-size: cover;
  background-position: top;
`;

const textWrapper = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const headingPrimary = css`
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 5rem;
  backface-visibility: hidden;
  text-align: center;
`;

const headingPrimaryMain = css`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.3rem;
  animation: ${moveInLeft} 1s;
`;

const headingPrimarySub = css`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.7rem;
  animation: ${moveInRight} 1s;
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const buttonAnimation = css`
  animation: ${moveInBottom} 0.5s ease-in-out 0.75s;
  animation-fill-mode: backwards;
`;

// @ts-ignore
@withTheme
export default class Home extends React.Component {
  public render() {
    return (
      <div className={headerWrapper}>
        <div className={textWrapper}>
          <Text component="h1" className={headingPrimary}>
            <Text component="span" className={headingPrimaryMain}>
              Huello
            </Text>
            <Text component="span" className={headingPrimarySub}>
              better then trello
            </Text>
          </Text>
          <div className={buttonWrapper}>
            <Margin margin="0 1.5rem 0 0">
              <Button
                size={ButtonSize.Big}
                color="#61BD4F"
                className={buttonAnimation}
              >
                <Text
                  component="span"
                  fontSize={TextSize.Big}
                  color="#fff"
                  weight={TextWeight.Medium}
                >
                  Sign in
                </Text>
              </Button>
            </Margin>
            <Margin margin="0 1.5rem 0 0">
              <Button
                size={ButtonSize.Big}
                color="#61BD4F"
                className={buttonAnimation}
              >
                <Text
                  component="span"
                  fontSize={TextSize.Big}
                  color="#fff"
                  weight={TextWeight.Medium}
                >
                  Sign up
                </Text>
              </Button>
            </Margin>
          </div>
        </div>
      </div>
    );
  }
}
