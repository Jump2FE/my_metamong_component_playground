import useModalListController from './ModalList.controller';
import * as S from './ModalList.style';
import { createPortal } from 'react-dom';

const portalElement = document.getElementById('modal_portal') as HTMLElement;

const ModalList = () => {
  const modalList = useModalListController();

  if (modalList.modalItems.length === 0) return <></>;

  return createPortal(
    <S.DimLayer>
      <S.DimBg>
        {modalList.modalItems.map((modal) => {
          return (
            <S.ModalLayer key={modal._id} isLong={!!modal.isLong}>
              {modalList.getComponent(modal)}
            </S.ModalLayer>
          );
        })}
      </S.DimBg>
    </S.DimLayer>,
    portalElement,
  );
};

export default ModalList;
