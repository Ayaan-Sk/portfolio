import Spline from "@splinetool/react-spline/next";

export default function SplineScene() {
  return (
    <div className="absolute top-[100vh] -translate-y-[35%] h-[100vh] w-full border-2 border-lime-500">
      <div className="absolute size-[200px] md:size-[400px] top-[50%] left-[8%] lg:left-[30%] lg:translate-x-[-50%] -translate-y-[50%] bg-[#61cc9c]/[0.8] -z-10 rounded-full blur-[200px]"></div>
      {/* <Spline scene="https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode" /> */}
    </div>
  );
}
