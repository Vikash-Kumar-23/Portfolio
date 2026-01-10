import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
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
            <div className="image-wrapper overflow-hidden rounded-xl relative">
              <img 
                src="/images/project1.png" 
                alt="Ryde App Interface" 
                className="transition-all duration-400 group-hover:scale-110 group-hover:contrast-125"
              />
              <div className="project-overlay">
                <div className="overlay-content">
                  <h2 className="overlay-title text-2xl md:text-3xl font-bold">Ryde App</h2>
                  <p className="overlay-desc text-white-50 text-sm md:text-base">On-demand rides with React Native & TailwindCSS.</p>
                </div>
              </div>
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project group" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] overflow-hidden rounded-xl relative">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  className="transition-all duration-400 group-hover:scale-110 group-hover:contrast-125"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h2 className="overlay-title text-xl font-bold">Library Platform</h2>
                    <p className="overlay-desc text-white-50 text-xs md:text-sm">Modern management system with full-stack features.</p>
                  </div>
                </div>
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project group" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] overflow-hidden rounded-xl relative">
                <img 
                  src="/images/project3.png" 
                  alt="YC Directory App" 
                  className="transition-all duration-400 group-hover:scale-110 group-hover:contrast-125"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h2 className="overlay-title text-xl font-bold">YC Directory</h2>
                    <p className="overlay-desc text-white-50 text-xs md:text-sm">Startup showcase app with modern UI and search.</p>
                  </div>
                </div>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
