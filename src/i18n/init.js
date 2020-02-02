import i18next from 'i18next';

//const english = require('./english');
import { english } from './english';
//const portuguese = require('./portuguese');
import { portuguese } from './portuguese';
//const hebrew = require('./hebrew');
import { hebrew } from './hebrew';
//const spanish = require('./spanish');
import { spanish } from './spanish';


i18next.init({
  lng: localStorage.getItem('lng') || 'en',
  debug: true,
  resources: {
    en: { translation: english },
    'pt-BR': {translation: portuguese},
    he: {translation: hebrew},
    es: {translation: spanish},
  },
});

// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';
