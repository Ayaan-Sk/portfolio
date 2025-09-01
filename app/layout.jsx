import "@/styles/global.css";
import { poppins } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import PreloaderOverlay from "@/components/PreloaderOverlay";

export const metadata = {
  title: "AyaanSheikh",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={poppins.className}>
        <PreloaderOverlay />
        {children}
      </body>
    </html>
  );
}
