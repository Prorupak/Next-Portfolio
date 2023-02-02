import React from "react";
import { RiGithubFill, RiTwitterFill, RiLinkedinBoxFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200"></hr>
            <div className="mx-auto  flex flex-col p-4 text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © 2023 Rupak Sapkota<a href="/" className="hover:underline"></a>
                </div>
                <div className="mb-1 flex flex-row items-center justify-center space-x-2">
                    <a href="https://github.com" rel="noreferrer" target="_blank">
                        <RiGithubFill
                            className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank">
                        <RiTwitterFill
                            className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                            size={30}
                        />
                    </a>

                    <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                        <RiLinkedinBoxFill
                            className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        <RiInstagramFill
                            className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
