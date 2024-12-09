import MainLayout from "../(main)/layout";

export default function LocaleLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}