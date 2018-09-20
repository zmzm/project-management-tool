import * as React from 'react';

import styled, { css, cx } from 'react-emotion';
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
  color: #cbcbcb;    
  cursor: not-allowed;
  border: 2px solid #cbcbcb;
  outline:none;
`;

const InputLabel = styled('label')`
  color: #808080;
  line-height: 1.4;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
`;

const InputWrapper = styled('div')`
  display: flex;
  flexDirection: row;
`;

const inputCss = ({ input }, variant, disabled) => css`
  color: ${input[variant].textColor};
  font-size: 1em;
  background: ${input[variant].bg};
  border: ${input[variant].border};
  border-radius: 3px;
  width: 100%;
  padding: 10px;
  line-height: 26px;
  ${disabled && disableStyle}
`;

export interface InputProps {
  type: InputTypes,
  variant: string,
  label?: string,
  className?: string,
  width?: number,
  value?: string | number,
  placeholder?: string,
  disabled?: boolean,
  autoFocus?: boolean,
  theme?: any;
  onChange: (value: string, e: React.SyntheticEvent<HTMLAbstractInputElement>) => any,
}

// @ts-ignore
@withTheme
export class Input extends React.PureComponent<InputProps> {
  public input: HTMLAbstractInputElement;

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
  }

  public handleChange = (event: any): void => {
    const { onChange } = this.props;
    onChange(event.target.value, event);
  }

  public setInput = (element: any): void => {
    this.input = element;
  }

  public renderLabel() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return (
      <InputLabel>{label}</InputLabel>
    );
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
          { type === 'textarea'
            ? (
              <textarea
                className={cx(className, inputCss(theme, variant, disabled))}
                placeholder={placeholder}
                value={value}
                ref={this.setInput}
                disabled={disabled}
                onChange={this.handleChange}
              />
            )
            : (
              <input
                className={cx(className, inputCss(theme, variant, disabled))}
                type={type}
                placeholder={placeholder}
                value={value}
                ref={this.setInput}
                disabled={disabled}
                onChange={this.handleChange}
              />
            )
          }
        </InputWrapper>
      </React.Fragment>
    );
  }
}
