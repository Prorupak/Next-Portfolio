import { Inter } from "@next/font/google";
import { About, Hero, Projects } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <Hero />
            <About />
            <Projects />
        </main>
    );
}
