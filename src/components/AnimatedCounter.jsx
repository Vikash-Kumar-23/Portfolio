import { useRef, memo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = memo(() => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    if (!counterRef.current) return;

    gsap.fromTo(
      countersRef.current,
      { y: 30, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
        },
      }
    );

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 will-change-transform">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <a
            key={`counter-${index}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 will-change-transform"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
});

AnimatedCounter.displayName = "AnimatedCounter";

export default AnimatedCounter;
