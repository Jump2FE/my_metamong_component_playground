import { IAlert, IConfirm } from './modal.interface';

export type TModal = 'ALERT' | 'CONFIRM';

export type TModalItem = IAlert | IConfirm;
