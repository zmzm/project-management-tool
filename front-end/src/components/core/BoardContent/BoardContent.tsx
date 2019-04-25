import * as React from 'react';

import { css } from 'emotion';

const contentWrapper = css`
  position: relative;
  font-size: 1.5rem;
  color: white;
  height: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 0.5rem;
`;

export class BoardContent extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return <div className={contentWrapper}>{children}</div>;
  }
}
