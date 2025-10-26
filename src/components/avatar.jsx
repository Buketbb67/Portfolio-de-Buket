import Spline from "@splinetool/react-spline";

export default function Avatar({ className = "" }) {
  return (
    <div
      className={`w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[40rem] lg:h-[40rem] ${className}`}
    >
      <Spline scene="https://prod.spline.design/Vkg0yIPVKVxHuZ2C/scene.splinecode" />
    </div>
  );
}


