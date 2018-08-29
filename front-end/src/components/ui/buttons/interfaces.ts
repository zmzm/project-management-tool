import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  // TODO: add more accurate annotation, this element can have string child, or string and Icon
  // element, or Icon element and string
  children: any,
  type?: string,
  size?: string,
}

interface IButtonWithIcon {
  type?: string,
  size?: string,
  iconColor?: string,
  icon: IconDefinition;
  position: 'left' | 'right';
  children: string;
}

export {
  IButton,
  IButtonWithIcon,
};
