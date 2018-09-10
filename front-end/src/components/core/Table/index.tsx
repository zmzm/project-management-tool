import * as React from 'react';
import styled, { css } from '../../../libs/styled-components-with-theme-anotation';

export const TableVariants = {
  Bordered: 'bordered',
  Narrow: 'narrow',
  Striped: 'striped',
};

interface ITableProps {
    type: string,
    className?: string,
    children: any
}

class Table extends React.PureComponent<ITableProps, {}> {
  public render() {
    const { className, children } = this.props;
    return (
      <table
        className={className}
      >
        {children}
      </table>
    );
  }
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

const Styles = styled(Table)`
    font-size: 1em;
    width: 100%;
    line-height: 26px;
    ${({ type }) => type === TableVariants.Bordered && borderedStyle}
    ${({ type }) => type === TableVariants.Striped && stripedStyle}
`;

const StyledTable = (props: ITableProps) => <Styles {...props} />;

export default StyledTable;
