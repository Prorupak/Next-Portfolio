"use client";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className="">
                <ThemeProvider enableSystem={true} attribute="class">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
