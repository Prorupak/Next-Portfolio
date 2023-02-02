"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunFoggyLine, RiMoonFoggyLine, RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-scroll";

interface IHeaderProps {
    label: string;
    page: string;
}

const navItems: IHeaderProps[] = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
];

const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className="fixed top-0  z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-800  sm:px-20">
            <div className="justify-between md:flex md:items-center">
                <div>
                    <div className="flex items-center justify-between py-3 md:block md:py-5">
                        <Link to="home">
                            <div className="container flex items-center space-x-2">
                                <h2 className="text-2xl font-bold">Rupak Sapkota</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                                onClick={() => setIsNavOpen(!isNavOpen)}
                            >
                                {isNavOpen ? <RiCloseFill size={30} /> : <RiMenu4Fill size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                            isNavOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {navItems.map(item => {
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.page}
                                        className={
                                            " block cursor-pointer text-neutral-900 hover:text-neutral-500  dark:text-neutral-100 lg:inline-block"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setIsNavOpen(!isNavOpen)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            {currentTheme === "dark" ? (
                                <button onClick={() => setTheme("light")} className="rounded-xl bg-slate-100 p-2">
                                    <RiSunFoggyLine size={25} className="text-stone-700" />
                                </button>
                            ) : (
                                <button onClick={() => setTheme("dark")} className="rounded-xl bg-slate-100 p-2">
                                    <RiMoonFoggyLine size={25} className="text-stone-700" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
