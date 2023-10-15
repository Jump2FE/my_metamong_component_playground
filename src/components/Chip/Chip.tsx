import React from 'react';
import { IButtonProps } from './Chip.interface';
import { bindStyle, checkIsIcon } from './Chip.helper';
import Icon from 'components/Icon/Icon';

const Chip: React.FC<IButtonProps> = (props: IButtonProps) => {
  // const Button = bindStyle(props.className);
  // const iconType = checkIsIcon(props.className);

  return <i {...props}>CHIP</i>;
};

export default Chip;
