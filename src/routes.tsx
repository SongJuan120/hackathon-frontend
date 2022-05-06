import { Redirect } from 'react-router-dom';
import Home from './pages/Home';
import LiveRaffles from './pages/LiveRaffles';
import DetailRaffles from './pages/DetailRaffles';
import SellDashboard from './pages/SellDashboard';
import SellDashboard_1 from './pages/SellDashboard_1';
import SellDetailNft from './pages/SellDetailNft';
import Profile from './pages/Profile';
import WalletConnet from './pages/WalletConnet';

export const routes = {
  dashboard: [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/wallet",
      component: WalletConnet,
      exact: true
    },
    {
      path: "/buy/raffles",
      component: LiveRaffles,
      exact: true
    },
    {
      path: "/buy/detail",
      component: DetailRaffles,
      exact: true
    },
    {
      path: "/profile/dashboard",
      component: SellDashboard,
      exact: true
    },
    {
      path: "/sell/detail",
      component: SellDetailNft,
      exact: true
    },
    {
      path: "/profile/edit",
      component: Profile,
      exact: true
    },
    {
      path: "**",
      exact: true,
      component: () => <Redirect to="/" />
    },
  ],
};
