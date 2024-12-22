import Link from "next/link";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const languages = [
    { code: "ar", label: "العربية" },
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
  ];

  return (
    <ul className="flex space-x-4">
      {languages.map((lang) => (
        <li key={lang.code}>
          <Link
            href={`/${lang.code}`}
            className={currentLocale === lang.code ? "font-bold" : ""}
          >
            {lang.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
