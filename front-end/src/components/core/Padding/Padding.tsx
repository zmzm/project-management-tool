import * as React from 'react';

import { css } from 'emotion';

const paddingCss = padding => css`
  ${padding ? `padding: ${padding};` : null}
`;

export interface IPaddingProps {
  padding?: string;
}

export class Padding extends React.PureComponent<IPaddingProps> {
  public render() {
    const { children, padding } = this.props;

    return <div className={paddingCss(padding)}>{children}</div>;
  }
}
