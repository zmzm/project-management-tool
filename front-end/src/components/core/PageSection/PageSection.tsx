import * as React from 'react';

import { css, cx } from 'emotion';
import { withTheme } from 'emotion-theming';

const pageSectionCss = (
  { page },
  margin = '0',
  maxWidth
) => css`
  margin: ${margin};
  background-color: transparent;
  position: relative;
  ${maxWidth && `max-width: ${maxWidth}px`};
  z-index: 1;
`;

export interface IPageSectionProps {
  margin?: string;
  maxWidth?: number;
  className?: string;
  theme?: any;
}

// @ts-ignore
@withTheme
export class PageSection extends React.PureComponent<IPageSectionProps> {
  public render() {
    const {
      className,
      margin,
      maxWidth,
      children,
      theme,
    } = this.props;

    return (
      <div
        className={
          cx(
            className,
            pageSectionCss(
              theme,
              margin,
              maxWidth
            )
          )
        }
      >
        {children}
      </div>
    );
  }
}
