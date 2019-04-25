import * as React from 'react';

import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import { Text, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Icon, IconSize } from '../Icon/Icon';
import { Padding } from '../Padding/Padding';
import { Card } from '../Card/Card';
import { Dialog } from '../Dialog/Dialog';

export interface ICardListProps {
  theme?: any;
  cards: any[];
  listName: string;
}

const headerCss = css`
  position: relative;
  display: flex;
  padding: 0.7rem 0.7rem 0.4rem 1rem;
`;

const cardCss = css`
  background-color: #dfe3e6;
  border-radius: 0.3rem;
`;

const wrapperCss = css`
  margin: 0.5rem;
  height: 100%;
  width: 26rem;
  display: inline-block;
  cursor: pointer;
`;

// @ts-ignore
@withTheme
export class CardList extends React.PureComponent<ICardListProps> {
  public state = { showDialog: false };

  public renderCards = cards => {
    if (cards.length > 0) {
      return cards.map((card, index) => (
        <Card
          key={card.cardName + index}
          cardName={card.cardName}
          commentsCount={card.commentsCount}
          colorMark={card.colorMark}
        />
      ));
    }

    return null;
  };

  public render() {
    const { listName, cards } = this.props;

    return (
      <div className={wrapperCss}>
        <div className={cardCss}>
          <div className={headerCss}>
            <Text fontSize="1.6" color="#17394d" weight={TextWeight.Bold}>
              {listName}
            </Text>
            <Button
              size={ButtonSize.Default}
              icon={
                <Icon
                  name="more_horiz"
                  color="#798d99"
                  size={IconSize.Default}
                />
              }
              onClick={this.toggleDilog(!this.state.showDialog)}
              transparent
            />
            <Dialog visible={this.state.showDialog}>
              <Text fontSize="1.6">ASDASDADADADSAHSHJASL</Text>
            </Dialog>
          </div>
          <div style={{ padding: '0 0.7rem 0', color: '#17394d' }}>
            {this.renderCards(cards)}
          </div>
          <Button
            size={ButtonSize.Default}
            transparent
            block
            icon={
              <Icon
                name="add"
                left="7"
                color="#6b808c"
                size={IconSize.Default}
              />
            }
          >
            <Padding padding="0 13rem 0 0">
              <Text fontSize="1.6" color="#6b808c" weight={TextWeight.Medium}>
                Add a card
              </Text>
            </Padding>
          </Button>
        </div>
      </div>
    );
  }

  private toggleDilog = value => () => {
    this.setState({ showDialog: value });
  };
}
