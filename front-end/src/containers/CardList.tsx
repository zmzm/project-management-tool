import * as React from 'react';

import { Mutation, Query } from 'react-apollo';
import { Card, ICardProps } from '../components/core/Card/Card';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Dialog } from '../components/core/Dialog/Dialog';
import { Margin } from '../components/core/Margin/Margin';
import { CreateCardMutation } from '../graphql/mutations/cardMutations';
import { List } from '../components/core/List/List';
import { Button, ButtonSize } from '../components/core/Button/Button';
import { Icon, IconSize } from '../components/core/Icon/Icon';
import { Padding } from '../components/core/Padding/Padding';
import colors from '../styles/default/colors';
import { CreateCard } from '../components/core/CreateCard/CreateCard';
import { GetCardsByList } from '../graphql/queries/cardQueries';

export interface ICardListProps {
  theme?: any;
  listName: string;
  id: number;
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
    const { listName, id } = this.props;
    const { showCardInput } = this.state;

    return (
      <Query
        query={GetCardsByList}
        variables={{
          id: +id,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>LOADING.....</p>;
          if (error) return <p>ERROR</p>;

          const responseCards = data.finCardsByListId.cards;

          return (
            <Mutation
              mutation={CreateCardMutation}
              update={(cache, { data: { createCard } }) => {
                const {
                  finCardsByListId: { cards },
                } = cache.readQuery({
                  query: GetCardsByList,
                  variables: { id: +id },
                });
                cache.writeQuery({
                  query: GetCardsByList,
                  variables: { id: +id },
                  data: {
                    finCardsByListId: {
                      cards: cards.concat([createCard]),
                      __typename: 'CardList',
                    },
                  },
                });
              }}
            >
              {createCard => {
                return (
                  <React.Fragment>
                    <Dialog
                      onClose={this.handleCloseModal}
                      visible={this.state.showDialog}
                      title={
                        <Text
                          fontSize={TextSize.Big}
                          weight={TextWeight.Bold}
                          color={colors.veryDarkBlue}
                        >
                          {this.state.card.cardName}
                        </Text>
                      }
                      fullScreen
                    >
                      <Margin margin="2rem">
                        <Text fontSize={TextSize.Medium}>
                          {this.state.card.about}
                        </Text>
                      </Margin>
                    </Dialog>
                    <List listName={listName}>
                      <div
                        style={{ padding: '0 0.7rem 0.7rem', color: '#17394d' }}
                      >
                        {this.renderCards(responseCards)}
                        {showCardInput && (
                          <CreateCard
                            handleSubmit={value => {
                              createCard({
                                variables: {
                                  cardName: value,
                                  about: '',
                                  listId: +id,
                                },
                              });
                            }}
                            showForm={this.showNewCardForm}
                          />
                        )}
                      </div>
                      <Button
                        size={ButtonSize.Default}
                        transparent
                        block
                        icon={
                          <Icon
                            name="add"
                            color={colors.darkGrayishBlue}
                            size={IconSize.Default}
                          />
                        }
                        onClick={this.showNewCardForm(true)}
                      >
                        <Padding padding="0 13rem 0 0">
                          <Text
                            fontSize={TextSize.Medium}
                            color={colors.darkGrayishBlue}
                            weight={TextWeight.Medium}
                          >
                            Add a card
                          </Text>
                        </Padding>
                      </Button>
                    </List>
                  </React.Fragment>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
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

  private toggleDilog = (value: boolean, card: ICardProps) => () => {
    this.setState({ showDialog: value, card: card });
  };

  private showNewCardForm = (value: boolean) => () => {
    this.setState({ showCardInput: value });
  };
}
