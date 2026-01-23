import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Select all experience card wrappers
    const wrappers = gsap.utils.toArray(".exp-card-wrapper");

    wrappers.forEach((wrapper, index) => {
      const gradientLine = wrapper.querySelector(".gradient-line");
      const logo = wrapper.querySelector(".timeline-logo");
      const card = wrapper.querySelector(".timeline-card");
      const text = wrapper.querySelector(".expText > div:last-child");

      // 1. The Vertical Line: Growth animation
      gsap.fromTo(
        gradientLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: index === 0 ? "top 50%" : "top 80%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // 2. Staggered Content Animation (Flow effect)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(logo, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
        .from(
          card,
          {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          text,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Project Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      {card.imgPath.includes("exp2.png") ? (
                        <div className="space-y-5">
                          <div>
                            <p className="text-[#839CB5] italic text-sm mb-2">
                              Problem Statement
                            </p>
                            <p className="text-white-50 text-base leading-relaxed">
                              Building a core social media platform that allows
                              users to securely connect, share visual content,
                              and interact in real time—similar to Instagram’s
                              essential features.
                            </p>
                          </div>
                          <div className="flex items-center justify-start h-10">
                            <span className="instagram-logo-text text-5xl md:text-3xl">
                              Instagram
                            </span>
                          </div>
                        </div>
                      ) : card.imgPath.includes("exp3.png") ? (
                        <div className="space-y-5">
                          <div>
                            <p className="text-[#839CB5] italic text-sm mb-2">
                              Problem Statement
                            </p>
                            <p className="text-white-50 text-base leading-relaxed">
                              This app tackles the problem of quickly
                              understanding complex legal documents by
                              extracting their text, generating an executive
                              summary, and highlighting potential risks or
                              liabilities—allowing non-experts to identify key
                              obligations and red flags without reading every
                              clause.
                            </p>
                          </div>
                          <div className="flex items-center justify-start h-10">
                            <span className="font-bold text-5xl md:text-3xl tracking-tighter font-sans">
                              <span className="text-[#3776AB]">Py</span>
                              <span className="text-[#FFD43B]">thon</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-start">
                          <img
                            src={card.imgPath}
                            alt="exp-img"
                            className="md:h-10 h-8 object-contain rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper z-10">
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        {card.logoPath.includes("logo1.png") ? (
                          <span className="text-red-600 font-bold text-2xl md:text-5xl font-sans">
                            Z
                          </span>
                        ) : (
                          <img
                            src={card.logoPath}
                            alt="logo"
                            className="object-contain"
                          />
                        )}
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        {!(card.imgPath.includes("exp2.png") || card.imgPath.includes("exp3.png")) && (
                          <p className="text-[#839CB5] italic">
                            Responsibilities
                          </p>
                        )}
                        <ul className={`list-disc ms-5 flex flex-col gap-5 text-white-50 ${
                          (card.imgPath.includes("exp2.png") || card.imgPath.includes("exp3.png")) ? "" : "mt-5"
                        }`}>
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
