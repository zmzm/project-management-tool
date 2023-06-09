import * as React from 'react';

import { css, cx } from 'emotion';
import { withTheme } from 'emotion-theming';

export enum TextWeight {
  Light = 100,
  Normal = 400,
  Medium = 500,
  Bold = 700,
}

export enum TextSize {
  H1 = '4',
  H2 = '3.4',
  H3 = '2.8',
  H4 = '2.6',
  H5 = '2.2',
  H6 = '2.0',
  Big = '1.8',
  Normal = '1.6',
  Medium = '1.4',
  Small = '1.2',
}

const textCss = params => css`
  color: ${params.color};
  display: inline-block;
  margin: 0;
  font-size: ${params.fontSize ? `${params.fontSize}rem` : 'inherit'};
  font-weight: ${params.weight ? params.weight : 'inherit'};
  ${params.align ? `text-align: ${params.align};` : null}
  ${params.style ? `font-style: ${params.style};` : null}
`;

export interface ITextProps {
  theme?: any;
  component?: string;
  fontSize?: string;
  color?: string;
  weight?: TextWeight;
  align?: 'left' | 'center' | 'right';
  style?: 'normal' | 'italic';
  className?: string;
}

// @ts-ignore
@withTheme
export class Text extends React.PureComponent<ITextProps> {
  public render() {
    const { children, theme, component, className, ...rest } = this.props;
    const Element = Boolean(component) ? (component as any) : 'p';

    return (
      <Element className={cx(textCss(rest), className)}>{children}</Element>
    );
  }
}
