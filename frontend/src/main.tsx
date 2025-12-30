import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import "./i18n";
import {SnackbarProvider} from "./components/shared/snackbar/snackbar-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SnackbarProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SnackbarProvider>
    </StrictMode>,
)
