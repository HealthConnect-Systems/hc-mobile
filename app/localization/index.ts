import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import _ from 'lodash';

import en from './en';
import my from './my';

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
    en,
    my
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;
console.log(i18n.locale);

const dics = _.mapValues(_.clone(en), (_, key) => i18n.t(key));

export default dics;