import * as React from 'react';

import { withTheme } from 'emotion-theming';
import { Card, ICardProps } from '../components/core/Card/Card';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Dialog } from '../components/core/Dialog/Dialog';
import { Margin } from '../components/core/Margin/Margin';
import { CreateCard } from '../components/core/CreateCard/CreateCard';
import { List } from '../components/core/List/List';
import { Button, ButtonSize } from '../components/core/Button/Button';
import { Icon, IconSize } from '../components/core/Icon/Icon';
import { Padding } from '../components/core/Padding/Padding';

export interface ICardListProps {
  theme?: any;
  cards?: any[];
  listName?: string;
}

export interface ICardListState {
  card: ICardProps;
  showDialog: boolean;
  showCardInput: boolean;
}

export class CardList extends React.Component<ICardListProps, ICardListState> {
  public state = {
    showDialog: false,
    card: { cardName: '', about: '' },
    showCardInput: false,
  };

  public render() {
    const { listName, cards } = this.props;
    const { showCardInput } = this.state;

    return (
      <React.Fragment>
        <Dialog
          onClose={this.handleCloseModal}
          visible={this.state.showDialog}
          title={
            <Text
              fontSize={TextSize.Big}
              weight={TextWeight.Bold}
              color="#17394d"
            >
              {this.state.card.cardName}
            </Text>
          }
          fullScreen
        >
          <Margin margin="2rem">
            <Text fontSize={TextSize.Medium}>{this.state.card.about}</Text>
          </Margin>
        </Dialog>
        <List listName={listName}>
          <div style={{ padding: '0 0.7rem 0.7rem', color: '#17394d' }}>
            {this.renderCards(cards)}
            {showCardInput && (
              <CreateCard
                handleSubmit={this.handleSubmit}
                showForm={this.showNewCardForm}
              />
            )}
          </div>
          <Button
            size={ButtonSize.Default}
            transparent
            block
            icon={<Icon name="add" color="#6b808c" size={IconSize.Default} />}
            onClick={this.showNewCardForm(true)}
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
        </List>
      </React.Fragment>
    );
  }

  private renderCards = (cards: any) => {
    if (cards.length > 0) {
      return cards.map((card: any, index: number) => (
        <Card
          key={card.cardName + index}
          cardName={
            <Text fontSize={TextSize.Small} weight={TextWeight.Medium}>
              {card.cardName}
            </Text>
          }
          commentsCount={card.comments.length}
          labels={card.labels}
          assignedUsers={['UK', 'SK']}
          onClick={this.toggleDilog(!this.state.showDialog, card)}
        />
      ));
    }

    return null;
  };

  private handleCloseModal = () => {
    this.setState({
      showDialog: false,
    });
  };

  private handleSubmit = value => {
    console.log(value);
  };

  private toggleDilog = (value: boolean, card: ICardProps) => () => {
    this.setState({ showDialog: value, card: card });
  };

  private showNewCardForm = (value: boolean) => () => {
    this.setState({ showCardInput: value });
  };
}
