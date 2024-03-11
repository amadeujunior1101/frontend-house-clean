import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { LoadingProvider } from './loading.context.tsx'
import RouteComponent from './routes.tsx'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <LoadingProvider>
      <Provider store={store}>
        <RouteComponent />
      </Provider>
     </LoadingProvider>
  </React.StrictMode>,
)
