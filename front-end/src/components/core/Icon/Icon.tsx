import * as React from 'react';

import { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

export enum IconVariants {
  Default = 'default',
  Inverted = 'inverted',
}

export interface IconProps {
  theme?: any;
  color?: string;
  name: string;
  className?: string;
}

const iconCss = (color) => css`
  color: ${color || 'white'};
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  font-size: 2rem;
`;

// @ts-ignore
@withTheme
export class Icon extends React.PureComponent<IconProps> {

  public render() {
    const {
      name,
      className,
      color,
    } = this.props;
    return (
      <i className={cx('material-icons', className, iconCss(color))}>{name}</i>
    );
  }
}
