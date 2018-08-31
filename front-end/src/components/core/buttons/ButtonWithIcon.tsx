import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import styled from '../../../libs/styled-components-with-them-anotation';

interface IButtonWithIcon {
  type?: string,
  size?: string,
  iconColor?: string,
  icon: IconDefinition,
  position: 'left' | 'right',
}

const IconWithPaddings = styled(FontAwesomeIcon)`
  padding: 0 5px 0 5px;
`;

const ButtonWithIcon: React.SFC<IButtonWithIcon> = (props) => {
  const {
    type, size, children, icon, position, iconColor,
  } = props;
  return (
    <Button type={type} size={size}>
      {position === 'left' && children}
      <IconWithPaddings icon={icon} color={iconColor} />
      {position === 'right' && children}
    </Button>
  );
};

/** @component */
export default ButtonWithIcon;
