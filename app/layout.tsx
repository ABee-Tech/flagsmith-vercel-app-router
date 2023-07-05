import "@/styles/globals.css";

import { Metadata } from "next";
import { ReactElement } from "react";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children as ReactElement}</Provider>
      </body>
    </html>
  );
}