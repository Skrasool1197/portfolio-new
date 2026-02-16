"use client";

import { DATA } from "@/data/resume";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="container max-w-3xl mx-auto pt-24 pb-6 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-black rounded-3xl p-8 sm:p-16 text-center shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 group"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    Get in Touch
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Link
                    href={`mailto:${DATA.contact.email}`}
                    className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 py-6 text-lg font-semibold bg-white text-black hover:bg-white hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95 transition-all duration-300")}
                >
                    Say Hello
                </Link>
            </motion.div>
        </section>
    );
}
