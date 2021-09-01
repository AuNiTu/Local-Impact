
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('App component', () => {
  it('renders parent api component to app.js', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('loading...');
    return waitFor(async () => {
      const h1 = await screen.findByRole('h1');
      expect(h1).not.toBeEmptyDOMElement();
    }, 1000);
  });
  
});
