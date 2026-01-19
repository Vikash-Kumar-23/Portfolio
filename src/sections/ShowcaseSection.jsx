import { useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = memo(() => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper group">
            <a 
              href="https://github.com/Vikash-Kumar-23/Zomato-MERN-Project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className="image-wrapper overflow-hidden rounded-xl relative">
                <img 
                  src="/images/project1.png" 
                  alt="Reels-Style Food Delivery App" 
                  loading="lazy"
                  decoding="async"
                  className="transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
                />
                <div className="project-overlay will-change-[opacity]">
                  <div className="overlay-content will-change-transform">
                    <h2 className="overlay-title text-2xl md:text-3xl font-bold">Food Delivery App</h2>
                    <p className="overlay-desc text-white-50 text-sm md:text-base">Reels-style food discovery with MERN Stack.</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="text-content">
              <h2 className="mt-2">
                A modern food discovery and delivery platform inspired by Zomato and Instagram Reels.
              </h2>
              <p className="text-white-50 md:text-xl">
                Users explore food through a vertical, scrollable video feed instead of static menus.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project group" ref={libraryRef}>
              <a 
                href="https://github.com/Vikash-Kumar-23/Instagram-clone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="image-wrapper bg-[#FFEFDB] overflow-hidden rounded-xl relative">
                  <img
                    src="/images/project2.png"
                    alt="Instagram Clone Backend"
                    loading="lazy"
                    decoding="async"
                    className="transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
                  />
                  <div className="project-overlay will-change-[opacity]">
                    <div className="overlay-content will-change-transform">
                      <h2 className="overlay-title text-xl font-bold">Instagram Clone</h2>
                      <p className="overlay-desc text-white-50 text-xs md:text-sm">Backend-Focused Tutorial Project</p>
                      <p className="text-white-50 text-[10px] mt-2 line-clamp-2">Built to demonstrate core social media features such as user authentication and profile management.</p>
                    </div>
                  </div>
                </div>
              </a>
              <h2>Instagram Clone – Backend Development</h2>
            </div>

            <div className="project group" ref={ycDirectoryRef}>
              <a 
                href="https://legal-document-summarizer-project-nuaghjqlum4c5wk5l5tvwg.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="image-wrapper bg-[#FFE7EB] overflow-hidden rounded-xl relative">
                  <img 
                    src="/images/project3.png" 
                    alt="AI Legal Assistant" 
                    loading="lazy"
                    decoding="async"
                    className="transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
                  />
                  <div className="project-overlay will-change-[opacity]">
                    <div className="overlay-content will-change-transform">
                      <h2 className="overlay-title text-xl font-bold">AI Legal Assistant</h2>
                      <p className="overlay-desc text-white-50 text-xs md:text-sm">AI / NLP Application</p>
                      <p className="text-white-50 text-[10px] mt-2 line-clamp-3">Simplifies complex legal contracts into plain English. Summarizes jargon-heavy PDF, DOCX, and TXT files into clear executive summaries.</p>
                    </div>
                  </div>
                </div>
              </a>
              <h2>AI-Powered Legal Document Assistant</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AppShowcase.displayName = "AppShowcase";

export default AppShowcase;
