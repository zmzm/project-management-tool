import * as React from 'react';

import { css, cx } from 'emotion';

import { Text, TextSize, TextWeight } from '../Text/Text';
import { Margin } from '../Margin/Margin';
import { Icon, IconSize } from '../Icon/Icon';
import { Button, ButtonSize } from '../Button/Button';

export interface ICardProps {
  cardName: any;
  colorMark?: any[];
  commentsCount?: number;
  className?: string;
  assignedUsers?: any[];
  onClick?(): any;
}

const cardWrapper = css`
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  margin: 0 0 0.8rem 0;
  max-width: 30rem;
  min-height: 2rem;
  padding: 0.6rem 0.8rem 0.2rem;
`;

const cardLabelCss = (colorMark?: any) => css`
  background-color: ${colorMark};
  border-radius: 0.5rem;
  display: block;
  float: left;
  height: 0.8rem;
  margin: 0 0 0.4rem 0;
  max-width: 40px;
  min-width: 40px;
  width: auto;
  margin: 0 0.2rem 0.15rem 0;
`;

const labelWrapper = css`
  position: relative;
  overflow: hidden;
`;

const bagesWrapper = css`
  min-height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export class Card extends React.PureComponent<ICardProps> {
  public render() {
    const {
      cardName,
      colorMark,
      commentsCount,
      onClick,
      className,
      assignedUsers,
    } = this.props;

    return (
      <div className={cx(cardWrapper, className)} onClick={onClick}>
        <Margin margin="0 0 0.4rem">
          {colorMark && colorMark.length && (
            <div className={labelWrapper}>
              {colorMark.map((color, index) => (
                <span key={index} className={cardLabelCss(color)}>
                  &nbsp;
                </span>
              ))}
            </div>
          )}
        </Margin>
        <Margin margin="0 0 0.4rem">{cardName}</Margin>
        <div className={bagesWrapper}>
          {/* <Margin margin="0 0.5rem 0 0">
            <Icon name="visibility" color="gray" size={IconSize.Small} />
              </Margin> */}
          {'  '}
          {commentsCount && (
            <React.Fragment>
              <Icon
                name="chat_bubble_outline"
                color="gray"
                size={IconSize.Small}
              />
              <Text fontSize={TextSize.Small} weight={TextWeight.Medium}>
                {commentsCount}
              </Text>
            </React.Fragment>
          )}
          {assignedUsers &&
            assignedUsers.length &&
            assignedUsers.map(user => (
              <Button size={ButtonSize.Medium}>
                <Text
                  component="span"
                  fontSize={TextSize.Small}
                  color="#17394d"
                  weight={TextWeight.Bold}
                >
                  {user}
                </Text>
              </Button>
            ))}
        </div>
      </div>
    );
  }
}
