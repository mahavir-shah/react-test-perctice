import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './redux/Component/App';
import Todo from './redux/Component/Todo';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignIn from '../src/redux/Component/SignIn';
import HomePage from '../src/redux/Component/HomePage';
import Demo from './redux/Component/cropper/index';
import GoogleCallback from '../src/googlecallback/GoogleCallback';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import GoogleIntegration from './redux/Component/googlepay-integration';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './redux/Component/layout/HeaderComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div class="row" style={{ margin: '0px' }}>
        <div class="container">
          <div class="col-md-12">
            <HeaderComponent />
          </div>
          <br />
          <br />
          <div class="col-md-12">
            <Routes>
              <Route path="/" exact element={<HomePage />}></Route>
              <Route path="/signIn" exact element={<SignIn />}></Route>
              <Route
                path="/auth/google"
                exact
                element={<GoogleCallback />}
              ></Route>
              <Route path="/redux-state" exact element={<App />}></Route>
              <Route path="/redux-state" exact element={<Todo />}></Route>
              <Route path="/cropper" exact element={<Demo />}></Route>
              <Route
                path="/google-pay"
                exact
                element={<GoogleIntegration />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
