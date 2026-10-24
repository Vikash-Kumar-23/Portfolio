import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TitleHeader = ({ title, sub }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const badge = containerRef.current.querySelector(".hero-badge");
    const heading = containerRef.current.querySelector("h1");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 88%",
        once: true,
      },
    });

    tl.fromTo(
      badge,
      { y: 15, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }
    ).fromTo(
      heading,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
      "-=0.35"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
