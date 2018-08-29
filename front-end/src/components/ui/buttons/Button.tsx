import styled from '../../../styled-components';
import {
  getActiveStyles, getBackgroundColor, getCommonButtonStyles, getSizeMeasure, getTextColor,
} from './styles-handlers';
import { IButton } from './interfaces';

const Button = styled<IButton, 'button'>('button')`
  ${getCommonButtonStyles}
  font-size: ${getSizeMeasure}
  background-color: ${getBackgroundColor}
  color: ${getTextColor}
  border-color: ${getTextColor}

  &:active {
    ${getActiveStyles}  
  }
`;

/** @component */
export default Button;
