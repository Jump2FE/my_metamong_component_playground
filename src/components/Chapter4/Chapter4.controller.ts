import { MouseEvent } from 'react';
import { IAlert, IConfirm } from 'service/modal/modal.interface';
import useModalService from 'service/modal/modal.service';

export default function Chapter4Controller() {
  const modalService = useModalService();

  const handleOpenAlert = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modalService.open<IAlert>({
      type: 'ALERT',
      text: '알림창입니다.',
    });
  };

  const handleOpenConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modalService.open<IConfirm>({
      type: 'CONFIRM',
      text: '확인창입니다.',
      handleOk: () => {
        console.log('확인');
      },
    });
  };
  return {
    handleOpenAlert,
    handleOpenConfirm,
  };
}
