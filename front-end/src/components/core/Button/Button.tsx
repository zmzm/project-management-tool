import * as React from 'react';

import { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

export enum ButtonWeight {
  Light = 100,
  Normal = 400,
  Medium = 500,
  Bold = 700,
}

const buttonCss = (
  outline,
  float,
  size
) => css`
  min-width: ${size}rem;
  min-height: ${size}rem;
  cursor: pointer;
  ${float && `float: ${float}`};
  position: relative;
  padding: 0;
  border-radius: 0.3rem;
  border: none;
  ${outline ? `
    background-color: transparent;
  ` : `
    background-color: hsla(0,0%,100%,.3);
  `}
  display: inline-block;
  margin-left: auto;

  &:hover {
    ${outline ? `
      background:  #026aa7;
    ` : `
      background-color: hsla(0,0%,100%,.2);
  `}
  }
`;

export interface IButtonProps {
  theme?: any;
  component?: string;
  outline?: boolean;
  float?: string;
  size: string;
  className?: string;
}

// @ts-ignore
@withTheme
export class Button extends React.PureComponent<IButtonProps> {
  public render() {
    const {
      children,
      outline,
      component,
      float,
      size,
      className,
    } = this.props;
    const Element = Boolean(component) ? component as string : 'button';

    return (
      <Element className={cx(buttonCss(outline, float, size), className)}>
        {children}
      </Element>
    );
  }
}
