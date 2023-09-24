import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

// Store
import useModal, { ModalInfo } from 'stores/useModal';

// Style
import * as S from 'styles/common/Modal';

const Modal = () => {
  const { modalStack, closeModal } = useModal();

  const modalContainer = document.getElementById('modal') as Element;
  if (!modalContainer) {
    alert('Modal Container is not exist!');

    return null;
  }

  const handleConfirm = (e: MouseEvent<HTMLElement>, type: string, callback?: () => void) => {
    e.stopPropagation();

    if (callback) callback();
    else closeModal({ customType: type });
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>, type: string) => {
    e.stopPropagation();

    closeModal({ customType: type });
  };

  const renderModal = (type: string, { component, callback }: ModalInfo) => {
    let children = component;

    switch (type) {
      case 'COMMON':
        children = (
          <S.DefaultModalBox>
            <S.DefaultModalParagraph>{component}</S.DefaultModalParagraph>
          </S.DefaultModalBox>
        );
        break;
      case 'ONLY_CONFIRM':
        children = (
          <S.DefaultModalBox>
            <S.DefaultModalParagraph>{component}</S.DefaultModalParagraph>
            <S.DefaultModalFunctionBox $isOneButton>
              <S.ModalButton onClick={(e) => handleConfirm(e, type, callback)}>확인</S.ModalButton>
            </S.DefaultModalFunctionBox>
          </S.DefaultModalBox>
        );
        break;
      case 'CONFIRM':
        children = (
          <S.DefaultModalBox>
            <S.DefaultModalParagraph>{component}</S.DefaultModalParagraph>
            <S.DefaultModalFunctionBox $isOneButton>
              <S.ModalButton onClick={(e) => handleConfirm(e, type, callback)}>확인</S.ModalButton>
              <S.ModalButton onClick={(e) => handleClose(e, type)}>취소</S.ModalButton>
            </S.DefaultModalFunctionBox>
          </S.DefaultModalBox>
        );
        break;

      default:
        break;
    }

    return createPortal(
      <S.ModalLayout>
        <S.ModalBox>{children}</S.ModalBox>
      </S.ModalLayout>,
      modalContainer,
    );
  };

  return <>{Object.entries(modalStack).map(([type, modalInfo]) => renderModal(type, modalInfo))}</>;
};

export default Modal;
