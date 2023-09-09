import * as S from './AppLayout.style';

export type IAppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: IAppLayoutProps) {
  return <S.AppLayoutWrapper>{children}</S.AppLayoutWrapper>;
}

export type ISideProps = {
  children: React.ReactNode;
};

function Side({ children }: ISideProps) {
  return <S.SideWrapper>{children}</S.SideWrapper>;
}

export type IMainProps = {
  children: React.ReactNode;
};

function Main({ children }: IMainProps) {
  return <S.MainWrapper>{children}</S.MainWrapper>;
}

AppLayout.Side = Side;
AppLayout.Main = Main;
