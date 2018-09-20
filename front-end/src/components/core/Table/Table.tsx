import * as React from 'react';

import { css, cx } from 'react-emotion';

export enum TableVariants {
  Bordered = 'bordered',
  Narrow = 'narrow',
  Striped = 'striped',
}

const borderedStyle = css`
  border-collapse: collapse;
  border-spacing: 0;

  & td, th {
      border: 2px solid palevioletred;
  }

  & tr:last-child td,
    tr:last-child th {
      border-bottom-width: 2px;
  }
`;

const stripedStyle = css`
  border-collapse: collapse;
  border-spacing: 0;

  & thead th {
      border-width: 0 0 2px;
  }

  & td, th {
      border: 1px solid palevioletred;
      border-width: 0 0 1px;
  }
  
  & tbody tr:last-child td {
      border-bottom-width: 0;
  }
`;

const tableCss = (type) => css`
  font-size: 1em;
  width: 100%;
  line-height: 26px;
  padding: 8px 10px;
  ${type === TableVariants.Bordered && borderedStyle}
  ${type === TableVariants.Striped && stripedStyle}
`;

interface ITableProps {
    type: string,
    className?: string,
    children: any
}

export class Table extends React.PureComponent<ITableProps, {}> {
  public render() {
    const { className, children, type } = this.props;
    return (
      <table
        className={cx(className, tableCss(type))}
      >
        {children}
      </table>
    );
  }
}
