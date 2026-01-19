import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc, link, isExternal, ctaText, demoLink, demoText }) => {
        const defaultCtaText = "Visit Profile";
        const displayCtaText = ctaText || (isExternal ? defaultCtaText : null);

        const CardContent = (
          <>
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
            <div className="flex flex-col gap-2 mt-2">
              {displayCtaText && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>→ {displayCtaText}</span>
                </a>
              )}
              {demoLink && demoText && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>→ {demoText}</span>
                </a>
              )}
            </div>
          </>
        );

        const baseClasses = "card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300";
        const hoverClasses = isExternal ? "hover:border-blue-300 hover:bg-black-50 cursor-pointer group" : "";

        if (link) {
          return (
            <a
              key={title}
              href={link}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className={`${baseClasses} ${hoverClasses}`}
            >
              {CardContent}
            </a>
          );
        }

        return (
          <div
            key={title}
            className={baseClasses}
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  </div>
);

export default FeatureCards;