import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/messages";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const arabicFont = {
  fontFamily: "Amiri, 'Segoe UI', sans-serif",
};

export const metadata: Metadata = {
  title: "AlgoFork",
  description: "aiCardButtonTitled by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "ar" | "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages(locale);

  const fontStyle =
    locale === "ar"
      ? arabicFont
      : { fontFamily: `"Segoe UI", ${inter.style.fontFamily}` };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body style={fontStyle}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
