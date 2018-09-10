import * as React from 'react';
import styled, { css } from '../../../libs/styled-components-with-theme-anotation';

export const SelectVariants = {
  Default: 'default',
  Inverted: 'inverted',
};

export interface ISelectOption {
    value: string,
    label: string
}

interface ISelectProps {
    variant: string,
    label?: string,
    className?: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    autoFocus?: boolean,
    options: ISelectOption[],
    onChange: (value: ISelectOption) => any,
}

class Select extends React.PureComponent<ISelectProps, {}> {
  public select: HTMLSelectElement;

  public componentDidMount(): void {
    this.autoFocus();
  }

  public isAutoFocus(): boolean {
    const { autoFocus, disabled } = this.props;
    return Boolean(autoFocus) && !disabled;
  }

  public autoFocus(): void {
    if (this.isAutoFocus() && this.select) {
      if (document.activeElement !== this.select) {
        this.select.focus();
      }
    }
  }

  public handleChange = (event: any): void => {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  public getOptions = () => {
    const { options, placeholder } = this.props;
    const result = options.map((option: ISelectOption) => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ));

    if (placeholder) {
      result.unshift(
        <option key="__placeholder__" value="" disabled>
          {placeholder}
        </option>,
      );
    }

    return result;
  };

  public setSelect = (element: any): void => {
    this.select = element;
  };

  public renderLabel() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return (
      <SelectLabel>{label}</SelectLabel>
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
      <React.Fragment>
        {this.renderLabel()}
        <select
          className={className}
          placeholder={placeholder}
          value={value || ''}
          ref={this.setSelect}
          disabled={disabled}
          onChange={this.handleChange}
        >
          {this.getOptions()}
        </select>
      </React.Fragment>
    );
  }
}

const disableStyle = css`
  color: #cbcbcb;    
  cursor: not-allowed;
  border: 2px solid #cbcbcb;
  outline:none;
`;

const SelectLabel = styled('label')`
  color: #808080;
  line-height: 1.4;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
`;

const Styles = styled(Select)`
  color: ${({ variant, theme }) => theme.input[variant].textColor};
  font-size: 1em;
  background: ${({ variant, theme }) => theme.input[variant].bg};
  border: ${({ variant, theme }) => theme.input[variant].border};
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  line-height: 26px;
  ${({ disabled }) => disabled && disableStyle}
`;

const StyledSelect = (props: ISelectProps) => <Styles {...props} />;

export default StyledSelect;
