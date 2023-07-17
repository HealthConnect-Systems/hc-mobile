import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import burmese from './burmese.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            burmese: {
                translation: burmese
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
