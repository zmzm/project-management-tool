import * as React from 'react';

import { css, cx } from 'emotion';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

type HTMLAbstractInputElement = HTMLInputElement | HTMLTextAreaElement;

export enum InputVariants {
  Default = 'default',
  Inverted = 'inverted',
}

export enum InputTypes {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  TextArea = 'textarea',
}

const disableStyle = css`
  color: #fff;
  cursor: not-allowed;
  background-color: #cbcbcbcb;
  outline: none;
`;

const InputLabel = styled('label')`
  color: #000;
  line-height: 1.4;
  display: inline-block;
  cursor: pointer;
  font-size: 1.6rem;
`;

const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const inputCss = ({ input }, variant: string, disabled: any) => css`
  color: ${input[variant].textColor};
  font-size: 1.4rem;
  background-color: ${input[variant].bg};
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  ${disabled && disableStyle}
  :: placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  variant: string;
  label?: any;
  className?: string;
  width?: number;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  theme?: any;
}

// @ts-ignore
@withTheme
export class Input extends React.PureComponent<InputProps> {
  public input: HTMLAbstractInputElement | undefined;

  public componentDidMount(): void {
    this.autoFocus();
  }

  public isAutoFocus(): boolean {
    const { autoFocus, disabled } = this.props;

    return Boolean(autoFocus) && !disabled;
  }

  public autoFocus = (): void => {
    if (this.isAutoFocus() && this.input) {
      if (document.activeElement !== this.input) {
        this.input.focus();
      }
    }
  };

  public setInput = (element: any): void => {
    this.input = element;
  };

  public renderLabel() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return <InputLabel>{label}</InputLabel>;
  }

  public render() {
    const {
      className,
      placeholder,
      value,
      disabled,
      type,
      theme,
      variant,
      name,
      ...rest
    } = this.props;

    return (
      <InputWrapper>
        {this.renderLabel()}
        {type === 'textarea' ? (
          <textarea
            id={name}
            className={cx(className, inputCss(theme, variant, disabled))}
            placeholder={placeholder}
            value={value}
            ref={this.setInput}
            disabled={disabled}
          />
        ) : (
          <input
            id={name}
            className={cx(className, inputCss(theme, variant, disabled))}
            type={type}
            placeholder={placeholder}
            ref={this.setInput}
            disabled={disabled}
            {...rest}
          />
        )}
      </InputWrapper>
    );
  }
}
