import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata = {
  title: "QurbaniHat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${montserrat.variable} ${roboto.variable}`}
    >
      <body className="min-h-screen font-body">
        <Navbar></Navbar>
         <main>
          {children}
         </main>
          
        
        
      </body>
    </html>
  );
}