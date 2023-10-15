import { IConfirm } from 'service/modal/modal.interface';
import ConfirmController from './Confirm.controller';

type IProps = IConfirm;

const Confirm = (props: IProps) => {
  const confirmController = ConfirmController(props);

  return (
    <div className="mini_modal_container">
      <div className="modal_message">{props.text}</div>
      <div className="btn_group_modal btn_2">
        <button type="button" onClick={confirmController.handleCancel}>
          취소
        </button>
        <button type="button" onClick={confirmController.handleOk} autoFocus>
          확인
        </button>
      </div>
    </div>
  );
};

export default Confirm;
