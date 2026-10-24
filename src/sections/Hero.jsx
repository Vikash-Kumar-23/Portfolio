import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { getAssetPath } from "../utils/assetPath";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-text h1",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1.1 }
    )
      .fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta-btn",
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
        "-=0.5"
      )
      .fromTo(
        ".hero-3d-layout",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 -z-10">
        <img src={getAssetPath("/images/bg.png")} alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5 relative z-20 pointer-events-none">
          <div className="flex flex-col gap-7 items-start max-w-xl xl:max-w-2xl pointer-events-none">
            <div className="hero-text pointer-events-none">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="hero-desc text-white-50 md:text-xl relative z-10 pointer-events-none max-w-lg">
              Hi, I’m Vikash, a VJTI student with a genuine passion for coding and a drive to build impactful technical solutions.
            </p>

            <div className="hero-cta-btn w-fit pointer-events-auto">
              <Button
                text="See My Work"
                className="w-52 h-12 md:w-60 md:h-14"
                id="hero-see-work-btn"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure className="pointer-events-auto">
          <div className="hero-3d-layout pointer-events-auto">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
