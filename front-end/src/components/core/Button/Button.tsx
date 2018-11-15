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
  small: '',
};

const buttonSize = {
  big: 3.5,
  default: 3,
  medium: 2,
  small: 1,
};

const buttonCss = (
  { button },
  outline,
  size
) => css`
  min-width: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  min-height: ${buttonSize[size] || buttonSize[ButtonSize.Default]}rem;
  cursor: pointer;
  position: relative;
  padding: ${buttonPaddings[size] || 0};
  border-radius: 0.3rem;
  border: none;
  ${outline ? `
    background-color: ${button.background.outline};
  ` : `
    background-color: ${button.background.default};
  `}
  display: inline-block;
  margin-left: auto;

  &:hover {
    ${outline ? `
      background-color:  ${button.hover.outline};
    ` : `
      background-color: ${button.hover.default};
  `}
  }
`;

export interface IButtonProps {
  theme?: any;
  component?: string;
  outline?: boolean;
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
      children,
      outline,
      component,
      size,
      className,
      icon,
    } = this.props;
    const Element = Boolean(component) ? component as string : 'button';

    return (
      <Element className={cx(buttonCss(theme, outline, size), className)}>
      {
        icon && (icon)
      }
      {children}
    </Element>
    );
  }
}
