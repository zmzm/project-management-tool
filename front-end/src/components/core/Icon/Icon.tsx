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
  size?: number;
  onClick?: any;
}

const iconCss = (color?: string, size?: number) => css`
  color: ${color || 'white'};
  font-size: ${size || IconSize.Default}rem;
`;

// @ts-ignore
@withTheme
export class Icon extends React.PureComponent<IconProps> {
  public render() {
    const { name, className, color, size, onClick } = this.props;

    return (
      <i
        className={cx('material-icons', className, iconCss(color, size))}
        onClick={onClick}
      >
        {name}
      </i>
    );
  }
}
