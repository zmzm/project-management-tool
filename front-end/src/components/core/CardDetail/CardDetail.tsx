import * as React from 'react';
import { css } from 'emotion';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { ICardProps } from '../Card/Card';
import { Button, ButtonSize } from '../Button/Button';
import { Margin } from '../Margin/Margin';
import { Input, InputTypes, InputVariants } from '../Input/Input';

export interface ICardDetailProps {
  card: ICardProps;
}

const detailWrapper = css`
  display: flex;
  flex-direction: column;
`;

const bagesWrapper = css`
  display: flex;
  flex-direction: row;
`;

const partisipantsWrapper = css`
  display: flex;
  flex-direction: column;
`;

const partisipantsContent = css`
  display: flex;
  justify-content: space-between;
`;

const markWrapper = css`
  margin-left: 4rem;
`;

const descriptionWrapper = css`
  margin-top: 1.5rem;
`;

export class CardDetail extends React.PureComponent<ICardDetailProps> {
  public render() {
    const { card } = this.props;

    return (
      <div className={detailWrapper}>
        <div className={bagesWrapper}>
          {card.partisipants && (
            <div className={partisipantsWrapper}>
              <Text
                fontSize={TextSize.Medium}
                weight={TextWeight.Medium}
                color="#6b808c"
              >
                PARTISIPANTS
              </Text>
              <Margin margin="2rem 0">
                <div className={partisipantsContent}>
                  {card.partisipants.map((user, index) => (
                    <Margin margin="0 0.5rem 0 0">
                      <Button
                        key={index}
                        size={ButtonSize.Default}
                        color="#dfe3e6"
                      >
                        <Text
                          component="span"
                          fontSize={TextSize.Medium}
                          color="#17394d"
                          weight={TextWeight.Bold}
                        >
                          {user}
                        </Text>
                      </Button>
                    </Margin>
                  ))}
                </div>
              </Margin>
            </div>
          )}
          {card.colorMark && (
            <div className={markWrapper}>
              <Text
                fontSize={TextSize.Medium}
                weight={TextWeight.Medium}
                color="#6b808c"
              >
                MARKS
              </Text>
              <Margin margin="2rem 0">
                <div className={partisipantsContent}>
                  {card.colorMark &&
                    card.colorMark.map((mark, index) => (
                      <Margin margin="0 0.5rem 0 0">
                        <Button
                          key={index}
                          size={ButtonSize.Default}
                          color={mark}
                        />
                      </Margin>
                    ))}
                </div>
              </Margin>
            </div>
          )}
        </div>
        <div className={descriptionWrapper}>
          <Text
            fontSize={TextSize.MmmmmegaBig}
            weight={TextWeight.Bold}
            color="#17394d"
          >
            Description
          </Text>
          <Margin margin="1rem 0">
            <Input
              name="detail-info"
              type={InputTypes.TextArea}
              value={card.detail}
              placeholder="Type something"
              variant={InputVariants.Default}
              onChange={value => console.log(value)}
              className={css`
                box-shadow: 0 1px 2px -1px rgba(9, 45, 66, 0.25),
                  0 0 0 1px rgba(9, 45, 66, 0.08);
              `}
            />
          </Margin>
        </div>
      </div>
    );
  }
}
