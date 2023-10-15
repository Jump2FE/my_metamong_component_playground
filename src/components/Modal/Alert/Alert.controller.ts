import { IAlert } from 'service/modal/modal.interface';
import useModalService from 'service/modal/modal.service';
import { MouseEvent, MouseEventHandler } from 'react';

const useAlertController = (props: IAlert) => {
  const modalService = useModalService();

  const handleOk: MouseEventHandler = (event: MouseEvent) => {
    if (props.handleOk) {
      props.handleOk(event);
    }

    modalService.close(props._id);
  };

  return { handleOk };
};

export default useAlertController;
