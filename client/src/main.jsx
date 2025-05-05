import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Auth0Provider
      domain={'dev-z6tatywvih7xm0cl.us.auth0.com'}
      clientId={'34HJdkFY5ak0kOpP9M4rIN0UhWhHQ4TM'}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://phoenix-store-api'
      }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
