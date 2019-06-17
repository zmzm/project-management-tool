import * as React from 'react';
import { css } from 'emotion';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Margin } from '../Margin/Margin';
import { Input, InputTypes, InputVariants } from '../Input/Input';
import ICard from '../../../interfaces/ICard';

export interface ICardDetailProps {
  card: ICard;
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

export class CardDetail extends React.PureComponent<ICardDetailProps> {
  public render() {
    const { card } = this.props;

    return (
      <div className={detailWrapper}>
        <div className={bagesWrapper}>
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
                  <Margin key={index} margin="0 0.5rem 0 0">
                    <Button size={ButtonSize.Default} color="#dfe3e6">
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
          {card.labels && (
            <Margin margin="0 0 0 4rem">
              <Text
                fontSize={TextSize.Medium}
                weight={TextWeight.Medium}
                color="#6b808c"
              >
                MARKS
              </Text>
              <Margin margin="2rem 0">
                <div className={partisipantsContent}>
                  {card.labels.map((mark, index) => (
                    <Margin key={index} margin="0 0.5rem 0 0">
                      <Button size={ButtonSize.Default} color={mark} />
                    </Margin>
                  ))}
                </div>
              </Margin>
            </Margin>
          )}
        </div>
        <Margin margin="1.5rem 0 0 0">
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
              value={card.about}
              placeholder="Type something"
              variant={InputVariants.Default}
              onChange={value => console.log(value)}
              className={css`
                box-shadow: 0 1px 2px -1px rgba(9, 45, 66, 0.25),
                  0 0 0 1px rgba(9, 45, 66, 0.08);
              `}
            />
            <Margin margin="1rem 0 0 0">
              <Button type="submit" size={ButtonSize.Medium} color="#61BD4F">
                <Text
                  component="span"
                  fontSize={TextSize.Big}
                  color="#fff"
                  weight={TextWeight.Bold}
                >
                  Save
                </Text>
              </Button>
            </Margin>
          </Margin>
        </Margin>
        <Margin margin="1.5rem 0 0 0">
          <Text
            fontSize={TextSize.MmmmmegaBig}
            weight={TextWeight.Bold}
            color="#17394d"
          >
            Add comment
          </Text>
          <Margin margin="1rem 0">
            <Input
              name="detail-info"
              type={InputTypes.TextArea}
              placeholder="Type something"
              variant={InputVariants.Default}
              onChange={value => console.log(value)}
              className={css`
                box-shadow: 0 1px 2px -1px rgba(9, 45, 66, 0.25),
                  0 0 0 1px rgba(9, 45, 66, 0.08);
              `}
            />
            <Margin margin="1rem 0 0 0">
              <Button type="submit" size={ButtonSize.Medium} color="#61BD4F">
                <Text
                  component="span"
                  fontSize={TextSize.Big}
                  color="#fff"
                  weight={TextWeight.Bold}
                >
                  Add comment
                </Text>
              </Button>
            </Margin>
          </Margin>
        </Margin>
      </div>
    );
  }
}
