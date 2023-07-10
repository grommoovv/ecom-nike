import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider'
import { App } from './app/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
