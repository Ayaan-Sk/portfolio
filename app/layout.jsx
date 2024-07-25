import "@/styles/global.css";
import { poppins } from "@/fonts";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "ca~io",
  description: "ca.io ~ portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
