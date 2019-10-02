import * as moment from 'moment';
import * as React from 'react';
import deDE from 'antd/lib/locale-provider/de_DE';
import enUS from 'antd/lib/locale-provider/en_US';
// import { ConfigProvider } from 'antd';
import ConfigProvider from 'antd/lib/config-provider';
import 'moment/locale/de';
import Polyglot from 'node-polyglot';

export interface ILanguageContext {
  translate?: (key: string, options?: object) => string;
  locale?: string;
  setLocale?: (str: string) => void;
}

export interface ILanguageProvider {
  translations: object;
  locale: string;
  children: React.ReactNode;
}

const LanguageContext = React.createContext<ILanguageContext>({});

export function useLanguage(): ILanguageContext {
  return React.useContext(LanguageContext);
}

function LanguageProvider({
  translations,
  locale: l,
  children
}: ILanguageProvider) {
  const [locale, setLocale] = React.useState<string>(l);
  const phrases = React.useMemo(
    () => (translations ? translations[locale] || {} : {}),
    [translations, locale]
  );
  const polyglot = React.useMemo(
    // todo: use polyglot.locale/extends/replace instead of creating new Instances for each change in locale or phrases
    () => new Polyglot({ locale, phrases, allowMissing: true }),
    [locale, phrases]
  );

  React.useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  /* React.useEffect(() => {
    if (polyglot && locale) {
      polyglot.locale(locale);
    }
  }, [locale]);

  React.useEffect(() => {
    if (polyglot && phrases) {
      polyglot.extend(phrases);
    }
  }, [phrases]); */

  return (
    <LanguageContext.Provider
      value={{
        translate: polyglot.t.bind(polyglot),
        locale,
        setLocale
      }}
    >
      <ConfigProvider locale={locale === 'de' ? deDE : enUS}>
        {children}
      </ConfigProvider>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
