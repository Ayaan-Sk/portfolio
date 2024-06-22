"use client";

import { useEffect } from "react";

function PatternBackground() {
  const fillPath = (paths: NodeListOf<SVGPathElement>) => {
    for (let count = 0; count < 10; count++) {
      let pathIndex = Math.floor(Math.random() * paths.length);
      paths[pathIndex].classList.add("animate-animateSVG");
      setTimeout(() => {
        paths[pathIndex].classList.remove("animate-animateSVG");
      }, 6000);
    }
  };

  // useEffect(() => {
  //   let paths: NodeListOf<SVGPathElement> =
  //     document.querySelectorAll("svg path");

  //   fillPath(paths);

  //   let fillInterval = setInterval(() => {
  //     fillPath(paths);
  //   }, 6000);

  //   return () => {
  //     clearInterval(fillInterval);
  //   };
  // });

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center border-2 border-lime-500"
      // style={{
      //   backgroundImage: "url('/vector-bg.svg')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "50% 50%",
      // }}
    >
      <svg
        className="absolute border-2 border-red-500"
        // width="4014"
        // height="5539"
        height={"100%"}
        width={"100%"}
        viewBox="0 0 4014 5539"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // strokeDasharray={1100}
        // strokeDashoffset={1100}
      >
        <path
          d="M3747 1634V1782L3834 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4008 1497H3732L3864.4 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3875 1563H3946"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3761 1925L3761 1980"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3697 1862L3697 2138L3825 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3870 2095.5L3870 1970L3960 2097.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4006.5 1543.5V1631H3915.5V1759L3840.5 1837H4006.5V1708"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3886.5 1901.5H4006V2098"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3631.5 1629V1563.5H3407.5L3483 1640.5V1706L3582 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3096.5 1853.5H3160.5L3206 1807V1745.5H3269V1630.5H3380.5L3426 1676.5V1741L3494.5 1811L3375 1920.5L3434 1994.5L3510.5 1916.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3082 1634V1782L3168 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3341 1497H3068L3198.96 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3666.5 1496.5H3397L3525 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3208 1563H3279"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3096 1924L3096 1979"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3030 1862L3030 2138L3158 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3697 1528L3697 1804L3569 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204 2094L3204 1968.5L3294 2096"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3597 1924L3597 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3340 1687L3340 1833L3380 1792"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3245 1883L3360 2046"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2966 1629V1563.5H2742L2817.5 1640.5V1706L2916.5 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2395 1634V1782L2482 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2656 1497H2380L2512.4 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3002 1498H2733L2860.76 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2523 1563H2594"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2409 1925L2409 1980"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2345 1862L2345 2138L2473 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3030 1528L3030 1804L2902 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518 2095.5L2518 1970L2608 2097.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2931 1924L2931 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2654.5 1543.5V1631H2563.5V1759L2488.5 1837H2654.5V1708"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2716 1615.5V1684.5H2773L2715 1742.5V1823.5H2832L2888.5 1880.5H2802L2715 1938V1998L2802 1952V1998L2712.5 2090"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2534.5 1901.5H2654V2098"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2279.5 1629V1563.5H2055.5L2131 1640.5V1706L2230 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1744.5 1853.5H1808.5L1854 1807V1745.5H1917V1630.5H2028.5L2074 1676.5V1741L2142.5 1811L2023 1920.5L2082 1994.5L2158.5 1916.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730 1634V1782L1816 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1989 1497H1716L1846.96 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2314.5 1496.5H2045L2173 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1856 1563H1927"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1744 1924L1744 1979"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 1862L1678 2138L1806 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2345 1528L2345 1804L2217 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1852 2094L1852 1968.5L1942 2096"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2245 1924L2245 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1988 1687L1988 1833L2028 1792"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1893 1883L2008 2046"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1614 1629V1563.5H1390L1465.5 1640.5V1706L1564.5 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1043 1634V1782L1130 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1304 1497H1028L1160.4 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1650 1498H1381L1508.76 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1171 1563H1242"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1057 1925L1057 1980"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 1862L993 2138L1121 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 1528L1678 1804L1550 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1166 2095.5L1166 1970L1256 2097.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1579 1924L1579 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1302.5 1543.5V1631H1211.5V1759L1136.5 1837H1302.5V1708"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364 1615.5V1684.5H1421L1363 1742.5V1823.5H1480L1536.5 1880.5H1450L1363 1938V1998L1450 1952V1998L1360.5 2090"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1182.5 1901.5H1302V2098"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M927.5 1629V1563.5H703.5L779 1640.5V1706L878 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M392.5 1853.5H456.5L502 1807V1745.5H565V1630.5H676.5L722 1676.5V1741L790.5 1811L671 1920.5L730 1994.5L806.5 1916.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378 1634V1782L464 1693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M637 1497H364L494.959 1631"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M962.5 1496.5H693L821 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M504 1563H575"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M392 1924L392 1979"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M326 1862L326 2138L454 2006.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 1528L993 1804L865 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M500 2094L500 1968.5L590 2096"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501 2783.5L501 2658L591 2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1167 2783.5L1167 2658L1257 2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518 2783.5L2518 2658L2608 2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3869 2782.5L3869 2657L3959 2784.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1852 2783.5L1852 2658L1942 2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204 2783.5L3204 2658L3294 2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M893 1924L893 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M893 2611L893 2781"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1579 2614L1579 2784"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2932 2614L2932 2784"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2245 2614L2245 2784"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3597 2614L3597 2784"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M636 1687L636 1833L676 1792"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M541 1883L656 2046"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M262 1629V1563.5H38L113.5 1640.5V1706L212.5 1803.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M298 1498H29L156.763 1365"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M326 1528L326 1804L198 1672.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M227 1924L227 2094"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M227 2616L227 2786"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12 1615.5V1684.5H69L11 1742.5V1823.5H128L184.5 1880.5H98L11 1938V1998L98 1952V1998L8.5 2090"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M929 2298.5V2233H705L780.5 2310V2375.5L879.5 2473"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1043 2303V2451L1130 2362.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M392 2611L392 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1058 2611L1058 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1743 2611L1743 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2409 2611L2409 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3095 2611L3095 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3761 2611L3761 2666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327 2549L327 2825L455 2693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 2549L993 2825L1121 2693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 2549L1678 2825L1806 2693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2344 2549L2344 2825L2472 2693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031 2550L3031 2826L3159 2694.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3696 2549L3696 2825L3824 2693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2395 2303V2451L2482 2362.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3747 2304V2452L3834 2363.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2279 2298.5V2233H2055L2130.5 2310V2375.5L2229.5 2473"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3631 2298.5V2233H3407L3482.5 2310V2375.5L3581.5 2473"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1614 2298.5V2233H1390L1465.5 2310V2375.5L1564.5 2473"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M262 2296.5V2231H38L113.5 2308V2373.5L212.5 2471"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2966 2297.5V2232H2742L2817.5 2309V2374.5L2916.5 2472"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 2197L993 2473L865 2341.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2345 2197L2345 2473L2217 2341.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3698 2198L3698 2474L3570 2342.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 2197L1678 2473L1550 2341.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327 2197L327 2473L199 2341.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031 2196L3031 2472L2903 2340.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M962.5 2165.5H693L821 2034"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2314.5 2166.5H2045L2173 2035"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3666.5 2166.5H3397L3525 2035"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3000.5 2165.5H2731L2859 2034"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1650.5 2166.5H1381L1509 2035"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378 2303V2451L464 2362.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730 2303V2451L1816 2362.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3082 2303V2451L3168 2362.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M636 2166H363L493.959 2300"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1989 2164H1716L1846.96 2298"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3340 2165H3067L3197.96 2299"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1302 2166H1029L1159.96 2300"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2654 2164H2381L2511.96 2298"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4006 2167H3733L3863.96 2301"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M504 2233H575"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1857 2231H1928"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3207 2232H3278"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2521 2231H2592"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3874 2231H3945"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1171 2233H1242"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M298 2167H29L156.763 2034"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364 2303V2472.5H1479"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12 2303V2472.5H127"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2716 2302V2471.5H2831"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M439.5 2472H519V2352.5L575.5 2295H678.5V2385.5L786.5 2478L612.5 2473.5V2355.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1792 2473H1871.5V2353.5L1928 2296H2031V2386.5L2139 2479L1965 2474.5V2356.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3143 2472H3222.5V2352.5L3279 2295H3382V2385.5L3490 2478L3316 2473.5V2355.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1090 2479H1180.5V2416.68L1225.5 2370V2282H1302V2479H1245"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2441 2478H2531.5V2415.68L2576.5 2369V2281H2653V2478H2596"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3794 2480H3884.5V2417.68L3929.5 2371V2283H4006V2480H3949"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M381 2548.5H502.5L548 2596L604 2536.5H654V2608.5L612 2655L677 2721.5L746 2651.5V2536.5H911.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1733 2548H1854.5L1900 2595.5L1956 2536H2006V2608L1964 2654.5L2029 2721L2098 2651V2536H2263.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3084 2548H3204.5L3251 2596.5L3307 2537H3357V2609L3315 2655.5L3380 2722L3449 2652V2537H3614.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M243.5 2547.5H120.5L78 2677L12 2608.5V2785"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1594.5 2548H1471.5L1429 2677.5L1363 2609V2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2947.5 2548H2824.5L2782 2677.5L2716 2609V2785.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1058 2548H1204.5V2610.5H1257V2548H1303V2785"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2410 2548H2556.5V2610.5H2609V2548H2655V2785"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3761 2547H3907.5V2609.5H3960V2547H4006V2784"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1367 2544H1421.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2720 2544H2774.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M15 2544H69.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3748.5 275V423L3835.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4009.5 138H3733.5L3865.9 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3876.5 204H3947.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3762.5 566L3762.5 621"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3698.5 503L3698.5 779L3826.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3871.5 736.5L3871.5 611L3961.5 738.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4008 184.5V272H3917V400L3842 478H4008V349"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3888 542.5H4007.5V739"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3633 270V204.5H3409L3484.5 281.5V347L3583.5 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3098 494.5H3162L3207.5 448V386.5H3270.5V271.5H3382L3427.5 317.5V382L3496 452L3376.5 561.5L3435.5 635.5L3512 557.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3083.5 275V423L3169.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3342.5 138H3069.5L3200.46 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3668 137.5H3398.5L3526.5 6"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3209.5 204H3280.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3097.5 565L3097.5 620"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031.5 503L3031.5 779L3159.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3698.5 169L3698.5 445L3570.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3205.5 735L3205.5 609.5L3295.5 737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3598.5 565L3598.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3341.5 328L3341.5 474L3381.5 433"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3246.5 524L3361.5 687"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2967.5 270V204.5H2743.5L2819 281.5V347L2918 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2396.5 275V423L2483.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2657.5 138H2381.5L2513.9 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3003.5 139H2734.5L2862.26 5.99999"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2524.5 204H2595.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2410.5 566L2410.5 621"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2346.5 503L2346.5 779L2474.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031.5 169L3031.5 445L2903.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2519.5 736.5L2519.5 611L2609.5 738.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2932.5 565L2932.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2656 184.5V272H2565V400L2490 478H2656V349"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2717.5 256.5V325.5H2774.5L2716.5 383.5V464.5H2833.5L2890 521.5H2803.5L2716.5 579V639L2803.5 593V639L2714 731"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2536 542.5H2655.5V739"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2281 270V204.5H2057L2132.5 281.5V347L2231.5 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1746 494.5H1810L1855.5 448V386.5H1918.5V271.5H2030L2075.5 317.5V382L2144 452L2024.5 561.5L2083.5 635.5L2160 557.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1731.5 275V423L1817.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1990.5 138H1717.5L1848.46 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2316 137.5H2046.5L2174.5 6"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1857.5 204H1928.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1745.5 565L1745.5 620"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1679.5 503L1679.5 779L1807.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2346.5 169L2346.5 445L2218.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1853.5 735L1853.5 609.5L1943.5 737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2246.5 565L2246.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1989.5 328L1989.5 474L2029.5 433"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1894.5 524L2009.5 687"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1615.5 270V204.5H1391.5L1467 281.5V347L1566 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1044.5 275V423L1131.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1305.5 138H1029.5L1161.9 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1651.5 139H1382.5L1510.26 5.99999"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1172.5 204H1243.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1058.5 566L1058.5 621"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M994.5 503L994.5 779L1122.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1679.5 169L1679.5 445L1551.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1167.5 736.5L1167.5 611L1257.5 738.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1580.5 565L1580.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1304 184.5V272H1213V400L1138 478H1304V349"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1365.5 256.5V325.5H1422.5L1364.5 383.5V464.5H1481.5L1538 521.5H1451.5L1364.5 579V639L1451.5 593V639L1362 731"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1184 542.5H1303.5V739"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M929 270V204.5H705L780.5 281.5V347L879.5 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M394 494.5H458L503.5 448V386.5H566.5V271.5H678L723.5 317.5V382L792 452L672.5 561.5L731.5 635.5L808 557.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M379.5 275V423L465.5 334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M638.5 138H365.5L496.459 272"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M964 137.5H694.5L822.5 6"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M505.5 204H576.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M393.5 565L393.5 620"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327.5 503L327.5 779L455.5 647.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M994.5 169L994.5 445L866.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 735L501.5 609.5L591.5 737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M502.5 1424.5L502.5 1299L592.5 1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 1424.5L1168.5 1299L1258.5 1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2519.5 1424.5L2519.5 1299L2609.5 1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3870.5 1423.5L3870.5 1298L3960.5 1425.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1853.5 1424.5L1853.5 1299L1943.5 1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3205.5 1424.5L3205.5 1299L3295.5 1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M894.5 565L894.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M894.5 1252L894.5 1422"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1580.5 1255L1580.5 1425"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2933.5 1255L2933.5 1425"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2246.5 1255L2246.5 1425"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3598.5 1255L3598.5 1425"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M637.5 328L637.5 474L677.5 433"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M542.5 524L657.5 687"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M263.5 270V204.5H39.5L115 281.5V347L214 444.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M299.5 139H30.5L158.263 5.99999"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327.5 169L327.5 445L199.5 313.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M228.5 565L228.5 735"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M228.5 1257L228.5 1427"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M13.5 256.5V325.5H70.5L12.5 383.5V464.5H129.5L186 521.5H99.5L12.5 579V639L99.5 593V639L10 731"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M930.5 939.5V874H706.5L782 951V1016.5L881 1114"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1044.5 944V1092L1131.5 1003.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M393.5 1252L393.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1059.5 1252L1059.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1744.5 1252L1744.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2410.5 1252L2410.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3096.5 1252L3096.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3762.5 1252L3762.5 1307"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M328.5 1190L328.5 1466L456.5 1334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M994.5 1190L994.5 1466L1122.5 1334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1679.5 1190L1679.5 1466L1807.5 1334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2345.5 1190L2345.5 1466L2473.5 1334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3032.5 1191L3032.5 1467L3160.5 1335.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3697.5 1190L3697.5 1466L3825.5 1334.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2396.5 944V1092L2483.5 1003.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3748.5 945V1093L3835.5 1004.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2280.5 939.5V874H2056.5L2132 951V1016.5L2231 1114"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3632.5 939.5V874H3408.5L3484 951V1016.5L3583 1114"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1615.5 939.5V874H1391.5L1467 951V1016.5L1566 1114"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M263.5 937.5V872H39.5L115 949V1014.5L214 1112"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2967.5 938.5V873H2743.5L2819 950V1015.5L2918 1113"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M994.5 838L994.5 1114L866.5 982.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2346.5 838L2346.5 1114L2218.5 982.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3699.5 839L3699.5 1115L3571.5 983.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1679.5 838L1679.5 1114L1551.5 982.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M328.5 838L328.5 1114L200.5 982.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3032.5 837L3032.5 1113L2904.5 981.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M964 806.5H694.5L822.5 675"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2316 807.5H2046.5L2174.5 676"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3668 807.5H3398.5L3526.5 676"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3002 806.5H2732.5L2860.5 675"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1652 807.5H1382.5L1510.5 676"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M379.5 944V1092L465.5 1003.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1731.5 944V1092L1817.5 1003.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3083.5 944V1092L3169.5 1003.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M637.5 807H364.5L495.459 941"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1990.5 805H1717.5L1848.46 939"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3341.5 806H3068.5L3199.46 940"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1303.5 807H1030.5L1161.46 941"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2655.5 805H2382.5L2513.46 939"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4007.5 808H3734.5L3865.46 942"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M505.5 874H576.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1858.5 872H1929.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3208.5 873H3279.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2522.5 872H2593.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3875.5 872H3946.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1172.5 874H1243.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M299.5 808H30.5L158.263 675"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1365.5 944V1113.5H1480.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M13.5 944V1113.5H128.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2717.5 943V1112.5H2832.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M441 1113H520.5V993.5L577 936H680V1026.5L788 1119L614 1114.5V996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1793.5 1114H1873V994.5L1929.5 937H2032.5V1027.5L2140.5 1120L1966.5 1115.5V997.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3144.5 1113H3224V993.5L3280.5 936H3383.5V1026.5L3491.5 1119L3317.5 1114.5V996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1091.5 1120H1182V1057.68L1227 1011V923H1303.5V1120H1246.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2442.5 1119H2533V1056.68L2578 1010V922H2654.5V1119H2597.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3795.5 1121H3886V1058.68L3931 1012V924H4007.5V1121H3950.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M382.5 1189.5H504L549.5 1237L605.5 1177.5H655.5V1249.5L613.5 1296L678.5 1362.5L747.5 1292.5V1177.5H913"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1734.5 1189H1856L1901.5 1236.5L1957.5 1177H2007.5V1249L1965.5 1295.5L2030.5 1362L2099.5 1292V1177H2265"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3085.5 1189H3206L3252.5 1237.5L3308.5 1178H3358.5V1250L3316.5 1296.5L3381.5 1363L3450.5 1293V1178H3616"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M245 1188.5H122L79.5 1318L13.5 1249.5V1426"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1596 1189H1473L1430.5 1318.5L1364.5 1250V1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2949 1189H2826L2783.5 1318.5L2717.5 1250V1426.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1059.5 1189H1206V1251.5H1258.5V1189H1304.5V1426"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2411.5 1189H2558V1251.5H2610.5V1189H2656.5V1426"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3762.5 1188H3909V1250.5H3961.5V1188H4007.5V1425"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1368.5 1185H1423"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2721.5 1185H2776"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M16.5 1185H71"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 2987V3135L3831.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4005.5 2850H3729.5L3861.9 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3872.5 2916H3943.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 3278L3758.5 3333"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 3215L3694.5 3491L3822.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3867.5 3448.5L3867.5 3323L3957.5 3450.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4004 2896.5V2984H3913V3112L3838 3190H4004V3061"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3884 3254.5H4003.5V3451"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3629 2982V2916.5H3405L3480.5 2993.5V3059L3579.5 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3094 3206.5H3158L3203.5 3160V3098.5H3266.5V2983.5H3378L3423.5 3029.5V3094L3492 3164L3372.5 3273.5L3431.5 3347.5L3508 3269.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 2987V3135L3165.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3338.5 2850H3065.5L3196.46 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 2849.5H3394.5L3522.5 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3205.5 2916H3276.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3093.5 3277L3093.5 3332"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 3215L3027.5 3491L3155.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 2881L3694.5 3157L3566.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 3447L3201.5 3321.5L3291.5 3449"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 3277L3594.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 3040L3337.5 3186L3377.5 3145"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3242.5 3236L3357.5 3399"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 2982V2916.5H2739.5L2815 2993.5V3059L2914 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 2987V3135L2479.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2653.5 2850H2377.5L2509.9 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2999.5 2851H2730.5L2858.26 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2520.5 2916H2591.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 3278L2406.5 3333"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 3215L2342.5 3491L2470.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 2881L3027.5 3157L2899.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 3448.5L2515.5 3323L2605.5 3450.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2928.5 3277L2928.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2652 2896.5V2984H2561V3112L2486 3190H2652V3061"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 2968.5V3037.5H2770.5L2712.5 3095.5V3176.5H2829.5L2886 3233.5H2799.5L2712.5 3291V3351L2799.5 3305V3351L2710 3443"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2532 3254.5H2651.5V3451"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2277 2982V2916.5H2053L2128.5 2993.5V3059L2227.5 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1742 3206.5H1806L1851.5 3160V3098.5H1914.5V2983.5H2026L2071.5 3029.5V3094L2140 3164L2020.5 3273.5L2079.5 3347.5L2156 3269.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 2987V3135L1813.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 2850H1713.5L1844.46 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 2849.5H2042.5L2170.5 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1853.5 2916H1924.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1741.5 3277L1741.5 3332"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 3215L1675.5 3491L1803.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 2881L2342.5 3157L2214.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 3447L1849.5 3321.5L1939.5 3449"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 3277L2242.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1985.5 3040L1985.5 3186L2025.5 3145"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1890.5 3236L2005.5 3399"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 2982V2916.5H1387.5L1463 2993.5V3059L1562 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 2987V3135L1127.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1301.5 2850H1025.5L1157.9 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1647.5 2851H1378.5L1506.26 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 2916H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1054.5 3278L1054.5 3333"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 3215L990.5 3491L1118.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 2881L1675.5 3157L1547.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1163.5 3448.5L1163.5 3323L1253.5 3450.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 3277L1576.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1300 2896.5V2984H1209V3112L1134 3190H1300V3061"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 2968.5V3037.5H1418.5L1360.5 3095.5V3176.5H1477.5L1534 3233.5H1447.5L1360.5 3291V3351L1447.5 3305V3351L1358 3443"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1180 3254.5H1299.5V3451"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M925 2982V2916.5H701L776.5 2993.5V3059L875.5 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M390 3206.5H454L499.5 3160V3098.5H562.5V2983.5H674L719.5 3029.5V3094L788 3164L668.5 3273.5L727.5 3347.5L804 3269.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 2987V3135L461.5 3046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M634.5 2850H361.5L492.459 2984"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 2849.5H690.5L818.5 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 2916H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 3277L389.5 3332"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 3215L323.5 3491L451.5 3359.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 2881L990.5 3157L862.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M497.5 3447L497.5 3321.5L587.5 3449"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M498.5 4136.5L498.5 4011L588.5 4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1164.5 4136.5L1164.5 4011L1254.5 4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 4136.5L2515.5 4011L2605.5 4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3866.5 4135.5L3866.5 4010L3956.5 4137.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 4136.5L1849.5 4011L1939.5 4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 4136.5L3201.5 4011L3291.5 4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 3277L890.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 3964L890.5 4134"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 3967L1576.5 4137"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2929.5 3967L2929.5 4137"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 3967L2242.5 4137"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 3967L3594.5 4137"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 3040L633.5 3186L673.5 3145"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M538.5 3236L653.5 3399"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 2982V2916.5H35.5L111 2993.5V3059L210 3156.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 2851H26.5L154.263 2718"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 2881L323.5 3157L195.5 3025.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 3277L224.5 3447"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 3969L224.5 4139"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 2968.5V3037.5H66.5L8.5 3095.5V3176.5H125.5L182 3233.5H95.5L8.5 3291V3351L95.5 3305V3351L6 3443"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M926.5 3651.5V3586H702.5L778 3663V3728.5L877 3826"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 3656V3804L1127.5 3715.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 3964L389.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 3964L1055.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1740.5 3964L1740.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 3964L2406.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3092.5 3964L3092.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 3964L3758.5 4019"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 3902L324.5 4178L452.5 4046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 3902L990.5 4178L1118.5 4046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 3902L1675.5 4178L1803.5 4046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2341.5 3902L2341.5 4178L2469.5 4046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 3903L3028.5 4179L3156.5 4047.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3693.5 3902L3693.5 4178L3821.5 4046.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 3656V3804L2479.5 3715.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 3657V3805L3831.5 3716.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2276.5 3651.5V3586H2052.5L2128 3663V3728.5L2227 3826"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3628.5 3651.5V3586H3404.5L3480 3663V3728.5L3579 3826"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 3651.5V3586H1387.5L1463 3663V3728.5L1562 3826"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 3649.5V3584H35.5L111 3661V3726.5L210 3824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 3650.5V3585H2739.5L2815 3662V3727.5L2914 3825"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 3550L990.5 3826L862.5 3694.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 3550L2342.5 3826L2214.5 3694.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3695.5 3551L3695.5 3827L3567.5 3695.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 3550L1675.5 3826L1547.5 3694.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 3550L324.5 3826L196.5 3694.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 3549L3028.5 3825L2900.5 3693.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 3518.5H690.5L818.5 3387"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 3519.5H2042.5L2170.5 3388"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 3519.5H3394.5L3522.5 3388"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2998 3518.5H2728.5L2856.5 3387"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1648 3519.5H1378.5L1506.5 3388"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 3656V3804L461.5 3715.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 3656V3804L1813.5 3715.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 3656V3804L3165.5 3715.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 3519H360.5L491.459 3653"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 3517H1713.5L1844.46 3651"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 3518H3064.5L3195.46 3652"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1299.5 3519H1026.5L1157.46 3653"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2651.5 3517H2378.5L2509.46 3651"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4003.5 3520H3730.5L3861.46 3654"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 3586H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1854.5 3584H1925.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204.5 3585H3275.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518.5 3584H2589.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3871.5 3584H3942.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 3586H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 3520H26.5L154.263 3387"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 3656V3825.5H1476.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 3656V3825.5H124.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 3655V3824.5H2828.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M437 3825H516.5V3705.5L573 3648H676V3738.5L784 3831L610 3826.5V3708.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1789.5 3826H1869V3706.5L1925.5 3649H2028.5V3739.5L2136.5 3832L1962.5 3827.5V3709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3140.5 3825H3220V3705.5L3276.5 3648H3379.5V3738.5L3487.5 3831L3313.5 3826.5V3708.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1087.5 3832H1178V3769.68L1223 3723V3635H1299.5V3832H1242.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2438.5 3831H2529V3768.68L2574 3722V3634H2650.5V3831H2593.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3791.5 3833H3882V3770.68L3927 3724V3636H4003.5V3833H3946.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378.5 3901.5H500L545.5 3949L601.5 3889.5H651.5V3961.5L609.5 4008L674.5 4074.5L743.5 4004.5V3889.5H909"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730.5 3901H1852L1897.5 3948.5L1953.5 3889H2003.5V3961L1961.5 4007.5L2026.5 4074L2095.5 4004V3889H2261"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3081.5 3901H3202L3248.5 3949.5L3304.5 3890H3354.5V3962L3312.5 4008.5L3377.5 4075L3446.5 4005V3890H3612"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M241 3900.5H118L75.5 4030L9.5 3961.5V4138"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1592 3901H1469L1426.5 4030.5L1360.5 3962V4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2945 3901H2822L2779.5 4030.5L2713.5 3962V4138.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 3901H1202V3963.5H1254.5V3901H1300.5V4138"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2407.5 3901H2554V3963.5H2606.5V3901H2652.5V4138"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 3900H3905V3962.5H3957.5V3900H4003.5V4137"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364.5 3897H1419"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2717.5 3897H2772"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12.5 3897H67"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 4337V4485L3831.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4005.5 4200H3729.5L3861.9 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3872.5 4266H3943.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 4628L3758.5 4683"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 4565L3694.5 4841L3822.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3867.5 4798.5L3867.5 4673L3957.5 4800.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4004 4246.5V4334H3913V4462L3838 4540H4004V4411"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3884 4604.5H4003.5V4801"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3629 4332V4266.5H3405L3480.5 4343.5V4409L3579.5 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3094 4556.5H3158L3203.5 4510V4448.5H3266.5V4333.5H3378L3423.5 4379.5V4444L3492 4514L3372.5 4623.5L3431.5 4697.5L3508 4619.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 4337V4485L3165.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3338.5 4200H3065.5L3196.46 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 4199.5H3394.5L3522.5 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3205.5 4266H3276.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3093.5 4627L3093.5 4682"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 4565L3027.5 4841L3155.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 4231L3694.5 4507L3566.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 4797L3201.5 4671.5L3291.5 4799"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 4627L3594.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 4390L3337.5 4536L3377.5 4495"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3242.5 4586L3357.5 4749"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 4332V4266.5H2739.5L2815 4343.5V4409L2914 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 4337V4485L2479.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2653.5 4200H2377.5L2509.9 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2999.5 4201H2730.5L2858.26 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2520.5 4266H2591.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 4628L2406.5 4683"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 4565L2342.5 4841L2470.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 4231L3027.5 4507L2899.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 4798.5L2515.5 4673L2605.5 4800.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2928.5 4627L2928.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2652 4246.5V4334H2561V4462L2486 4540H2652V4411"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 4318.5V4387.5H2770.5L2712.5 4445.5V4526.5H2829.5L2886 4583.5H2799.5L2712.5 4641V4701L2799.5 4655V4701L2710 4793"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2532 4604.5H2651.5V4801"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2277 4332V4266.5H2053L2128.5 4343.5V4409L2227.5 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1742 4556.5H1806L1851.5 4510V4448.5H1914.5V4333.5H2026L2071.5 4379.5V4444L2140 4514L2020.5 4623.5L2079.5 4697.5L2156 4619.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 4337V4485L1813.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 4200H1713.5L1844.46 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 4199.5H2042.5L2170.5 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1853.5 4266H1924.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1741.5 4627L1741.5 4682"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 4565L1675.5 4841L1803.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 4231L2342.5 4507L2214.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 4797L1849.5 4671.5L1939.5 4799"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 4627L2242.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1985.5 4390L1985.5 4536L2025.5 4495"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1890.5 4586L2005.5 4749"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 4332V4266.5H1387.5L1463 4343.5V4409L1562 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 4337V4485L1127.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1301.5 4200H1025.5L1157.9 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1647.5 4201H1378.5L1506.26 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 4266H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1054.5 4628L1054.5 4683"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 4565L990.5 4841L1118.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 4231L1675.5 4507L1547.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1163.5 4798.5L1163.5 4673L1253.5 4800.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 4627L1576.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1300 4246.5V4334H1209V4462L1134 4540H1300V4411"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 4318.5V4387.5H1418.5L1360.5 4445.5V4526.5H1477.5L1534 4583.5H1447.5L1360.5 4641V4701L1447.5 4655V4701L1358 4793"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1180 4604.5H1299.5V4801"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M925 4332V4266.5H701L776.5 4343.5V4409L875.5 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M390 4556.5H454L499.5 4510V4448.5H562.5V4333.5H674L719.5 4379.5V4444L788 4514L668.5 4623.5L727.5 4697.5L804 4619.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 4337V4485L461.5 4396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M634.5 4200H361.5L492.459 4334"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 4199.5H690.5L818.5 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 4266H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 4627L389.5 4682"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 4565L323.5 4841L451.5 4709.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 4231L990.5 4507L862.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M497.5 4797L497.5 4671.5L587.5 4799"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M498.5 5486.5L498.5 5361L588.5 5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1164.5 5486.5L1164.5 5361L1254.5 5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 5486.5L2515.5 5361L2605.5 5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3866.5 5485.5L3866.5 5360L3956.5 5487.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 5486.5L1849.5 5361L1939.5 5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 5486.5L3201.5 5361L3291.5 5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 4627L890.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 5314L890.5 5484"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 5317L1576.5 5487"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2929.5 5317L2929.5 5487"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 5317L2242.5 5487"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 5317L3594.5 5487"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 4390L633.5 4536L673.5 4495"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M538.5 4586L653.5 4749"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 4332V4266.5H35.5L111 4343.5V4409L210 4506.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 4201H26.5L154.263 4068"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 4231L323.5 4507L195.5 4375.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 4627L224.5 4797"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 5319L224.5 5489"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 4318.5V4387.5H66.5L8.5 4445.5V4526.5H125.5L182 4583.5H95.5L8.5 4641V4701L95.5 4655V4701L6 4793"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M926.5 5001.5V4936H702.5L778 5013V5078.5L877 5176"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 5006V5154L1127.5 5065.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 5314L389.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 5314L1055.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1740.5 5314L1740.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 5314L2406.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3092.5 5314L3092.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 5314L3758.5 5369"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 5252L324.5 5528L452.5 5396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 5252L990.5 5528L1118.5 5396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 5252L1675.5 5528L1803.5 5396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2341.5 5252L2341.5 5528L2469.5 5396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 5253L3028.5 5529L3156.5 5397.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3693.5 5252L3693.5 5528L3821.5 5396.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 5006V5154L2479.5 5065.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 5007V5155L3831.5 5066.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2276.5 5001.5V4936H2052.5L2128 5013V5078.5L2227 5176"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3628.5 5001.5V4936H3404.5L3480 5013V5078.5L3579 5176"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 5001.5V4936H1387.5L1463 5013V5078.5L1562 5176"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 4999.5V4934H35.5L111 5011V5076.5L210 5174"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 5000.5V4935H2739.5L2815 5012V5077.5L2914 5175"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 4900L990.5 5176L862.5 5044.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 4900L2342.5 5176L2214.5 5044.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3695.5 4901L3695.5 5177L3567.5 5045.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 4900L1675.5 5176L1547.5 5044.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 4900L324.5 5176L196.5 5044.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 4899L3028.5 5175L2900.5 5043.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 4868.5H690.5L818.5 4737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 4869.5H2042.5L2170.5 4738"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 4869.5H3394.5L3522.5 4738"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2998 4868.5H2728.5L2856.5 4737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1648 4869.5H1378.5L1506.5 4738"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 5006V5154L461.5 5065.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 5006V5154L1813.5 5065.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 5006V5154L3165.5 5065.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 4869H360.5L491.459 5003"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 4867H1713.5L1844.46 5001"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 4868H3064.5L3195.46 5002"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1299.5 4869H1026.5L1157.46 5003"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2651.5 4867H2378.5L2509.46 5001"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4003.5 4870H3730.5L3861.46 5004"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 4936H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1854.5 4934H1925.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204.5 4935H3275.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518.5 4934H2589.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3871.5 4934H3942.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 4936H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 4870H26.5L154.263 4737"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 5006V5175.5H1476.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 5006V5175.5H124.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 5005V5174.5H2828.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M437 5175H516.5V5055.5L573 4998H676V5088.5L784 5181L610 5176.5V5058.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1789.5 5176H1869V5056.5L1925.5 4999H2028.5V5089.5L2136.5 5182L1962.5 5177.5V5059.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3140.5 5175H3220V5055.5L3276.5 4998H3379.5V5088.5L3487.5 5181L3313.5 5176.5V5058.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1087.5 5182H1178V5119.68L1223 5073V4985H1299.5V5182H1242.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2438.5 5181H2529V5118.68L2574 5072V4984H2650.5V5181H2593.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3791.5 5183H3882V5120.68L3927 5074V4986H4003.5V5183H3946.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378.5 5251.5H500L545.5 5299L601.5 5239.5H651.5V5311.5L609.5 5358L674.5 5424.5L743.5 5354.5V5239.5H909"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730.5 5251H1852L1897.5 5298.5L1953.5 5239H2003.5V5311L1961.5 5357.5L2026.5 5424L2095.5 5354V5239H2261"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3081.5 5251H3202L3248.5 5299.5L3304.5 5240H3354.5V5312L3312.5 5358.5L3377.5 5425L3446.5 5355V5240H3612"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M241 5250.5H118L75.5 5380L9.5 5311.5V5488"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1592 5251H1469L1426.5 5380.5L1360.5 5312V5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2945 5251H2822L2779.5 5380.5L2713.5 5312V5488.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 5251H1202V5313.5H1254.5V5251H1300.5V5488"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2407.5 5251H2554V5313.5H2606.5V5251H2652.5V5488"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 5250H3905V5312.5H3957.5V5250H4003.5V5487"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364.5 5247H1419"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2717.5 5247H2772"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12.5 5247H67"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
      </svg>

      {/* <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(0, 0, 0, 0.1) 10%, rgb(0, 0, 0, 0.6))",
        }}
      ></div> */}
    </div>
  );
}

export default PatternBackground;
