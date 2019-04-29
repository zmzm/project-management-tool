import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { css } from 'emotion';
import { Icon, IconSize } from '../Icon/Icon';

const dialogOverlayCss = css`
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const dialogContainerCss = (fullScreen?: boolean) => css`
  z-index: 3;
  background-color: #f5f6f7;
  border-radius: 0.4rem;
  box-shadow: 0 8px 16px -4px rgba(9, 45, 66, 0.25),
    0 0 0 1px rgba(9, 45, 66, 0.08);
  min-width: 40rem;
  min-height: 35rem;

  ${fullScreen && `width: 700px; height: 90%;`}
`;

const dialogHeaderCss = css`
  position: relative;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;

  i {
    cursor: pointer;
  }
`;

const dialogContentCss = css`
  margin: 5px 20px;
`;

const dialogFooterCss = css``;

export interface IDialogProps {
  visible: boolean;
  children: any;
  title?: React.ReactElement;
  fullScreen?: boolean;
  onClose?(...arg: any[]): any;
}

export class Dialog extends React.PureComponent<IDialogProps> {
  public render() {
    const { children, fullScreen, title, visible, onClose } = this.props;

    if (visible) {
      return ReactDOM.createPortal(
        <div className={dialogOverlayCss}>
          <div className={dialogContainerCss(fullScreen)}>
            <div className={dialogHeaderCss}>
              {title}
              <div>
                <Icon
                  onClick={onClose}
                  size={IconSize.Medium}
                  name="close"
                  color="gray"
                />
              </div>
            </div>
            <div className={dialogContentCss}>{children}</div>
            <div className={dialogFooterCss} />
          </div>
        </div>,
        document.querySelector('body') as Element,
      );
    }

    return null;
  }
}
