import { darken } from 'polished';
import styled from '../../../libs/styled-components-with-theme-anotation';
import ITheme from '../../../themes/theme-interface';

/**
 * Generates styles based on type prop value
 */
const generateStylesBasedOnType = ({ type, theme }: { type?: string, theme: ITheme }): string => {
  const colorSource = type
    ? theme.buttons[type]
    : theme.buttons.regular;

  const { bg, text, border } = colorSource;
  const styles = `
    background-color: ${bg};
    color: ${text};
    border: 1px solid ${border};

    &:active {
      color: ${darken('0.2', text)};
      background-color: ${darken('0.2', bg)};
    }
  `;
  return styles;
};

/**
 * Generates styles based on size prop value
 */
const generateStylesBasedOnSize = ({ size }: { size?: string }): string => {
  const sizeList = {
    big: '40px',
    medium: '30px',
    small: '20px',
  };

  const sizeValue = size
    ? sizeList[size]
    : sizeList.small;

  const styles = `
    font-size: ${sizeValue};
  `;
  return styles;
};

export interface IButton {
  type?: string,
  size?: string,
  block?: boolean,
}

const generateStylesBasedOnBlock = ({ block }: { block?: boolean }) => (block
  ? 'width: 100%'
  : '');

const Button = styled<IButton, 'button'>('button')`
  ${generateStylesBasedOnSize}
  ${generateStylesBasedOnType}
  ${generateStylesBasedOnBlock}
  cursor: pointer;
  border-radius: 5px;
  outline: 0;
`;

/** @component */
export default Button;
