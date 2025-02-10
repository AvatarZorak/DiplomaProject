import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from '@react-keycloak/web'

// const keycloakConfig = {
//     realm: 'master',
//     url: 'https://ahristov.itgix.eu/',
//     clientId: 'e-markbook-frontend'
// }
//
// const keycloakInitOptions = {
//     onLoad: 'check-sso',
//     checkLoginIframe: false,
//     flow: 'standard',
//     pkceMethod: 'S256',
// }
//
// const keycloak = new Keycloak(keycloakConfig)

createRoot(document.getElementById('root')!).render(
    // <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakInitOptions}>
        <StrictMode>
            <App />
        </StrictMode>
    // </ReactKeycloakProvider>
)

