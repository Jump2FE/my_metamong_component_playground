import styled from 'styled-components';
import { Color } from 'styles/varialbes.style';

export const AppLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${Color.backgroundGrey50};
`;

export const SideWrapper = styled.aside`
  width: 16.25rem;
  height: 100%;
  position: fixed;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
`;

export const MainWrapper = styled.main`
  height: calc(100vh - 4rem);
  padding: 2rem;
  margin-left: 16.25rem;
`;
