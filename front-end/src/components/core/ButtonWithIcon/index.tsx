import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Button from '../Button';
import styled from '../../../libs/styled-components-with-theme-anotation';
import { IButton } from '../Button';

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
