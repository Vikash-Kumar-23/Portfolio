import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { abilities } from "../constants";

const FeatureCards = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-card-item",
      { y: 35, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".grid-3-cols",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc, link, isExternal, ctaText, demoLink, demoText }) => {
          const defaultCtaText = "Visit Profile";
          const displayCtaText = ctaText || (isExternal ? defaultCtaText : null);

          const baseClasses = "feature-card-item card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]";
          const hoverClasses = isExternal ? "hover:border-blue-300 hover:bg-black-50 cursor-pointer group" : "";

        return (
          <div
            key={title}
            className={`${baseClasses} ${hoverClasses}`}
            onClick={() => {
              if (link) {
                window.open(link, isExternal ? "_blank" : "_self");
              }
            }}
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
            <div className="flex flex-col gap-2 mt-2">
              {displayCtaText && (
                <div
                  className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>→ {displayCtaText}</span>
                </div>
              )}
              {demoLink && demoText && (
                <div
                  className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(demoLink, "_blank");
                  }}
                >
                  <span>→ {demoText}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default FeatureCards;