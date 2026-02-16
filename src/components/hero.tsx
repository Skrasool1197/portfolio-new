"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-32 sm:py-48 text-center bg-transparent">
            {/* Radial Gradient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

            {/* Secondary Gradient Tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05),transparent_40%)] pointer-events-none -z-10" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('/noise.png')]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
            >
                <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm sm:text-base font-semibold tracking-widest text-primary uppercase hover:bg-primary/10 hover:scale-120 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default">
                    AI/ML Engineer
                </div>
                <h1 className="text-6xl font-bold tracking-tight sm:text-8xl xl:text-9xl text-foreground">
                    Hi, I'm <span className="inline-block transition-all duration-300 hover:scale-105 hover:rotate-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-gray-500 hover:to-blue-500 hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.5)] cursor-pointer">{DATA.name.split(" ")[0]}</span>.
                </h1>
                {/* <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-gray-300 max-w-3xl leading-tight"> */}
                {/* <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-gray-300 max-w-3xl leading-tight hover:text-gray-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-gray-500/30 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-default"> */}
                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-gray-400 max-w-3xl leading-tight hover:text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block">

                    {DATA.description}
                </h2>

                {DATA.summary && (
                    <p className="max-w-2xl text-lg text-gray-300/80 leading-relaxed">
                        {DATA.summary}
                    </p>
                )}


                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link
                        href="#contact"
                        className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 text-base font-medium bg-foreground text-background hover:bg-foreground/90 hover:scale-115 hover:shadow-lg transition-transform duration-300")}
                    >
                        Contact Me
                    </Link>
                    <Link
                        href="#projects"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 text-base font-medium border-border hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-md transition-transform duration-300")}
                    >
                        View Projects <ArrowRight className="ml-2 size-4" />
                    </Link>
                </div>
            </motion.div>
        </section >
    );
}