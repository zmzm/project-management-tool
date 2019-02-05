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
  params
) => css`
  min-width: ${buttonSize[params.size] || buttonSize[ButtonSize.Default]}rem;
  min-height: ${buttonSize[params.size] || buttonSize[ButtonSize.Default]}rem;
  ${params.block && 'width: 100%;'}
  cursor: pointer;
  position: relative;
  padding: ${buttonPaddings[params.size] || 0};
  border-radius: 0.3rem;
  border: none;
  background-color: ${button.background.default};
  ${params.outline && `background-color: ${button.background.outline};`}
  ${params.transparent && `background-color: ${button.background.transparent};`}
  display: inline-block;
  margin-left: auto;

  &:hover {
    background-color: ${button.hover.default};
    ${params.outline && ` background-color:  ${button.hover.outline};`}
    ${params.transparent && `background-color: ${button.hover.transparent};`}
  }
`;

export interface IButtonProps {
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
      ...rest
    } = this.props;
    const Element = Boolean(component) ? component as any : 'button';

    return (
      <Element className={cx(buttonCss(theme, rest), className)}>
      {
        icon && (icon)
      }
      {children}
    </Element>
    );
  }
}
