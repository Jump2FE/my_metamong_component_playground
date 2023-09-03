import React from 'react';
import { ChipContainer, ChipDeleteIcon, ChipIcon } from './Chip.styles';
import { ChipProps } from './Chip.types';
import deleteIcon from '@/assets/cross.png';

function Chip({
  label,
  onClick,
  onDelete,
  icon,
  color = 'primary',
  variant = 'filled',
  size = 'small',
}: ChipProps) {
  return (
    <ChipContainer onClick={onClick} color={color} variant={variant} size={size}>
      {icon && <ChipIcon src={icon} alt="icon" />}
      {label}
      {onDelete && <ChipDeleteIcon src={deleteIcon} alt="delete" onClick={onDelete} />}
    </ChipContainer>
  );
}

export default Chip;
