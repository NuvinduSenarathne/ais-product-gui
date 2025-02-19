import type { Metadata } from "next";
import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Hotel Management System | Grand Amanee",
  description: "Discover the Grand Amanee Hotel Management System, developed by Arcadian Infrastructure Solutions, designed to enhance guest experiences and streamline operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
