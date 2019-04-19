import * as React from 'react';

import { css } from 'emotion';

const marginCss = (margin) => css`
  ${margin ? `margin: ${margin};` : null}
`;

export interface IMarginProps {
  margin?: string;
}

export class Margin extends React.PureComponent<IMarginProps> {
  public render() {
    const {
      children,
      margin,
    } = this.props;

    return (
      <div className={marginCss(margin)}>
        {children}
      </div>
    );
  }
}
