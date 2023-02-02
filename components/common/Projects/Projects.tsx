import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../SlideUp/SideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
    {
        name: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl.",
        image: "/project1.jpg",
        github: "https://github.com/",
        link: "https://google.com/",
    },
    {
        name: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl.",
        image: "/project2.jpg",
        github: "https://github.com/",
        link: "https://google.com/",
    },
    {
        name: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl. Sed euismod, nunc vel tincidunt lacinia, nunc est aliquam nisl, eu tincidunt nunc nisl eget nisl.",
        image: "/project3.jpg",
        github: "https://github.com/",
        link: "https://google.com/",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center text-4xl font-bold">
                Projects
                <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="animation-delay-2 flex  animate-slideUpCubiBezier flex-col md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                                        <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row space-x-4 align-bottom">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="cursor-pointer transition-transform hover:-translate-y-1"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="cursor-pointer transition-transform hover:-translate-y-1"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
