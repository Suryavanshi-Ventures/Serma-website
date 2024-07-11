import localFont from "next/font/local";
const helvetica = localFont({
  src: [
    {
      path: "../fonts/Helvetica.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import ProviderWrapper from "./utils/ProviderWrapper/provider";

export const metadata = {
  title: "Serma",
  description: "Sports and Entertainment Risk Management Alliance",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className} bg-white container 3xl:mx-auto max-w-screen-2xl`}
      >
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <ProviderWrapper>
        
            <main className="">
              <Header />
              {/* <div className='px-[25px] md:px-[85px]'> */}

              {children}
              {/* </div> */}
              <Footer />
            </main>
       
        </ProviderWrapper>
      </body>
    </html>
  );
}
