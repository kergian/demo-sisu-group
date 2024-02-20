import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// Reset styles added by browser
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/assets.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/reduce-motion.css'

import { App } from '@/app/app'
import { store } from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
