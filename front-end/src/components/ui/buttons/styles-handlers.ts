import { darken } from 'polished';
import ITheme from '../../../styled-components/themes/theme-interface';

const sizeList = {
  big: '40px',
  medium: '30px',
  small: '20px',
};

/**
 * Returns size measure depend on size prop(used to set font-size property)
 */
export const getSizeMeasure = ({ size }: { size?: string }): string => (size
  ? sizeList[size]
  : sizeList.small);

/**
 * Extracts background color from theme depends on type
 */
export const getBackgroundColor = (
  { type, theme }: { type?: string, theme: ITheme },
): string => (type
  ? theme.buttons[type].bg
  : theme.buttons.regular.bg);

/**
 * Extracts text color from theme depends on type
 */
export const getTextColor = (
  { type, theme }: { type?: string, theme: ITheme },
): string => (type
  ? theme.buttons[type].text
  : theme.buttons.regular.text);

/**
 * Generates darken colors for text and background, for handling active button state
 */
export const getActiveStyles = (
  { type, theme }: { type?: string, theme: ITheme },
): string => {
  const backgroundColor = getBackgroundColor({ type, theme });
  const textColor = getTextColor({ type, theme });
  const hoverStyles = `
    background-color: ${darken('0.2', backgroundColor)};
    color: ${darken('0.2', textColor)};
  `;

  return hoverStyles;
};

/**
 * Sets styles that are common for all buttons
 */
export const getCommonButtonStyles = (): string => `
  cursor: pointer;
  border-radius: 5px;
  outline: 0;
  border: 1px solid;
`;
