import React from 'react'
import ReactDOM from 'react-dom'
import {ToastContainer} from 'react-toastify'

import './assets/styles/styles.scss'

import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {RoutePlanerApp} from './pages/RoutePlanerApp'
import {LoginPage} from './pages/auth/login'
import {
  LOGIN_URL,
  PLANER_URL,
  REGISTER_URL,
  TRAVELS_URL,
} from './common/routes-urls'
import {UserContextProvider} from './common/hooks/use-user'
import {RegisterPage} from './pages/auth/register'
import {PlanerPage} from './pages/planer'
import {TravelsPage} from './pages/travels'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoutePlanerApp />}>
              <Route path={LOGIN_URL} element={<LoginPage />} />
              <Route path={REGISTER_URL} element={<RegisterPage />} />
              <Route path={PLANER_URL} element={<PlanerPage />} />
              <Route path={TRAVELS_URL} element={<TravelsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
