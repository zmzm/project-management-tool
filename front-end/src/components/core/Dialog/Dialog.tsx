import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { css } from 'emotion';

const dialogContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 17.5%;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 8px 16px -4px rgba(9,45,66,.25), 0 0 0 1px rgba(9,45,66,.08);
  width: 30rem;
  height: 35rem;
`;

export interface IDialogProps {
  visible: boolean;
}

export class Dialog extends React.PureComponent<IDialogProps> {
  public render() {
    const { children, visible } = this.props;

    if (visible) {
      return ReactDOM.createPortal(
        <div
          className={dialogContainerCss}
        >
          {children}
        </div>,
        document.querySelector('body') as Element
      );
    }

    return null;
  }
}
