import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {

  const t = useTranslations('NotFound')

  return (
    // if user testing another not found page
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-extrabold text-7xl text-redPrimary">404</h2>
      <h2 className="font-extrabold text-4xl text-darkThird">{t('title')}</h2>
      <p>{t('description')}</p>
      <Link
        href="/"
        className="py-2 px-3 my-8 bg-redPrimary hover:bg-red-900 text-white font-semibold"
      >
        {t('returnHome')}
      </Link>
    </div>
  );
}
