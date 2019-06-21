import * as React from 'react';

import { Formik } from 'formik';
import { css } from 'emotion';
import { Mutation } from 'react-apollo';
import { Card } from '../Card/Card';
import { Input, InputTypes, InputVariants } from '../Input/Input';
import { Margin } from '../Margin/Margin';
import { Button, ButtonSize } from '../Button/Button';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Icon, IconSize } from '../Icon/Icon';
import colors from '../../../styles/default/colors';
import { ICONS } from '../../../consts/icons';
import { Padding } from '../Padding/Padding';
import { GetBoardInfo } from '../../../graphql/queries/boardQueries';
import { CreateListMutation } from '../../../graphql/mutations/listMutations';

export interface ICreateListProps {
  boardId: number;
}

const formContentWrapperCss = css`
  display: flex;
  align-items: center;
`;

const createListWrapperCss = css`
  width: 26rem;
  margin: 0.5rem;
`;

export class CreateList extends React.Component<ICreateListProps> {
  public state = { inputValue: '', showForm: false };

  public render() {
    const { showForm } = this.state;
    const { boardId } = this.props;

    return (
      <div className={createListWrapperCss}>
        {showForm ? (
          <Mutation
            mutation={CreateListMutation}
            update={this.updateApolloCache(boardId)}
          >
            {createList => (
              <Formik
                initialValues={{ name: '' }}
                onSubmit={values => {
                  createList({
                    variables: {
                      listName: values.name,
                      boardId,
                    },
                  });
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <form onSubmit={handleSubmit}>
                    <Card
                      cardName={
                        <Input
                          name="name"
                          placeholder="Enter new list name"
                          type={InputTypes.Text}
                          variant={InputVariants.Default}
                          onChange={handleChange}
                          value={values.name}
                        />
                      }
                    />
                    <div className={formContentWrapperCss}>
                      <Margin margin="0 1.3rem 0 0">
                        <Button
                          type="submit"
                          size={ButtonSize.Big}
                          color={colors.limeGreen}
                        >
                          <Text
                            component="span"
                            fontSize={TextSize.Normal}
                            color={colors.white}
                            weight={TextWeight.Bold}
                          >
                            Create list
                          </Text>
                        </Button>
                      </Margin>
                      <Icon
                        onClick={this.showForm(false)}
                        size={IconSize.Big}
                        name={ICONS.CLOSE}
                        color={colors.white}
                      />
                    </div>
                  </form>
                )}
              </Formik>
            )}
          </Mutation>
        ) : (
          <Button
            size={ButtonSize.Big}
            block
            color={colors.almostTransparent}
            icon={
              <Icon
                name={ICONS.ADD}
                color={colors.white}
                size={IconSize.Default}
              />
            }
            onClick={this.showForm(true)}
          >
            <Padding padding="1.1rem 13rem 1.1rem 0">
              <Text
                fontSize={TextSize.Normal}
                color={colors.white}
                weight={TextWeight.Medium}
              >
                Add another list
              </Text>
            </Padding>
          </Button>
        )}
      </div>
    );
  }

  public updateApolloCache = (id: number) => (cache: any, fetchResult: any) => {
    const {
      data: { createList },
    } = fetchResult;

    const {
      findBoardById: { lists, boardName },
    } = cache.readQuery({
      query: GetBoardInfo,
      variables: { id },
    });

    cache.writeQuery({
      query: GetBoardInfo,
      variables: { id },
      data: {
        findBoardById: {
          id,
          boardName,
          lists: lists.concat([createList]),
          __typename: 'Board',
        },
      },
    });
  };

  public showForm = (value: boolean) => () => {
    this.setState({ showForm: value });
  };
}
