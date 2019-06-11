import * as React from 'react';

import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Icon, IconSize } from '../Icon/Icon';
import { Padding } from '../Padding/Padding';
import { Card, ICardProps } from '../Card/Card';
import { Dialog } from '../Dialog/Dialog';
import { Margin } from '../Margin/Margin';
import { Input, InputTypes, InputVariants } from '../Input/Input';

export interface ICardListProps {
  theme?: any;
  cards?: any[];
  listName?: string;
}

export interface ICardListState {
  card: ICardProps;
  showDialog: boolean;
  showCardInput: boolean;
  inputValue: string;
}

const headerCss = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  public state = {
    showDialog: false,
    card: { cardName: '', about: '' },
    showCardInput: false,
    inputValue: '',
  };

  public render() {
    const { listName, cards } = this.props;
    const { showCardInput } = this.state;

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
          </div>
          <div style={{ padding: '0 0.7rem 0.7rem', color: '#17394d' }}>
            {this.renderCards(cards)}
            {showCardInput && (
              <form onSubmit={this.handleSubmit}>
                <Card
                  cardName={
                    <Input
                      name="newCard"
                      placeholder="Enter new card name"
                      type={InputTypes.Text}
                      variant={InputVariants.Default}
                      onChange={this.handleInputChange}
                    />
                  }
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Margin margin="0 1.3rem 0 0">
                    <Button type="submit" size={ButtonSize.Big} color="#5aac44">
                      <Text
                        component="span"
                        fontSize={TextSize.Normal}
                        color="#fff"
                        weight={TextWeight.Bold}
                      >
                        Create card
                      </Text>
                    </Button>
                  </Margin>
                  <Icon
                    onClick={this.showNewCardForm(false)}
                    size={IconSize.Big}
                    name="close"
                    color="gray"
                  />
                </div>
              </form>
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
        </div>
      </div>
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

  private handleSubmit = () => {
    console.log(this.state.inputValue);
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  private toggleDilog = (value: boolean, card: ICardProps) => () => {
    this.setState({ showDialog: value, card: card });
  };

  private showNewCardForm = (value: boolean) => () => {
    this.setState({ showCardInput: value });
  };
}
