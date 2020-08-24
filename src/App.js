import React from 'react';
import {ThemeProvider} from "styled-components";
import {Provider} from 'react-redux';

import {store, history} from './store/store';
import PublicRoutes from './routers/Router';

function App() {

  const theme = {}
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PublicRoutes history={history} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
