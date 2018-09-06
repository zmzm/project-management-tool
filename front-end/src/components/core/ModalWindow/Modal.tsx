import * as React from 'react';
import styled, { ITheme } from '../../../libs/styled-components-with-theme-anotation';

/**
 * Returns modal-window sizes depends on type
 */
const generateStylesBasedOnType = ({ type }: { type?: string }): string => {
  const sizingList = {
    absolute: `
      width: 100vw;
      height: 100vh;
    `,
    relative: `
      width: 100%;
      height: 100%;
    `,
  };

  const styles = type
    ? sizingList[type]
    : sizingList.absolute;

  return styles;
};

/**
 * Extracts needed values for setting background-color property from theme
 */
const generateStylesBasedOnTheme = ({ theme }: { theme: ITheme }) => {
  const { color, opacity } = theme.modalWindow;

  return `
    background-color: rgba(${color}, ${opacity});
  `;
};

interface IModalWindow {
  type?: string,
}

const ModalWindow = styled<IModalWindow, 'div'>('div')`
  ${generateStylesBasedOnType}
  ${generateStylesBasedOnTheme}
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalWindow = (props: IModalWindow) => <ModalWindow {...props} />;

export default StyledModalWindow;
