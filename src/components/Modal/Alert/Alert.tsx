import { IAlert } from 'service/modal/modal.interface';
import useAlertController from './Alert.controller';

type IProps = IAlert;

const Alert = (props: IProps) => {
  const alertController = useAlertController(props);

  return (
    <div className="mini_modal_container">
      <div role="alert" className="modal_message">
        {props.text}
        {props.subText && <i>{props.subText}</i>}
      </div>
      <div className="btn_group_modal">
        <button type="button" onClick={alertController.handleOk} autoFocus>
          확인
        </button>
      </div>
    </div>
  );
};

export default Alert;
