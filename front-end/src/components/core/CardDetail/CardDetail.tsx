import * as React from 'react';
import { css } from 'emotion';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Margin } from '../Margin/Margin';
import { Input, InputTypes, InputVariants } from '../Input/Input';
import ICard from '../../../interfaces/ICard';
import colors from '../../../styles/default/colors';
import { Flex, FlexDirection, JustifyContent } from '../Flex/Flex';

export interface ICardDetailProps {
  card: ICard;
}

const inputShadowCss = css`
  box-shadow: 0 1px 2px -1px rgba(9, 45, 66, 0.25),
    0 0 0 1px rgba(9, 45, 66, 0.08);
`;

export class CardDetail extends React.PureComponent<ICardDetailProps> {
  public render() {
    const { card } = this.props;

    return (
      <Flex direction={FlexDirection.Column}>
        <Flex direction={FlexDirection.Row}>
          {card.partisipants && (
            <Flex direction={FlexDirection.Column}>
              <Text
                fontSize={TextSize.H5}
                weight={TextWeight.Medium}
                color={colors.darkGrayishBlue}
              >
                PARTISIPANTS
              </Text>
              <Margin margin="2rem 0">
                <Flex justifyContent={JustifyContent.SpaceBetween}>
                  {card.partisipants.map((user, index) => (
                    <Margin key={index} margin="0 0.5rem 0 0">
                      <Button
                        size={ButtonSize.Default}
                        color={colors.lightGrayishBlue}
                      >
                        <Text
                          component="span"
                          fontSize={TextSize.Normal}
                          color={colors.veryDarkBlue}
                          weight={TextWeight.Bold}
                        >
                          {user}
                        </Text>
                      </Button>
                    </Margin>
                  ))}
                </Flex>
              </Margin>
            </Flex>
          )}
          {card.labels && (
            <Margin margin="0 0 0 4rem">
              <Text
                fontSize={TextSize.H5}
                weight={TextWeight.Medium}
                color={colors.darkGrayishBlue}
              >
                LABELS
              </Text>
              <Margin margin="2rem 0">
                <Flex justifyContent={JustifyContent.SpaceBetween}>
                  {card.labels.map((label, index) => (
                    <Margin key={index} margin="0 0.5rem 0 0">
                      <Button size={ButtonSize.Default} color={label} />
                    </Margin>
                  ))}
                </Flex>
              </Margin>
            </Margin>
          )}
        </Flex>
        <Margin margin="1.5rem 0 0 0">
          <Text
            fontSize={TextSize.H5}
            weight={TextWeight.Bold}
            color={colors.veryDarkBlue}
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
              className={inputShadowCss}
            />
            <Margin margin="1rem 0 0 0">
              <Button
                type="submit"
                size={ButtonSize.Medium}
                color={colors.limeGreen}
              >
                <Text
                  component="span"
                  fontSize={TextSize.Normal}
                  color={colors.white}
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
            fontSize={TextSize.Big}
            weight={TextWeight.Bold}
            color={colors.veryDarkBlue}
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
              className={inputShadowCss}
            />
            <Margin margin="1rem 0 0 0">
              <Button
                type="submit"
                size={ButtonSize.Medium}
                color={colors.limeGreen}
              >
                <Text
                  component="span"
                  fontSize={TextSize.Normal}
                  color={colors.white}
                  weight={TextWeight.Bold}
                >
                  Add comment
                </Text>
              </Button>
            </Margin>
          </Margin>
        </Margin>
      </Flex>
    );
  }
}
