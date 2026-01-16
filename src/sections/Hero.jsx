import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter.jsx";


const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 1.5,
                duration: 5,
                ease: 'power2.inOut'
            },
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.svg" alt="background"/>
            </div>
            <div className="hero-layout">
                {/*{Left Hero Content}*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">

                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Ich forme
                                <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />

                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                            <h1> zu echten</h1>
                            <h1>  Ergebnissen. </h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, ich bin QG1o – sichere IT, smart automatisiert.
                        </p>

                        <Button
                        classname="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="🛠️ Meine Projekte"
                        />
                    </div>
                </header>


                <figure className="hero-3d-layout">
                    {/* Floating Bubbles Layer - über allem */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <HeroExperience />
                    </div>

                    {/* Profile Image - darunter */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center xl:justify-end xl:pr-20">
                        <div className="profile-image-wrapper">
                            <img
                                src="/images/profile.png"
                                alt="QG1o Profile"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </figure>

            </div>

            <AnimatedCounter />
        </section>
    )
}

export default Hero;