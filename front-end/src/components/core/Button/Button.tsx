import * as React from 'react';

import { css, cx } from 'emotion';
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
  icon,
  transparent,
  color,
) => css`
  min-width: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  min-height: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  ${block && 'width: 100%;'}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: ${(!icon && buttonPaddings[size]) || 0};
  border-radius: 0.3rem;
  border: none;
  background-color: ${color ? color : button.background.default};
  ${outline && `background-color: ${button.background.outline};`}
  ${transparent && `background-color: ${button.background.transparent};`}

  &[disabled] {
    background-color: ${button.background.disabled};
    cursor: not-allowed;
    &:hover {
      background-color: ${button.background.disabled};
    }
  }

  &:hover {
    background-color: ${button.hover.default};
    ${outline && ` background-color:  ${button.hover.outline};`}
    ${transparent && `background-color: ${button.hover.transparent};`}
    ${color && `background-color: ${color}; opacity: 0.8;`}
  }
`;

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: any;
  component?: string;
  outline?: boolean;
  block?: boolean;
  transparent?: boolean;
  size: ButtonSize;
  className?: string;
  icon?: any;
  color?: string;
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
      color,
      outline,
      block,
      transparent,
      ...rest
    } = this.props;
    const Element = Boolean(component) ? (component as any) : 'button';

    return (
      <Element
        className={cx(
          buttonCss(theme, size, outline, block, icon, transparent, color),
          className,
        )}
        {...rest}
      >
        {icon && icon}
        {children}
      </Element>
    );
  }
}
