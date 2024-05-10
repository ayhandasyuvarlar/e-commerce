import { Poppins } from "next/font/google";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Providers from "@/redux/provider";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Login",
  description: "E-commerce login page",
};

export default function RootLayout({ children }) {
  return (
   <>
<html lang="tr">
      <PrimeReactProvider>
        <body
          className={poppins.className}
          style={{ maxWidth: 1500, margin: "auto", }}
        >
        <Providers>
          {children}
        </Providers>
        </body>
      </PrimeReactProvider>
    </html>
   </>
  );
}
