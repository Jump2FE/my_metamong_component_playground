import { create } from 'zustand';

type ModalType = 'COMMON' | 'CUSTOM' | 'ONLY_CONFIRM' | 'CONFIRM';
export type ModalInfo = {
  component: JSX.Element;
  callback?: () => void;
};
type DefalutModal = Record<ModalType, ModalInfo>;
type CustomModal = Record<string, ModalInfo>;
type ModalStack = DefalutModal | CustomModal;
interface IUseModal {
  modalStack: ModalStack;
  openModal: (props: ModalStack) => void;
  closeModal: (props: { defaultType?: keyof DefalutModal; customType?: keyof CustomModal }) => void;
  popModal: () => void;
  resetModal: () => void;
}

const useModal = create<IUseModal>((set) => ({
  modalStack: {},
  openModal(props) {
    set((prev) => ({ modalStack: { ...prev.modalStack, ...props } }));
  },
  closeModal({ defaultType, customType }) {
    set((prev) => {
      delete prev.modalStack[defaultType || (customType as keyof ModalStack)];

      return { modalStack: { ...prev.modalStack } };
    });
  },
  popModal() {
    set((prev) => {
      const list = Object.entries(prev.modalStack);
      list.pop();
      const willUpdateModalStack = Object.fromEntries(list);

      return { modalStack: willUpdateModalStack };
    });
  },
  resetModal() {
    set(() => ({ modalStack: {} }));
  },
}));

export default useModal;
