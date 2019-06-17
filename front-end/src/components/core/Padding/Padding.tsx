import * as React from 'react';

import { css } from 'emotion';

const paddingCss = (padding?: string) => css`
  ${padding ? `padding: ${padding};` : null}
`;

export interface IPaddingProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
}

export class Padding extends React.PureComponent<IPaddingProps> {
  public render() {
    const { children, padding, ...rest } = this.props;

    return (
      <div className={paddingCss(padding)} {...rest}>
        {children}
      </div>
    );
  }
}
