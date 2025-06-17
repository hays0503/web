"use server";
import { routing } from "@/i18n/routing";
import { montserrat } from "@/shared/style/theme";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ locale: string }[]> {
	const locales = routing.locales; // ["en", "kk", "ru"]

	return locales.map((locale) => ({ locale }));
}




export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
