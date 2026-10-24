import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { getAssetPath } from "../utils/assetPath";

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
            start: index === 0 ? "top 55%" : "top 80%",
            end: "bottom 75%",
            scrub: 0.8,
          },
        }
      );

      // 2. Staggered Content Animation (Flow effect)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 78%",
          once: true,
        },
      });

      tl.from(logo, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)",
      })
        .from(
          card,
          {
            x: -30,
            y: 15,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          text,
          {
            x: 30,
            y: 15,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.6"
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
                      {card.isResearchAssistant ? (
                        <div className="space-y-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                              Multi-Agent AI
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                              Gemini + LangChain
                            </span>
                          </div>
                          <div>
                            <p className="text-[#839CB5] italic text-sm mb-1.5">
                              Problem statement
                            </p>
                            <p className="text-white-50 text-sm leading-relaxed">
                              {card.review}
                            </p>
                          </div>
                          <a
                            href={card.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-50 pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                            aria-label="Open Multi-Agent AI Research Assistant live demo"
                          >
                            Live Demo <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      ) : card.isGSoC || card.imgPath.includes("gsoc") ? (
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                              ☀️ GSoC &apos;26
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                              NumFOCUS
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              Open Source
                            </span>
                          </div>

                          <div>
                            <p className="text-[#839CB5] italic text-sm mb-1.5">
                              Open Source Journey
                            </p>
                            <p className="text-white-50 text-sm leading-relaxed">
                              {card.problemStatement || card.review}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2.5 pt-1">
                            <a
                              href={card.gsocLink || "https://vikash-kumar-23.github.io/"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-50 pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                              aria-label="Open GSoC Project Site"
                            >
                              <span>GSoC Project Site</span>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <a
                              href={card.openSourceLink || "https://github.com/Vikash-Kumar-23"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-50 pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer hover:scale-[1.02]"
                              aria-label="Open GitHub Profile"
                            >
                              <span>GitHub Profile</span>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>

                          <div className="flex items-center justify-start pt-2">
                            <img
                              src={getAssetPath("/images/gsoc-full.svg")}
                              alt="Google Summer of Code"
                              className="h-8 md:h-9 object-contain"
                            />
                          </div>
                        </div>
                      ) : card.imgPath.includes("exp2.png") ? (
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
                          <a
                            href={card.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-50 pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                            aria-label="Open AI Legal Document Assistant live demo"
                          >
                            Live Demo <span aria-hidden="true">↗</span>
                          </a>
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
                        ) : card.logoPath.includes("gsoc") ? (
                          <img
                            src={card.logoPath}
                            alt="GSoC Logo"
                            className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(249,171,0,0.6)]"
                          />
                        ) : (
                          <img
                            src={card.logoPath}
                            alt="logo"
                            className="object-contain"
                          />
                        )}
                      </div>
                      <div className="w-full">
                        <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                        <p className="my-4 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        {card.isGSoC ? (
                          <p className="text-[#839CB5] italic">
                            🏆 Merged Open Source Contributions:
                          </p>
                        ) : !(card.imgPath.includes("exp2.png") || card.imgPath.includes("exp3.png")) ? (
                          <p className="text-[#839CB5] italic">
                            Responsibilities
                          </p>
                        ) : null}
                        <ul className="list-disc ms-5 flex flex-col gap-4 text-white-50 mt-4">
                          {card.responsibilities.map(
                            (responsibility, index) => {
                              const colonIdx = responsibility.indexOf(":");
                              if (colonIdx > 0 && card.isGSoC) {
                                const tag = responsibility.substring(0, colonIdx);
                                const detail = responsibility.substring(colonIdx + 1);
                                return (
                                  <li key={index} className="text-base md:text-lg leading-relaxed">
                                    <strong className="text-white font-semibold">{tag}:</strong>{detail}
                                  </li>
                                );
                              }
                              return (
                                <li key={index} className="text-base md:text-lg leading-relaxed">
                                  {responsibility}
                                </li>
                              );
                            }
                          )}
                        </ul>

                        {card.isGSoC && (
                          <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                              href={card.gsocLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-50 pointer-events-auto cursor-pointer text-sm text-amber-400 hover:text-amber-300 underline font-medium inline-flex items-center gap-1"
                              aria-label="View GSoC Project Site"
                            >
                              View GSoC Project Site &rarr;
                            </a>
                            <span className="text-white-50">&bull;</span>
                            <a
                              href={card.openSourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-50 pointer-events-auto cursor-pointer text-sm text-sky-400 hover:text-sky-300 underline font-medium inline-flex items-center gap-1"
                              aria-label="Explore GitHub Contributions"
                            >
                              Explore GitHub Contributions &rarr;
                            </a>
                          </div>
                        )}
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
