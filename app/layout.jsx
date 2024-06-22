import "@/styles/globals.css";
import { inter, poppins } from "@/fonts";

export const metadata = {
  title: "ca~io",
  description: "ca.io ~ portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
