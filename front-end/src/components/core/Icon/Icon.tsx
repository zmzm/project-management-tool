import * as React from 'react';

import { css, cx } from 'emotion';
import { withTheme } from 'emotion-theming';

export enum IconVariants {
  Default = 'default',
  Inverted = 'inverted',
}

export enum IconSize {
  Default = 2,
  Big = 3,
  Medium = 2.5,
  Small = 1.6,
}

export interface IconProps {
  theme?: any;
  color?: string;
  name: string;
  className?: string;
  left?: string;
  size?: number;
}

const iconCss = (left, color, size) => css`
  color: ${color || 'white'};
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${left || 50}%;
  top: 50%;
  font-size: ${size || IconSize.Default}rem;
`;

// @ts-ignore
@withTheme
export class Icon extends React.PureComponent<IconProps> {
  public render() {
    const { name, className, color, left, size } = this.props;

    return (
      <i
        className={cx('material-icons', className, iconCss(left, color, size))}
      >
        {name}
      </i>
    );
  }
}
