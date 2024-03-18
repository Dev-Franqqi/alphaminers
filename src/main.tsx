import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslation from "./translations/de.json"
import enTranslation from "./translations/en.json"
import frTranslation from "./translations/fr.json"
import esTranslation from "./translations/es.json"
import trTranslation from "./translations/tr.json"
import DarkContextProvider from './components/Darkprovider.tsx';


i18n
.use(initReactI18next)
.init({
  fallbackLng :'en', // if you're using a language detector, do not define the lng option
  
  resources: {
    en: {
      translation: enTranslation
    },
    de:{
      translation:deTranslation
    },
    fr:{
      translation:frTranslation
    },
    es:{
      translation:esTranslation
    },
    tr:{
      translation:trTranslation
    }
  }
})
console.log(i18n.language)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkContextProvider>
    <App />


    </DarkContextProvider>
  </React.StrictMode>
);
