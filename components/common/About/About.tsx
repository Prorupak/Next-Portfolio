import Image from "next/image";
import React from "react";

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
];

const About = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center text-4xl font-bold">
                    About Me
                    <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
                </h1>

                <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="mb-6 text-center text-2xl font-bold md:text-left">Get to know me!</h1>
                        <p>
                            Hi, my name is Rupak and I am a <span className="font-bold">{"highly ambitious"}</span>,
                            <span className="font-bold">{" self-motivated"}</span>, and full-stack(MERN) web developer.
                        </p>
                        <br />
                        <p>
                            I graduated from Nepal Banepa Polytechnic Institute in 2022 with a Diploma in Information
                            Technology and have been working in the field ever since.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy. From reading, playing sports,
                            traveling, to making YouTube videos, I am always seeking new experiences and love to keep
                            myself engaged and learning new things.
                        </p>
                        <br />
                        <p>
                            I believe that you should{" "}
                            <span className="font-bold text-teal-500">never stop growing</span> and that&#39;s what I
                            strive to do, I have a passion for technology and a desire to always push the limits of what
                            is possible. I am excited to see where my career takes me and am always open to new
                            opportunities. 😁✌️
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
                        <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="mr-2 mt-2 rounded bg-gray-200 px-4 py-2 font-semibold text-gray-500"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                        <Image
                            src="/peace.gif"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:relative md:bottom-4 md:left-32 md:z-0 md:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
