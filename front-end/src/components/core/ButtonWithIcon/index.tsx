import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button, { IButton } from '../Button/Button';
import styled from 'react-emotion';

interface IButtonWithIcon extends IButton {
  iconColor?: string,
  icon: string,
  position: 'left' | 'right',
}

const IconWithPaddings = styled(FontAwesomeIcon)`
  padding: 0 5px 0 5px;
`;

const ButtonWithIcon: React.SFC<IButtonWithIcon> = (props) => {
  const {
    type, size, block, children, icon, position, iconColor,
  } = props;
  return (
    <Button type={type} size={size} block={block}>
      {position === 'left' && children}
      <IconWithPaddings icon={icon as IconProp} color={iconColor} />
      {position === 'right' && children}
    </Button>
  );
};

/** @component */
export default ButtonWithIcon;