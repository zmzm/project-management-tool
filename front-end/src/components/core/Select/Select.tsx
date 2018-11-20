import * as React from 'react';

import styled, { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

export const SelectVariants = {
  Default: 'default',
  Inverted: 'inverted',
};

export interface ISelectOption {
    value: string,
    label: string
}

const disableStyle = css`
  color: #fff;    
  cursor: not-allowed;
  background-color: #cbcbcbcb;
  outline:none;
`;

const SelectLabel = styled('label')`
  color: #fff;
  line-height: 1.4;
  display: inline-block;
  cursor: pointer;
  font-size: 1.6rem;
`;

const selectCss = ({ input }, variant, disabled) => css`
  color: ${input[variant].textColor};
  font-size: 1.4rem;
  background-color: ${input[variant].bg};
  border: none;
  border-radius: 0.4rem;
  width: 100%;
  padding: 1rem;
  line-height: 2.6rem;
  ${disabled && disableStyle}

  :: placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

interface ISelectProps {
    variant: string,
    label?: string,
    className?: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    autoFocus?: boolean,
    options: ISelectOption[],
    theme?: any,
    onChange: (value: ISelectOption) => any,
}

// @ts-ignore
@withTheme
export class Select extends React.PureComponent<ISelectProps, {}> {
  public select: HTMLSelectElement;

  public componentDidMount(): void {
    this.autoFocus();
  }

  public isAutoFocus(): boolean {
    const { autoFocus, disabled } = this.props;
    return Boolean(autoFocus) && !disabled;
  }

  public autoFocus = (): void => {
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

  public getOptions() {
    const { options, placeholder } = this.props;
    const result = options.map((option: ISelectOption) => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ));

    if (placeholder) {
      result.unshift(
        <option key="__placeholder__" value="" disabled>
          {placeholder}
        </option>
      );
    }

    return result;
  }

  public setSelect = (element: any): void => {
    this.select = element;
  }

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
      variant,
      theme,
    } = this.props;
    return (
      <div>
        {this.renderLabel()}
        <select
          className={cx(className, selectCss(theme, variant, disabled))}
          placeholder={placeholder}
          value={value || ''}
          ref={this.setSelect}
          disabled={disabled}
          onChange={this.handleChange}
        >
          {this.getOptions()}
        </select>
      </div>
    );
  }
}
