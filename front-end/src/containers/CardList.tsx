import * as React from 'react';

import { Mutation, Query } from 'react-apollo';
import { Card } from '../components/core/Card/Card';
import { Text, TextSize, TextWeight } from '../components/core/Text/Text';
import { Dialog } from '../components/core/Dialog/Dialog';
import { CreateCardMutation } from '../graphql/mutations/cardMutations';
import { List } from '../components/core/List/List';
import { Button, ButtonSize } from '../components/core/Button/Button';
import { Icon, IconSize } from '../components/core/Icon/Icon';
import { Padding } from '../components/core/Padding/Padding';
import colors from '../styles/default/colors';
import { CreateCard } from '../components/core/CreateCard/CreateCard';
import { GetCardsByList } from '../graphql/queries/cardQueries';
import { ICONS } from '../consts/icons';
import { CardDetail } from '../components/core/CardDetail/CardDetail';
import ICard from '../interfaces/ICard';

export interface ICardListProps {
  theme?: any;
  listName: string;
  id: number;
}

export interface ICardListState {
  card: ICard;
  showDialog: boolean;
  showCardInput: boolean;
}

export class CardList extends React.Component<ICardListProps, ICardListState> {
  public state = {
    showDialog: false,
    card: {
      about: '',
      cardName: '',
      id: '',
      labels: [],
      partisipants: [],
      comments: [],
    },
    showCardInput: false,
  };

  public updateApolloCache = (id: number) => (cache: any, fetchResult: any) => {
    const {
      data: { createCard },
    } = fetchResult;

    const {
      finCardsByListId: { cards },
    } = cache.readQuery({
      query: GetCardsByList,
      variables: { id },
    });
    cache.writeQuery({
      query: GetCardsByList,
      variables: { id },
      data: {
        finCardsByListId: {
          cards: cards.concat([createCard]),
          __typename: 'CardList',
        },
      },
    });
  };

  public render() {
    const { id } = this.props;

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
              update={this.updateApolloCache(id)}
            >
              {this.renderContent(responseCards)}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  public renderContent = (responseCards: any) => (createCard: any) => {
    const { listName, id } = this.props;
    const { showCardInput } = this.state;

    return (
      <React.Fragment>
        <Dialog
          onClose={this.handleCloseModal}
          visible={this.state.showDialog}
          title={
            <Text fontSize="2.3" weight={TextWeight.Bold}>
              {this.state.card.cardName}
            </Text>
          }
          fullScreen
        >
          <CardDetail card={this.state.card} />
        </Dialog>
        <List listName={listName}>
          <Padding
            padding="0 0.7rem 0.7rem"
            style={{ color: colors.veryDarkBlue }}
          >
            {this.renderCards(responseCards)}
            {showCardInput && (
              <CreateCard
                handleSubmit={(value: string) => {
                  createCard({
                    variables: {
                      cardName: value,
                      about: '',
                      listId: id,
                    },
                  });
                }}
                showForm={this.showNewCardForm}
              />
            )}
          </Padding>
          <Button
            size={ButtonSize.Default}
            transparent
            block
            icon={
              <Icon
                name={ICONS.ADD}
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
  };

  public renderCards = (cards: ICard[]) => {
    if (cards.length > 0) {
      return cards.map((card: ICard, index: number) => (
        <Card
          key={`${card.cardName}_${index}`}
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

  public handleCloseModal = () => {
    this.setState({
      showDialog: false,
    });
  };

  public toggleDilog = (value: boolean, card: ICard) => () => {
    this.setState({ showDialog: value, card: card });
  };

  public showNewCardForm = (value: boolean) => () => {
    this.setState({ showCardInput: value });
  };
}
