import { font, lineHeight } from 'styles/mixin.style';
import styled from 'styled-components';
import { flex } from 'styles/mixin.style';
import { Color } from 'styles/varialbes.style';

const Base = styled.button`
  ${flex()}
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  ${lineHeight(16, 26)};
  ${font('body16', 'medium')}
  letter-spacing: -0.2px;
  border-radius: 50px;
`;

const Primary = styled(Base)`
  color: ${Color.textWhiteHigh};
  padding: 13px 30px;
  min-width: 104px;
  background-color: ${Color.textBlue};
  &:hover {
    background-color: ${Color.blue300};
  }
`;

const Support = styled(Base)`
  color: ${Color.textBlackHigh};
  padding: 11px 30px;
  min-width: 104px;

  font-weight: 700;
  text-align: center;

  background-color: ${Color.dividerGrey100};
  &:hover {
    background-color: ${Color.grey200};
  }
`;

const SupportLine = styled(Base)`
  color: ${Color.textBlackHigh};
  padding: 11px 30px;
  min-width: 104px;
  background-color: ${Color.textWhiteHigh};
  border: 1px solid ${Color.grey300};
  &:hover {
    background-color: ${Color.blue50};
  }
`;

const Outline = styled(Base)`
  color: ${Color.textBlue};
  background-color: ${Color.textWhiteHigh};
  border: 1.5px solid ${Color.textBlue};
  border-radius: 24px;
  padding: 11px 20px;
  line-height: 1;
  min-width: 84px;
  font-weight: 700;
  &:hover {
    background-color: ${Color.blue50};
  }
`;

const Tag = styled(Base)`
  color: ${Color.blue100};
  background-color: ${Color.textWhiteHigh};
  border: 1px solid ${Color.textBlue};
  border-radius: 2px;
  padding: 4px 8px;
  letter-spacing: -0.1px;
  min-width: 68px;
  ${font('body14', 'medium')}
  ${lineHeight(14, 22)};
  &:hover {
    background-color: ${Color.textBlackDisable};
  }
`;

const IconBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  min-height: 60px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ArrowTop = styled(IconBase)`
  border-radius: 4px;
  background-color: ${Color.backgroundGrey50};
  &:hover {
    background-color: ${Color.grey200};
  }
`;

const Copy = styled(IconBase)`
  border-radius: 4px;
  background-color: ${Color.backgroundGrey50};
  &:hover {
    background-color: ${Color.grey200};
  }
`;

const Hamburger = styled(IconBase)`
  border-radius: 32px;
  width: 56px;
  height: 56px;
  background-color: ${Color.textWhiteHigh};
  border: 1px solid ${Color.dividerGrey200};
  &:hover {
    background-color: ${Color.textBlackDisable};
  }
`;

const HamburgerNews = styled(IconBase)`
  border-radius: 32px;
  width: 56px;
  height: 56px;
  background-color: ${Color.textWhiteHigh};
  border: 1px solid ${Color.dividerGrey200};
  &:hover {
    background-color: ${Color.blue50};
  }
`;

const Share = styled(IconBase)`
  border-radius: 4px;
  background-color: ${Color.backgroundGrey50};
  &:hover {
    background-color: ${Color.textBlackDisable};
  }
`;

const More = styled(IconBase)`
  color: ${Color.textBlackHigh};
  background-color: transparent;
  border: 1px solid transparent;
  letter-spacing: -0.2px;

  ${lineHeight(18, 28)};
  ${font('title18', 'bold')}
  &:hover {
    color: ${Color.blue200};
  }
`;

const Download = styled(IconBase)`
  color: ${Color.blue200};
  background-color: transparent;
  border: 1px solid transparent;
  letter-spacing: -0.2px;

  ${lineHeight(18, 28)};
  ${font('title18', 'bold')}
  &:hover {
    color: ${Color.blue100};
  }
`;

const Direct = styled(IconBase)`
  color: ${Color.blue200};
  background-color: transparent;
  border: 1px solid transparent;
  letter-spacing: -0.2px;

  ${lineHeight(18, 28)};
  ${font('title18', 'bold')}
  &:hover {
    color: ${Color.blue100};
  }
`;

export {
  Base,
  Primary,
  Support,
  SupportLine,
  Outline,
  Tag,
  ArrowTop,
  Copy,
  Hamburger,
  HamburgerNews,
  Share,
  More,
  Download,
  Direct,
};
