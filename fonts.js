import {
  Inter,
  Poiret_One,
  Great_Vibes,
  Montserrat_Alternates,
  Sacramento,
  Poppins,
} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "500"],
});
const great_vibes = Great_Vibes({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const poiret_one = Poiret_One({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const montserrat_alternates = Montserrat_Alternates({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const sacramento = Sacramento({
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
});
const plaster = localFont({
  src: "./public/Plaster-Regular.ttf",
  display: "swap",
});
const stretch = localFont({
  src: "./public/StretchPro.otf",
  display: "swap",
});

export {
  inter,
  poppins,
  great_vibes,
  poiret_one,
  montserrat_alternates,
  sacramento,
  plaster,
  stretch,
};
