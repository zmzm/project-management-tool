import * as React from 'react';

import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Button, ButtonSize } from '../Button/Button';
import { Icon, IconSize } from '../Icon/Icon';
import colors from '../../../styles/default/colors';
import { ICONS } from '../../../consts/icons';

export interface IListProps {
  theme?: any;
  children?: any[];
  listName?: string;
}

const headerCss = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.7rem 0.4rem 1rem;
`;

const cardCss = css`
  background-color: #dfe3e6;
  border-radius: 0.3rem;
`;

const wrapperCss = css`
  margin: 0.5rem;
  height: 100%;
  width: 26rem;
  display: inline-block;
  cursor: pointer;
`;

// @ts-ignore
@withTheme
export class List extends React.Component<IListProps> {
  public render() {
    const { listName, children } = this.props;

    return (
      <div className={wrapperCss}>
        <div className={cardCss}>
          <div className={headerCss}>
            <Text
              fontSize={TextSize.Medium}
              color={colors.veryDarkBlue}
              weight={TextWeight.Bold}
            >
              {listName}
            </Text>
            <Button
              size={ButtonSize.Default}
              icon={
                <Icon
                  name={ICONS.MORE_HORIZ}
                  color={colors.darkGrayishBlue}
                  size={IconSize.Default}
                />
              }
              transparent
            />
          </div>
          {children}
        </div>
      </div>
    );
  }
}
