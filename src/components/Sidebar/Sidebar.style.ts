import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from 'styles/varialbes.style';

export const SideBarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 5.625rem;
  margin-left: -1rem;
  flex: 1;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(NavLink)`
  list-style: none;
  border-radius: 0.5rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${Color.blue100};
  text-decoration: none;

  &:hover {
    background: ${Color.blue50};
  }
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
  span {
    font-size: 1.125rem;
    margin-left: 1rem;
  }

  &.active {
    background: ${Color.blue50};
    color: ${Color.blue300};
    span {
      font-weight: bold;
    }
  }
`;
