import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

// Define the type for valid locales based on your routing configuration
type ValidLocale = (typeof routing.locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  // Type-safe check for valid locales
  if (!locale || !routing.locales.includes(locale as ValidLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});