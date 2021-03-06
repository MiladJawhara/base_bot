import {join} from 'path';
import i18n from 'i18n';


i18n.configure({
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    directory: join(__dirname,'..','locales')
});

const tr = i18n;
export default tr;