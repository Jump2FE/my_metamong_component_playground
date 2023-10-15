'use client';

import { Button } from '@/components';
import { Modal } from '@/components/Modal';
import { ModalBase, ModalBody, ModalTitle } from '@/components/Modal/Modal';
import { useState } from 'react';
import { Box } from '../common/Box';

export function Modals() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <Box title="Modal" description="Modal 예제 입니다.">
      <div className="flex gap-4">
        <Button onClick={() => setIsOpen((io) => !io)}>기본 모달 {isOpen ? 'on' : 'off'}</Button>
        {isOpen && <Modal onClose={() => setIsOpen(false)}>안녕하세요!</Modal>}
        <Button onClick={() => setIsOpen2((io) => !io)}>
          타이틀 + 클로즈 버튼 포함한 모달 {isOpen2 ? 'on' : 'off'}
        </Button>
        {isOpen2 && (
          <ModalBase withClose onClose={() => setIsOpen2(false)}>
            <ModalTitle>인사말</ModalTitle>
            <ModalBody>안녕하세요!</ModalBody>
          </ModalBase>
        )}
        <Button onClick={() => setIsOpen3((io) => !io)}>
          커스텀 스타일 모달 {isOpen3 ? 'on' : 'off'}
        </Button>
        {isOpen3 && (
          <Modal className="bg-sky-300 border border-red-600" onClose={() => setIsOpen3(false)}>
            안녕하세요!
          </Modal>
        )}
      </div>
    </Box>
  );
}
