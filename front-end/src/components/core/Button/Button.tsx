import * as React from 'react';

import { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

export enum ButtonSize {
  Default = 'default',
  Small = 'small',
  Big = 'big',
  Medium = 'medium',
}

const buttonPaddings = {
  big: '0.65rem',
  default: '0.55rem',
  medium: '0.45rem',
  small: '0.35rem',
};

const buttonSize = {
  big: 3.5,
  default: 3,
  medium: 2,
  small: 1,
};

const buttonCss = (
  { button },
  size,
  outline,
  block,
  transparent
  ) => css`
  min-width: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  min-height: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  ${block && 'width: 100%;'}
  cursor: pointer;
  position: relative;
  padding: ${buttonPaddings[size] || 0};
  border-radius: 0.3rem;
  border: none;
  background-color: ${button.background.default};
  ${outline && `background-color: ${button.background.outline};`}
  ${transparent && `background-color: ${button.background.transparent};`}
  display: inline-block;
  margin-left: auto;

  &:hover {
    background-color: ${button.hover.default};
    ${outline && ` background-color:  ${button.hover.outline};`}
    ${transparent && `background-color: ${button.hover.transparent};`}
  }
`;

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: any;
  component?: string;
  outline?: boolean;
  block?: boolean;
  transparent?: boolean;
  size: ButtonSize;
  className?: string;
  icon?: any;
}

// @ts-ignore
@withTheme
export class Button extends React.PureComponent<IButtonProps> {
  public render() {
    const {
      theme,
      component,
      children,
      className,
      icon,
      size,
      outline,
      block,
      transparent,
      ...rest
    } = this.props;
    const Element = Boolean(component) ? component as string : 'button';

    return (
      <Element 
        className={cx(buttonCss(theme, size, outline, block, transparent), className)}
        {...rest}
      >
        {
          icon && (icon)
        }
        {children}
    </Element>
    );
  }
}
