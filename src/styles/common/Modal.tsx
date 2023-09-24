import Button from 'button';
import { styled } from 'styled-components';

export const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  touch-action: none;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ModalTitle = styled.p`
  margin-bottom: 6.667vmin;
  font-size: 6.667vmin;
  font-weight: 700;
`;

export const ModalButton = styled(Button)`
  width: 33.333vmin;
  font-size: 4.444vmin;
`;

export const DefaultModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  overflow: auto;
  width: 66.667vmin;
  padding: 5.556vmin;
  background-color: #fff;
`;

export const DefaultModalParagraph = styled.p`
  font-size: 5vmin;
  font-weight: 500;
  text-align: center;
  white-space: pre-wrap;
`;

export const DefaultModalFunctionBox = styled.div<{ $isOneButton?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $isOneButton }) => ($isOneButton ? 'space-around' : 'space-between')};
  align-items: center;
  width: 100%;
  margin-top: 6.667vmin;

  & button:nth-child(1) {
    background-color: #f1658a;
    color: #fff;
  }

  & button:nth-child(2) {
    margin-left: 2.222vmin;
    background-color: #3a3a4d;
    color: #fff;
  }
`;
