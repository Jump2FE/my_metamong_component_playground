import React from 'react';
import { IButtonProps } from './BaseButton.interface';
import { bindStyle, checkIsIcon } from './BaseButton.helper';
import Icon from 'components/Icon/Icon';

const BaseButton: React.FC<IButtonProps> = (props: IButtonProps) => {
  const Button = bindStyle(props.className);
  const iconType = checkIsIcon(props.className);

  return (
    <Button {...props}>
      {props.children}
      {iconType ? <Icon name={iconType} /> : null}
    </Button>
  );
};

export default BaseButton;
