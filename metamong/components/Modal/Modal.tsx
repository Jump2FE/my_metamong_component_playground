import { cn } from '@/utils/cn';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

export interface ModalProps extends React.PropsWithChildren {
  withClose?: boolean;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// Modal에서도 Compound pattern을 적용해보고 싶다

export const Modal = forwardRef(function Modal(
  props: ModalProps,
  ref: React.Ref<HTMLDivElement>, // ? React.RefObject는 무엇?
) {
  const { children, ...rest } = props;
  return (
    <ModalBase {...rest} ref={ref}>
      {children}
    </ModalBase>
  );
});

export const ModalBase = forwardRef(function ModalBase(
  props: ModalProps,
  ref: React.Ref<HTMLDivElement>, // ? React.RefObject는 무엇?
) {
  const { children, ...rest } = props;
  return createPortal(
    <ModalInternal ref={ref} {...rest}>
      {children}
    </ModalInternal>,
    document.body,
  );
});

export interface ModalInternalProps extends ModalProps {
  ref?: React.Ref<HTMLDivElement>;
}
function ModalInternal(props: ModalInternalProps) {
  const { children, className, style, onClose, withClose, ref } = props;
  return (
    <>
      <div
        ref={ref}
        className="fixed flex top-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 z-100 items-center justify-center"
        onClick={(e) => {
          if (e.target !== e.currentTarget) return; // * 중첩된 컴포넌트에서 이벤트 처리할 때 중요 분기
          e.stopPropagation();
          onClose?.();
        }}
      >
        <div
          role="dialog"
          className={cn(
            'absolute flex flex-col gap-3 p-2 bg-white w-1/3 h-1/3 rounded-md z-200',
            className,
          )}
          style={style}
        >
          {withClose && (
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
            >
              <AiOutlineClose />
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}

export function ModalTitle({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn('flex justify-center w-full text-lg font-bold', className)} style={style}>
      {children}
    </div>
  );
}

export function ModalBody({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn('flex justify-center w-full', className)} style={style}>
      {children}
    </div>
  );
}
