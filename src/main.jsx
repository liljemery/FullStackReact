import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCduZe5IRI-Z7ExK8CMgk_79EGs8_DqO8Y",
  authDomain: "my-react-blog-d8cb8.firebaseapp.com",
  projectId: "my-react-blog-d8cb8",
  storageBucket: "my-react-blog-d8cb8.appspot.com",
  messagingSenderId: "34387217235",
  appId: "1:34387217235:web:14193f675000d17e536fa6"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
