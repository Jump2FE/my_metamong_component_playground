import BaseButton from 'components/BaseButton/BaseButton';
import * as S from './Chapter2.style';
import useChapter2Controller from './Chapter2.controller';

export default function Chapter2() {
  const chapter2Controller = useChapter2Controller();

  return (
    <S.Chapter2Wrapper>
      <BaseButton className="primary" onClick={chapter2Controller.handleClick}>
        primary
      </BaseButton>
      <BaseButton className="support" onClick={chapter2Controller.handleClick}>
        support
      </BaseButton>
      <BaseButton
        className="support-line"
        onClick={chapter2Controller.handleClick}
      >
        support-line
      </BaseButton>
      <BaseButton className="outline" onClick={chapter2Controller.handleClick}>
        outline
      </BaseButton>
      <BaseButton className="tag" onClick={chapter2Controller.handleClick}>
        tag
      </BaseButton>
      <BaseButton
        className="arrow-top"
        onClick={chapter2Controller.handleClick}
      />
      <BaseButton className="copy" onClick={chapter2Controller.handleClick} />
      <BaseButton
        className="hamburger"
        onClick={chapter2Controller.handleClick}
      />
      <BaseButton
        className="hamburger-news"
        onClick={chapter2Controller.handleClick}
      />
      <BaseButton className="share" onClick={chapter2Controller.handleClick} />
      <BaseButton className="more" onClick={chapter2Controller.handleClick} />
      <BaseButton
        className="download"
        onClick={chapter2Controller.handleClick}
      />
      <BaseButton className="direct" onClick={chapter2Controller.handleClick} />
    </S.Chapter2Wrapper>
  );
}
