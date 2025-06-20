import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// Define isLocalhost
const isLocalhost = window.location.hostname === 'localhost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-pl28u4d5f31ah1z7.us.auth0.com"
      clientId="XYyX7GXUeMZqPOsT5mSBiYzClCEMR5eG"
      authorizationParams={{
        redirect_uri: isLocalhost ? 'http://localhost:3000' : 'https://jobtrex-job-search-and-recruitment-platform-frontend.vercel.app',
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
