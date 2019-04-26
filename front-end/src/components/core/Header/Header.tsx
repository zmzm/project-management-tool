import * as React from 'react';

import { css, cx } from 'emotion';
import { withTheme } from 'emotion-theming';

export enum HeaderVariants {
  Default = 'default',
  Inverted = 'inverted',
  Transparent = 'transparent',
}

const headerCss = ({ header }, variant?: string) => css`
  background-color: ${variant
    ? header.background[variant]
    : header.background.default};
  position: relative;
  min-height: 3.5rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: row;
`;

export interface IHeaderProps {
  variant?: HeaderVariants;
  className?: string;
  theme?: any;
  children: any;
}

// @ts-ignore
@withTheme
export class Header extends React.PureComponent<IHeaderProps> {
  public render() {
    const { theme, variant, className, children } = this.props;

    return (
      <div className={cx(headerCss(theme, variant), className)}>{children}</div>
    );
  }
}
