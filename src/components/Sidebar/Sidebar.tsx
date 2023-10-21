import * as S from './Sidebar.style';
import Icon from 'components/Icon/Icon';

export default function Sidebar() {
  return (
    <S.SideBarWrapper>
      <div className="logo">
        <S.MenuLink to="/">
          <Icon name="globe" />
          <span>HOME</span>
        </S.MenuLink>
      </div>
      <S.MenuWrapper>
        <S.MenuItem>
          <S.MenuLink to="/chip">
            <Icon name="workspace" />
            <span>CHIP</span>
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/button">
            <Icon name="triangle" />
            <span>BUTTON</span>
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/modal">
            <Icon name="more" />
            <span>MODAL</span>
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuWrapper>
    </S.SideBarWrapper>
  );
}
