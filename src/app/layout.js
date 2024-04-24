import localFont from 'next/font/local'
const helvetica = localFont({
  src: [
    {
      path: '../fonts/Helvetica.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: "--font-helvetica",
})
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


export const metadata = {
  title: "Serma",
  description: "Sports and Entertainment Risk Management Alliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
