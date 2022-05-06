import 'twin.macro';

import { ReactNode } from 'react';

import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


const Layout = ({
  children,
  menuOpened,
  onToggleMenu,
}: {
  children: ReactNode;
  menuOpened: boolean;
  onToggleMenu: () => void;
}) => {
  const { pathname } = useLocation();

  return (
    <div tw="relative">
      {pathname != '/' &&
        <Header menuOpened={menuOpened} onToggleMenu={onToggleMenu} />
      }
      {children}
      {/* <Footer menuOpened={menuOpened} onToggleMenu={onToggleMenu} /> */}
    </div>
  );
};

export default Layout;
