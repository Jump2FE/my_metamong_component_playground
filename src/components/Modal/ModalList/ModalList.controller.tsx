import useModalService from 'service/modal/modal.service';
import { TModalItem } from 'service/modal/modal.type';
import Alert from '../Alert/Alert';
import Confirm from '../Confirm/Confirm';

const useModalListController = () => {
  const modalService = useModalService();

  const getComponent = (modalItem: TModalItem) => {
    switch (modalItem.type) {
      case 'ALERT':
        return <Alert {...modalItem} />;
      case 'CONFIRM':
        return <Confirm {...modalItem} />;
    }
  };

  return { modalItems: modalService.modalItems, getComponent };
};

export default useModalListController;
