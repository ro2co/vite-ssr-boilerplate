import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router.tsx'

ReactDOM.hydrateRoot(
  // We call the hydrateRoot method from ReactDOM to attach event handlers to the static HTML content, it will also rehydrate the server-rendered HTML content to make it interactive, as end users interact with the app.
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <Router location={window.location.pathname} />
    </BrowserRouter>
  </React.StrictMode>
)