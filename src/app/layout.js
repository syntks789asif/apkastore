"use client";

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

import "./globals.css";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "E-Com",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
