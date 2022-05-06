import './App.scss';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { routes } from "./routes";
import WithScrollTop from "./wrappers/ScrollTop";
import store from './store';

import Layout from './components/Layout';
import MobileMenu from './components/MobileMenu';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <Provider store={store}>
      <Router>
        <WithScrollTop>
          <Route
            path={[...routes.dashboard.map(({ path }) => path)]}
            component={(props: any) => (
              <Layout {...props}>
                <Switch {...props}>
                  {routes.dashboard.map((route, idx) => {
                    return (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        component={(props: any) => (
                          <route.component {...props} key={idx} />
                        )}
                      />
                    )
                  })}
                </Switch>
              </Layout>
            )}
          />
          {isMenuOpened && <MobileMenu onClose={() => setIsMenuOpened(false)} />}
        </WithScrollTop>
      </Router>
    </Provider>
  );
};

export default App;
