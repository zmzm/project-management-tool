import * as React from 'react';

import { css, cx } from 'emotion';

import { Text, TextSize, TextWeight } from '../Text/Text';
import { Margin } from '../Margin/Margin';
import { Icon, IconSize } from '../Icon/Icon';
import { Button, ButtonSize } from '../Button/Button';
import colors from '../../../styles/default/colors';
import { ICONS } from '../../../consts/icons';

export interface ICardProps {
  cardName: any;
  labels?: any[];
  commentsCount?: number;
  className?: string;
  assignedUsers?: any[];
  onClick?(): any;
}

const cardWrapper = css`
  background-color: ${colors.white};
  border-radius: 0.3rem;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  margin: 0 0 0.8rem 0;
  max-width: 30rem;
  min-height: 3.5rem;
  padding: 0.6rem 0.8rem 0.2rem;
`;

const cardLabelCss = (labelColor?: any) => css`
  background-color: ${labelColor};
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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export class Card extends React.PureComponent<ICardProps> {
  public render() {
    const {
      cardName,
      labels,
      commentsCount,
      onClick,
      className,
      assignedUsers,
    } = this.props;

    return (
      <div className={cx(cardWrapper, className)} onClick={onClick}>
        <Margin margin="0 0 0.4rem">
          {labels && labels.length && (
            <div className={labelWrapper}>
              {labels.map((color, index) => (
                <span key={index} className={cardLabelCss(color)}>
                  &nbsp;
                </span>
              ))}
            </div>
          )}
        </Margin>
        <Margin margin="0 0 0.4rem">{cardName}</Margin>
        <div className={bagesWrapper}>
          {commentsCount && commentsCount > 0 ? (
            <div style={{ display: 'flex' }}>
              <Icon
                name={ICONS.CHAT_BUBBLE}
                color={colors.grayDark}
                size={IconSize.Small}
              />
              <Text fontSize={TextSize.Medium} weight={TextWeight.Medium}>
                {commentsCount}
              </Text>
            </div>
          ) : null}
          <div style={{ display: 'flex' }}>
            {assignedUsers &&
              assignedUsers.length > 0 &&
              assignedUsers.map((user, index) => (
                <Button key={index} size={ButtonSize.Medium} transparent>
                  <Text
                    component="span"
                    fontSize={TextSize.Medium}
                    color={colors.veryDarkBlue}
                    weight={TextWeight.Bold}
                  >
                    {user}
                  </Text>
                </Button>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
