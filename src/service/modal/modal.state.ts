import { atom } from 'recoil';
import { TModalItem } from './modal.type';

export const modalItemsState = atom<TModalItem[]>({
  key: 'modalItemsState',
  default: [],
});
