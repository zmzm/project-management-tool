import * as React from 'react';
import styled, { css } from '../../../libs/styled-components-with-theme-anotation';

type HTMLAbstractInputElement = HTMLInputElement | HTMLTextAreaElement;

export const InputVariants = {
  Default: 'default',
  Inverted: 'inverted',
};

interface InputProps {
    type: 'text' | 'number' | 'email' | 'search' | 'tel' | 'url' | 'password' | 'textarea',
    variant: string,
    label?: string,
    className?: string,
    width?: number,
    value?: string | number,
    placeholder?: string,
    disabled?: boolean,
    autoFocus?: boolean,
    onChange: (value: string, e: React.SyntheticEvent<HTMLAbstractInputElement>) => any,
}

class Input extends React.PureComponent<InputProps, {}> {
  public input: HTMLInputElement | HTMLTextAreaElement;

  public componentDidMount(): void {
    this.autoFocus();
  }

  public isAutoFocus(): boolean {
    const { autoFocus, disabled } = this.props;
    return Boolean(autoFocus) && !disabled;
  }

  public autoFocus(): void {
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
  };

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
    } = this.props;
    return (
      <div>
        {this.renderLabel()}
        <InputWrapper>
          { type === 'textarea'
            ? (
              <textarea
                className={className}
                placeholder={placeholder}
                value={value}
                ref={this.setInput}
                disabled={disabled}
                onChange={this.handleChange}
              />
            )
            : (
              <input
                className={className}
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
      </div>
    );
  }
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

const Styles = styled(Input)`
    color: ${({ variant, theme }) => theme.input[variant].textColor};
    font-size: 1em;
    background: ${({ variant, theme }) => theme.input[variant].bg};
    border: ${({ variant, theme }) => theme.input[variant].border};
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    line-height: 26px;
    ${({ disabled }) => disabled && disableStyle}
`;

const StyledInput = (props: InputProps) => <Styles {...props} />;

export default StyledInput;
