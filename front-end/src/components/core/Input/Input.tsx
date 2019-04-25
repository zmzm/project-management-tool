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
  color: #fff;
  line-height: 1.4;
  display: inline-block;
  cursor: pointer;
  font-size: 1.6rem;
`;

const InputWrapper = styled('div')`
  display: flex;
  flexdirection: row;
`;

const inputCss = ({ input }, variant, disabled) => css`
  color: ${input[variant].textColor};
  font-size: 1.4rem;
  background-color: ${input[variant].bg};
  border: none;
  border-radius: 0.3rem;
  width: 100%;
  padding: 1rem;
  ${disabled && disableStyle}

  :: placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

export interface InputProps {
  type: InputTypes;
  variant: string;
  label?: string;
  className?: string;
  width?: number;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  theme?: any;
  onChange: (
    value: string,
    e: React.SyntheticEvent<HTMLAbstractInputElement>,
  ) => any;
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

  public handleChange = (event: any): void => {
    const { onChange } = this.props;
    onChange(event.target.value, event);
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
    } = this.props;

    return (
      <React.Fragment>
        {this.renderLabel()}
        <InputWrapper>
          {type === 'textarea' ? (
            <textarea
              className={cx(className, inputCss(theme, variant, disabled))}
              placeholder={placeholder}
              value={value}
              ref={this.setInput}
              disabled={disabled}
              onChange={this.handleChange}
            />
          ) : (
            <input
              className={cx(className, inputCss(theme, variant, disabled))}
              type={type}
              placeholder={placeholder}
              value={value}
              ref={this.setInput}
              disabled={disabled}
              onChange={this.handleChange}
            />
          )}
        </InputWrapper>
      </React.Fragment>
    );
  }
}
