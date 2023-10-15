import { cn } from '@/utils/cn';
import { AiOutlineCheck } from 'react-icons/ai';

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  onClick: (
    e:
      | React.MouseEvent<HTMLDivElement> // 마우스 클릭
      | React.KeyboardEvent<HTMLDivElement>, // 키보드 스페이스
  ) => void;
  disable?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  const { checked, onClick, disable } = props;
  return (
    <>
      <div
        className={cn(
          'box-border border border-line bg-white rounded-md w-6 h-6 flex justify-center items-center cursor-pointer',
          checked && 'bg-blue-500 border-blue-500',
          disable && 'border-gray-300 cursor-not-allowed',
        )}
        onClick={onClick}
        aria-checked={checked}
        aria-disabled={disable}
      >
        {checked && <AiOutlineCheck className="text-white" />}
      </div>
    </>
  );
}
