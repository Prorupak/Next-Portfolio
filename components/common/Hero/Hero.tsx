"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { RiArrowDownSLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section id="home">
            <div className="animation-delay-2 my-10 flex animate-fadeIn flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:py-52 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image src="/hero.png" alt="" width={330} height={330} className="rounded-full shadow-2xl" />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">Hi, I&#39;m Rupak!</h1>
                    <p className="mt-4 mb-6 text-lg md:text-2xl">
                        I&#39;m a <span className="font-semibold text-teal-600">Full-Stack Developer </span>
                        based in Nepal. Designing MERN Web Applications that makes life easier and more meaningful.
                    </p>
                    <Link
                        to="projects"
                        className="cursor-pointer rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-center ">
                <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
                    <RiArrowDownSLine size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
