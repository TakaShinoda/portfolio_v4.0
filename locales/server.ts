import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  ja: () => import('./ja'),
  en: () => import('./en')
});
