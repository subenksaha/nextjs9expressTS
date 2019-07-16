import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: "en",
	fallbackLng: "en",
	localePath: "static/locales",
	localeSubpaths: "foreign",
	otherLanguages: ["en", "bn"],
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
	appWithTranslation,
	withTranslation,
	i18n,
	Link
} = NextI18NextInstance;
