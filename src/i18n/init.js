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

// ========================== To be used with Powerfleet Logo =====================
// //const english = require('./english');
// import { english_pf } from './english_powerfleet';
// //const portuguese = require('./portuguese');
// import { portuguese_pf } from './portuguese_powerfleet';
// //const hebrew = require('./hebrew');
// import { hebrew_pf } from './hebrew_powerfleet';
// //const spanish = require('./spanish');
// import { spanish_pf } from './spanish_powerfleet';
//
// i18next.init({
//   lng: localStorage.getItem('lng') || 'en',
//   debug: true,
//   resources: {
//     en: { translation: english_pf },
//     'pt-BR': {translation: portuguese_pf},
//     he: {translation: hebrew_pf},
//     es: {translation: spanish_pf},
//   },
// });



// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';
