export const metadata = {
  title: "Rasyonel Mobilya",
  description: "Mobilya teklif sistemi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}