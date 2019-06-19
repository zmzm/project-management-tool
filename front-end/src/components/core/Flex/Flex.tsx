import * as React from 'react';

import { css } from 'emotion';

export enum FlexDirection {
  Column = 'column',
  ColumnReverse = 'column-reverse',
  Row = 'row',
  RowReverse = 'row-reverse',
}

export enum AlignItems {
  Baseline = 'baseline',
  Center = 'center',
  End = 'flex-end',
  Start = 'flex-start',
  Stretch = 'stretch',
}

export enum JustifyContent {
  Center = 'center',
  End = 'flex-end',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
  Start = 'flex-start',
}

const flexContainerCss = (
  inline?: boolean,
  direction?: FlexDirection,
  alignItems?: AlignItems,
  justifyContent?: JustifyContent,
) => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${direction ? direction : 'initial'};
  align-items: ${alignItems ? alignItems : 'initial'};
  justify-content: ${justifyContent ? justifyContent : 'initial'};
  height: inherit;
`;

export interface IFlexProps {
  inline?: boolean;
  direction?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  alignSelf?: AlignItems;
  size?: number;
}

export class Flex extends React.PureComponent<IFlexProps> {
  public render() {
    const {
      inline,
      direction,
      alignItems,
      justifyContent,
      children,
    } = this.props;

    return (
      <div
        className={flexContainerCss(
          inline,
          direction,
          alignItems,
          justifyContent,
        )}
      >
        {children}
      </div>
    );
  }
}
