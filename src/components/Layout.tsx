import 'twin.macro';

import { ReactNode, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/auth.selectors';
import { rafflesService } from '../services';
import { GNotification } from '../types';
import { imageConvert } from '../utils/helpers';


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
  const user = useSelector(selectUser);

  const notification = async() => {
    if (user){
      const rafflesSoldRes = await rafflesService.getNotification(user.account); 
      if (rafflesSoldRes){
        rafflesSoldRes.map((item: GNotification)=>{
          new Notification("NFT SOLD OUT", {
            body: `Seller: ${item.from} 
Buyer: ${item.to} `,
            icon: imageConvert(item.image)
          });
        })
      }
    }
  }

  useEffect(() => {
    notification();
    const timer = setInterval(() => notification(), 30000);
    return () => {
      clearInterval(timer);
    };
  }, [notification]);

  useEffect(() => {
    Notification.requestPermission(function(result) {
      if (result === 'denied') {
        return;
      }
    })
  }, []);

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
