import BaseButton from 'components/BaseButton/BaseButton';
import * as S from './Chapter4.style';
import useChapter2Controller from './Chapter4.controller';

export default function Chapter4() {
  const chapter2Controller = useChapter2Controller();

  return (
    <S.Chapter4Wrapper>
      <BaseButton
        className="primary"
        onClick={chapter2Controller.handleOpenAlert}
      >
        Alert
      </BaseButton>
      <BaseButton
        className="primary"
        onClick={chapter2Controller.handleOpenConfirm}
      >
        Confirm
      </BaseButton>
    </S.Chapter4Wrapper>
  );
}
