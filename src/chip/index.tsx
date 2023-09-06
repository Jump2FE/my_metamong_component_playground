import { FC, PropsWithChildren, useState } from 'react';

// Style
import { ChipContainer, ChipLeadingImg, ChipLabel, ChipTrailingImg } from './styled';

interface IChip extends PropsWithChildren {
  useSelected?: boolean;
  backgroundColor?: {
    default: string;
    select: string;
  };
  borderColor?: {
    default: string;
    select: string;
  };
  onClick?: () => void;
}

interface IComposingChip {
  Label: typeof ChipLabel;
  LeadingImg: typeof ChipLeadingImg;
  TrailingImg: typeof ChipTrailingImg;
}
const Chip: FC<IChip> & IComposingChip = ({
  useSelected,
  backgroundColor = {
    default: '#fff',
    select: '#bcbcbc',
  },
  borderColor = {
    default: '#bcbcbc',
    select: '#bcbcbc',
  },
  onClick,
  children,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChip = () => {
    if (useSelected) setIsSelected((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <ChipContainer selected={isSelected} background={backgroundColor} border={borderColor} onClick={handleChip}>
      {children}
    </ChipContainer>
  );
};

export default Chip;

Chip.Label = ChipLabel;
Chip.LeadingImg = ChipLeadingImg;
Chip.TrailingImg = ChipTrailingImg;
