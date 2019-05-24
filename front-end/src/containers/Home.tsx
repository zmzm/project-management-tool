import * as React from 'react';
import { css } from 'emotion';
import { Header } from '../components/core/Header/Header';
import { Margin } from '../components/core/Margin/Margin';
import { Button, ButtonSize } from '../components/core/Button/Button';
import { Icon, IconSize } from '../components/core/Icon/Icon';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { PageSection } from '../components/core/PageSection/PageSection';
import { Padding } from '../components/core/Padding/Padding';
import { Card } from '../components/core/Card/Card';

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

const pageSectionCss = css`
  background: #fafbfc;
  min-height: calc(100vh - 43px);
`;

const cardCss = css`
  cursor: pointer;
  color: #fff;
  background-color: #0079bf;
  max-width: 20rem;

  &:hover {
    background-color: #006198;
  }
`;

export default class Home extends React.Component {
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
          <Margin margin="0 0.6rem 0 0">
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
        <PageSection className={pageSectionCss}>
          <Padding padding="3rem 0 1rem 3rem">
            <Text
              component="h1"
              fontSize="2"
              color="#172b4d"
              weight={TextWeight.Bold}
            >
              Boards
            </Text>
          </Padding>
          <Padding padding="0 0 0 3rem">
            <Card
              className={cardCss}
              cardName={
                <Text fontSize={TextSize.Big} weight={TextWeight.Bold}>
                  Test
                </Text>
              }
            />
          </Padding>
        </PageSection>
      </React.Fragment>
    );
  }
}
