import * as React from 'react';

import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Icon, IconSize } from '../Icon/Icon';
import { Padding } from '../Padding/Padding';
import { Card, ICardProps } from '../Card/Card';
import { Dialog } from '../Dialog/Dialog';
import { CardDetail } from '../CardDetail/CardDetail';

export interface ICardListProps {
  theme?: any;
  cards: any[];
  listName: string;
}

export interface ICardListState {
  card: ICardProps;
  showDialog: boolean;
}

const headerCss = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export class CardList extends React.Component<ICardListProps, ICardListState> {
  public state = { showDialog: false, card: { cardName: '' } };

  public renderCards = (cards: any) => {
    if (cards.length > 0) {
      return cards.map((card: any, index: number) => (
        <Card
          key={card.cardName + index}
          cardName={card.cardName}
          commentsCount={card.commentsCount}
          colorMark={card.colorMark}
          onClick={this.toggleDilog(!this.state.showDialog, card)}
          partisipants={card.partisipants}
        />
      ));
    }

    return null;
  };

  public handleCloseModal = () => {
    this.setState({
      showDialog: false,
    });
  };

  public render() {
    const { listName, cards } = this.props;

    return (
      <div className={wrapperCss}>
        <div className={cardCss}>
          <div className={headerCss}>
            <Text
              fontSize={TextSize.Medium}
              color="#17394d"
              weight={TextWeight.Bold}
            >
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
              transparent
            />
            <Dialog
              onClose={this.handleCloseModal}
              visible={this.state.showDialog}
              title={
                <Text
                  fontSize={TextSize.MmmmmegaBig}
                  weight={TextWeight.Bold}
                  color="#17394d"
                >
                  {this.state.card.cardName}
                </Text>
              }
              fullScreen
            >
              <CardDetail card={this.state.card} />
            </Dialog>
          </div>
          <div style={{ padding: '0 0.7rem 0', color: '#17394d' }}>
            {this.renderCards(cards)}
          </div>
          <Button
            size={ButtonSize.Default}
            transparent
            block
            icon={<Icon name="add" color="#6b808c" size={IconSize.Default} />}
          >
            <Padding padding="0 13rem 0 0">
              <Text
                fontSize={TextSize.Medium}
                color="#6b808c"
                weight={TextWeight.Medium}
              >
                Add a card
              </Text>
            </Padding>
          </Button>
        </div>
      </div>
    );
  }

  private toggleDilog = (value: boolean, card: ICardProps) => () => {
    this.setState({ showDialog: value, card: card });
  };
}
