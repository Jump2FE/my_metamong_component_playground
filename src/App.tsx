import Modal from 'modal';
import { useEffect } from 'react';
import useModal from 'stores/useModal';

const App = () => {
  const { openModal } = useModal();

  useEffect(() => {
    openModal({
      COMMON: {
        component: <>COMMON</>,
        callback() {
          console.log('Call Back');
        },
      },
    });
  }, [openModal]);

  return (
    <>
      <Modal />
    </>
  );
};

export default App;
