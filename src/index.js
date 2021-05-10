import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// lets make this data available to all components
import { UserContextProvider } from './context/userContext';
import { ListAppsContextProvider } from './context/listAppsContext';


ReactDOM.render(

  <UserContextProvider >
    <ListAppsContextProvider >
      <App />
    </ListAppsContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
