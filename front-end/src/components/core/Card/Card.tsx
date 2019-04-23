import * as React from 'react';

import { css } from 'emotion';

import { Text, TextWeight } from '../Text/Text';
import { Margin } from '../Margin/Margin';
import { Icon, IconSize } from '../Icon/Icon';
import { Button, ButtonSize } from '../Button/Button';

export interface ICardProps {
  cardName: string;
  colorMark?: any[];
  commentsCount?: number;
}

const cardWrapper = css`
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
  margin: 0 0 0.8rem 0;
  max-width: 30rem;
  min-height: 2rem;
  padding: 0.6rem 0.8rem 0.2rem;
`;

const cardLabelCss = (colorMark) => css`
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
  flex-direction: column;
  margin-bottom: 0.4rem;
`;

const commentsCountCss = css`
  position: absolute;
  top: 22%;
  left: 23%;
`;

export class Card extends React.PureComponent<ICardProps> {
  public render() {
    const { cardName, colorMark, commentsCount } = this.props;

    return (
      <div className={cardWrapper}>
          <Margin margin='0 0 0.4rem'>
            {
              colorMark && colorMark.length && (
                <div className={labelWrapper}>
                  {
                    colorMark.map((color, index) => (
                      <span key={index} className={cardLabelCss(color)}>
                        &nbsp;
                      </span>
                    ))
                  }
                </div>
              )
            }
          </Margin>
          <Margin margin='0 0 0.4rem'>
            <Text fontSize='1.4' weight={TextWeight.Medium}>{cardName}</Text>
          </Margin>
          <div className={bagesWrapper}>
            <div style={{ position: 'relative', minHeight: 'inherit' }}>
              <Icon name='visibility' color='gray' left='5' size={IconSize.Small} />
              {
                commentsCount && (
                  <React.Fragment>
                    <Icon name='chat_bubble_outline' color='gray' left='17' size={IconSize.Small} />
                    <div className={commentsCountCss}>
                      <Text fontSize='1.4' weight={TextWeight.Medium}>{commentsCount}</Text>
                    </div>
                  </React.Fragment>
                )
              }
              <div style={{ float: 'right' }}>
                <Button size={ButtonSize.Medium} >
                  <Text component='span' fontSize='1.4' color='#17394d' weight={TextWeight.Bold}>UK</Text>
                </Button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}