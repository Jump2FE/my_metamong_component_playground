import { useRecoilState } from 'recoil';
import { modalItemsState } from './modal.state';
import { TModalItem } from './modal.type';
import { uniqueId } from 'lodash';
import { TValOrUpdater } from 'service/dictionary/dictionary.type';

const useModalService = () => {
  const [modalItems, setModalItems] = useRecoilState(modalItemsState);

  const open = <T extends TModalItem>(modal: Omit<T, '_id'>): string => {
    const id = uniqueId(`${modal.type}_`);
    const newItem = { ...modal, _id: id };
    setModalItems((items) => [...items, newItem as unknown as TModalItem]);
    return id;
  };

  const close = (id: string) => {
    setModalItems((modalItems) => modalItems.filter(({ _id }) => _id !== id));
  };

  const update = <T extends TModalItem>(
    id: string,
    valOrUpdater: TValOrUpdater<T>,
  ) => {
    setModalItems((modalItems) => {
      if (!modalItems.find(({ _id }) => _id === id)) return modalItems;
      return modalItems.map((modalItem) => {
        if (modalItem._id !== id) return modalItem;
        return typeof valOrUpdater === 'function'
          ? valOrUpdater(modalItem as T)
          : valOrUpdater;
      });
    });
  };

  return { modalItems, open, close, update };
};

export default useModalService;
