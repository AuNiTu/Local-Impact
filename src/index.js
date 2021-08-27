import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './state/Provider';
import App from './components/app/App';
import { SessionProvider } from './state/SessionProvider';

render(
  <Router>
    <SessionProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SessionProvider>
  </Router>,
  document.getElementById('root')
);
