import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { IButtonWithIcon } from './interfaces';
import './icon-styles.css';

const ButtonWithIcon: React.SFC<IButtonWithIcon> = (props) => {
  const {
    type, size, children, icon, position, iconColor,
  } = props;
  return (
    <Button type={type} size={size}>
      {position === 'left' && children}
      <FontAwesomeIcon icon={icon} className="icon-within-button" color={iconColor} />
      {position === 'right' && children}
    </Button>
  );
};

/** @component */
export default ButtonWithIcon;
