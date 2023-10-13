import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Analytics/>
      <App />
    </Provider>
  </React.StrictMode>,
)
