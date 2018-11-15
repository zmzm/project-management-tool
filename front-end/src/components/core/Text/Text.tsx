import * as React from 'react';

import { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';

export enum TextWeight {
  Light = 100,
  Normal = 400,
  Medium = 500,
  Bold = 700,
}

const textCss = (
  params
) => css`
  color: ${params.color};
  margin: 0;
  font-size: ${params.size ? `${params.size}rem` : 'inherit'};
  font-weight: ${params.weight ? params.weight : 'inherit'};
  ${params.align ? `text-align: ${params.align};` : null}
  ${params.style ? `font-style: ${params.style};` : null}
`;

export interface ITextProps {
  theme?: any;
  component?: string;
  size?: string;
  color?: string;
  weight?: TextWeight;
  align?: 'left' | 'center' | 'right';
  style?: 'normal' | 'italic';
}

// @ts-ignore
@withTheme
export class Text extends React.PureComponent<ITextProps> {
  public render() {
    const {
      children,
      theme,
      component,
      ...rest
    } = this.props;
    const Element = Boolean(component) ? component as string : 'p';

    return (
      <Element className={textCss(rest)}>
        {children}
      </Element>
    );
  }
}
