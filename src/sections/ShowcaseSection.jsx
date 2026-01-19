import { useRef } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
        sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
    )

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current];


        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })



    }, []);

  return (
      <section id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full">
              <div className="showcaselayout">
                  {/* LEFT */}
                  <div className="first-project-wrapper" ref={project1Ref}>
                      <div className="image-wrapper">
                          <a href="https://qg1o2.netlify.app/" target="_blank" rel="noopener noreferrer">
                              <img src="/images/project44.png" alt="" />
                          </a>
                      </div>
                      <div className="text-content">
                          <h2>Website 1</h2>
                          <p className="text-white-50 md:text-xl">
                              Persönliche Portfolio-Webseite zur Präsentation von Fähigkeiten und Projekten.
                          </p>
                      </div>
                  </div>

                  {/* RIGHT */}
                  <div className="project-list-wrapper overflow-hidden">
                                             <div className="project" ref={project2Ref}>
                          <div className="image-wrapper">
                              <a href="https://qg1o.netlify.app/" target="_blank" rel="noopener noreferrer">
                                  <img src="/images/project33.png" alt="" />
                              </a>
                          </div>
                                                     <h2 className="ml-8">Website 2</h2>
                      </div>

                      <div className="project" ref={project3Ref}>
                          <div className="image-wrapper">
                              <a href="https://qg1o.github.io/portfolio2/" target="_blank" rel="noopener noreferrer">
                                  <img src="/images/project11.png" alt="" />
                              </a>
                          </div>
                                                     <h2 className="ml-8">Website 3</h2>
                      </div>

                      <div className="project" ref={project4Ref}>
                          <div className="image-wrapper">
                              <a href="https://qg1o.github.io/portfolio1/" target="_blank" rel="noopener noreferrer">
                                  <img src="/images/project22.png" alt="" />
                              </a>
                          </div>
                                                     <h2 className="ml-8">Website 4</h2>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  );
};

export default ShowcaseSection;
