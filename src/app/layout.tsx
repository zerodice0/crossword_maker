import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crossword maker",
  description: "Crossword maker",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
