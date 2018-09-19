import * as React from 'react';

import styled, { keyframes } from 'react-emotion';

/**
 * Extracts needed values for setting background-color property from theme
 */
const generateStylesBasedOnTheme = ({ theme }: { theme: any }): string => {
  const { bg, stub, roller } = theme.spinner;
  const styles = `
    background-color: ${bg};

    & .stub: {
      background-color: ${stub};
    }

    & .roller > div:first-child {
      background-color: ${roller};
    }
  `;
  return styles;
};

interface ISpinner {
  className?: string;
}

const Spinner: React.SFC<ISpinner> = ({ className }) => (
  <div className={className}>
    <div className="stub" />
    <div className="roller">
      <div />
      <div />
    </div>
  </div>
);

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
    width: 10px;
  }

  25% {
    transform: rotate(90deg);
    width: 20px;
  }

  50% {
    transform: rotate(180deg);
    width: 30px;
  }

  75% {
    transform: rotate(270deg);
    width: 20px;
  }

  100% {
    transform: rotate(360deg);
    width: 10px;
  }
`;

const StyledSpinner = styled(Spinner)`
  ${generateStylesBasedOnTheme}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  & .stub {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    z-index: 1;
    background-color: white;
  }

  & .roller {
    position: absolute;
    align-self: start;
    display: flex;
    flex-wrap: wrap;
    width: 10px;
    height: 40px;
    z-index: 0;
    animation: ${rotate360} 1s linear infinite;
    
    & div {
      width: 100%;
    }
  }
`;

export default StyledSpinner;
