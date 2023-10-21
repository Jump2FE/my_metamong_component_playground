import { TIconType } from 'components/Icon/Icon';
import { TClassName } from './Chip.interface';
import * as S from './Chip.style';

const bindStyle = (name: TClassName) => {
  switch (name) {
    case 'primary':
      return S.Primary;
    case 'support':
      return S.Support;
    case 'support-line':
      return S.SupportLine;
    case 'outline':
      return S.Outline;
    case 'tag':
      return S.Tag;
    case 'arrow-top':
      return S.ArrowTop;
    case 'copy':
      return S.Copy;
    case 'hamburger':
      return S.Hamburger;
    case 'hamburger-news':
      return S.HamburgerNews;
    case 'share':
      return S.Share;
    case 'more':
      return S.More;
    case 'download':
      return S.Download;
    case 'direct':
      return S.Direct;
    default:
      return S.Base;
  }
};
const checkIsIcon = (name: TClassName): TIconType | undefined => {
  switch (name) {
    case 'primary':
      return undefined;
    case 'support':
      return undefined;
    case 'support-line':
      return undefined;
    case 'outline':
      return undefined;
    case 'tag':
      return undefined;
    case 'arrow-top':
      return 'arrow_top';
    case 'copy':
      return 'copy';
    case 'hamburger':
      return 'hamburger';
    case 'hamburger-news':
      return 'hamburgerNews';
    case 'share':
      return 'share';
    case 'more':
      return 'more';
    case 'download':
      return 'download';
    case 'direct':
      return 'direct';
    default:
      return undefined;
  }
};

export { bindStyle, checkIsIcon };
