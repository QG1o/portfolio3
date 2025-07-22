import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>
            <div className="hero-layout">
                {/*{Left Hero Content}*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">

                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
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
                            <h1>into Real projects</h1>
                            <h1>that deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Adrian, a developer based in Crotia with a passion for code.
                        </p>
                        <Button
                        classname="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                        />
                    </div>
                </header>

                {/*{Right, 3d Model}*/}
                <figure>
                    <div className="hero-3d-layout xl:top-40 top-120">   
                        {/* asdfasdas */}
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero;