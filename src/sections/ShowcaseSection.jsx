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




    useGSAP(() => {
        gsap.fromTo(
        sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
    )

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];


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
        <div className="showcaseLayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
                <h2>ON-Demand Rides Made Simple with a Powerful, User-friendyly App called Ryde</h2>
                <p className="text-white-50 md:text-xl">
                    An app built with React Native, Expo, and TailwindCss for a fast, user friendyl expereince.
                </p>
            </div>
          </div>

          {/* RIGHT */}
            <div className="project-list-wrapper overflow-hidden">
               <div className="project" ref={project2Ref}>
               <div className="image-wrapper bg-[#5fefdb]">
                <img src="/images/project2.png" alt="Libary Management Plattform" />
               </div>
                   <h2>Libary MAnagen Platform</h2>
               </div>

                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#fe7feb]">
                        <img src="/images/project3.png" alt="YC Directory" />
                    </div>
                    <h2>YC Dir - A startup shocasce app</h2>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
