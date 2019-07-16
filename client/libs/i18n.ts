import NextI18Next from "next-i18next/dist/commonjs";

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: "en",
	fallbackLng: "en",
	localePath: "static/locales",
	otherLanguages: ["en", "bn"],
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
	appWithTranslation,
	withTranslation,
	i18n,
	Link,
	withNamespaces,
} = NextI18NextInstance;
