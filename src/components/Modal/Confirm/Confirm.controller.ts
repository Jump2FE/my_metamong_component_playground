import { IConfirm } from 'service/modal/modal.interface';
import useModalService from 'service/modal/modal.service';
import { MouseEvent, MouseEventHandler } from 'react';

const ConfirmController = (props: IConfirm) => {
  const modalService = useModalService();

  const handleOk: MouseEventHandler = (event: MouseEvent) => {
    props.handleOk(event);
    modalService.close(props._id);
  };

  const handleCancel: MouseEventHandler = (event: MouseEvent) => {
    if (props.handleCancel) {
      props.handleCancel(event);
    }
    modalService.close(props._id);
  };

  return { handleOk, handleCancel };
};

export default ConfirmController;
