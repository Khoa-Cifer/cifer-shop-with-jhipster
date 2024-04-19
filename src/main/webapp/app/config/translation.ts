import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  al: { name: 'Shqip' },
  'ar-ly': { name: 'العربية', rtl: true },
  'zh-cn': { name: '中文（简体）' },
  'zh-tw': { name: '繁體中文' },
  hr: { name: 'Hrvatski' },
  cs: { name: 'Český' },
  da: { name: 'Dansk' },
  fr: { name: 'Français' },
  id: { name: 'Bahasa Indonesia' },
  my: { name: 'မြန်မာ' },
  sr: { name: 'Srpski' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
