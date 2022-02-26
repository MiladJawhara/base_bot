import path from 'path';
import i18n from 'i18n';


i18n.configure({
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    directory: path.join(__dirname, '/../locales')
});

export default i18n;