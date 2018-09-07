import * as React from 'react';
import styled, { css } from '../../../libs/styled-components-with-theme-anotation';

type HTMLAbstractInputElement = HTMLInputElement | HTMLTextAreaElement;

export const InputVariants = {
  Default: 'default',
  Inverted: 'inverted',
};

interface InputProps {
    type: string,
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

  public setInput = (element: any): void => {
    this.input = element;
  };

  public renderLabel() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return (
      <StyledLabel>{label}</StyledLabel>
    );
  }

  public render() {
    const {
      className,
      placeholder,
      value,
      disabled,
    } = this.props;
    return (
      <div>
        {this.renderLabel()}
        <StyledInputWrapper>
          <input
            className={className}
            placeholder={placeholder}
            value={value}
            ref={this.setInput}
            disabled={disabled}
          />
        </StyledInputWrapper>
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

const StyledLabel = styled('label')`
    color: #808080;
    lineHeight: 1.4;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
`;

const StyledInputWrapper = styled('div')`
    display: flex;
    flexDirection: row;
`;

const Styles = styled(Input)`
    color: ${({ type, theme }) => theme.input[type].textColor};
    font-size: 1em;
    background: ${({ type, theme }) => theme.input[type].bg};
    border: ${({ type, theme }) => theme.input[type].border};
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    ${({ disabled }) => disabled && disableStyle}
`;

const StyledInput = (props: InputProps) => <Styles {...props} />;

export default StyledInput;
