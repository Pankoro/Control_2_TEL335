import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./routes.js";
import {RouterProvider, } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from './screens/form'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
