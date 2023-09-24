import { MouseEventHandler } from 'react';
import { TModal } from './modal.type';

export interface IModal {
  _id: string;
  isLong?: boolean;
  type: TModal;
}

export interface IAlert extends IModal {
  text: string;
  subText?: string;
  handleOk?: MouseEventHandler;
  okButtonText?: string;
  type: 'ALERT';
}

export interface IConfirm extends IModal {
  text: string;
  handleOk: MouseEventHandler;
  handleCancel?: MouseEventHandler;
  okButtonText?: string;
  cancelButtonText?: string;
  type: 'CONFIRM';
}
