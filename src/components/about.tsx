"use client";

import { DATA } from "@/data/resume";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code, Briefcase, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="container max-w-4xl mx-auto py-24 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                // className="bg-white dark:bg-card rounded-2xl p-8 sm:p-12 border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white dark:hover:from-card hover:via-gray-600/10 dark:hover:via-white/5 hover:to-gray-600/10 dark:hover:to-white/5 transition-all duration-500"
                className="bg-card rounded-2xl p-8 sm:p-12 border border-border/50 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 hover:bg-gradient-to-br hover:from-card hover:via-primary/5 hover:to-card"



            >
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight inline-block transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-500 to-blue-500 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">About Me</h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />

                    <div className="relative mb-12 max-w-4xl mx-auto">
                        <span className="absolute -top-6 -left-2 md:-left-8 text-6xl text-primary/5 font-serif select-none">“</span>
                        <p className="text-xl md:text-2xl font-medium text-muted-foreground/80 leading-relaxed sm:leading-loose text-center relative z-10">
                            I am an <span className="text-primary font-bold">AI/ML Engineer</span> with a strong background in developing <span className="bg-secondary/50 px-2 py-0.5 rounded-md text-foreground">modular ML optimization workflows</span> and deploying energy optimization models. I have experience in building <span className="bg-secondary/50 px-2 py-0.5 rounded-md text-foreground">scalable microservices</span>, integrating LLMs, and creating AI-driven tools using <span className="font-bold text-foreground">Python, FastAPI, React, and AWS</span>.
                        </p>
                    </div>

                    <div className="w-20 h-[2px] bg-primary/20 rounded-full my-6" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl border border-border/50 hover:-translate-y-1 hover:shadow-lg hover:bg-secondary/40 transition-all duration-300 cursor-default"
                        >
                            <Calendar className="size-8 text-primary mb-2" />
                            <span className="text-2xl font-bold text-foreground">1.5+</span>
                            <span className="text-sm text-muted-foreground">Years Experience</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl border border-border/50 hover:-translate-y-1 hover:shadow-lg hover:bg-secondary/40 transition-all duration-300 cursor-default"
                        >
                            <Briefcase className="size-8 text-primary mb-2" />
                            <span className="text-2xl font-bold text-foreground">10+</span>
                            <span className="text-sm text-muted-foreground">Projects Completed</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl border border-border/50 hover:-translate-y-1 hover:shadow-lg hover:bg-secondary/40 transition-all duration-300 cursor-default"
                        >
                            <Code className="size-8 text-primary mb-2" />
                            <span className="text-2xl font-bold text-foreground">20+</span>
                            <span className="text-sm text-muted-foreground">Technologies</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl border border-border/50 hover:-translate-y-1 hover:shadow-lg hover:bg-secondary/40 transition-all duration-300 cursor-default"
                        >
                            <Zap className="size-8 text-primary mb-2" />
                            <span className="text-2xl font-bold text-foreground">Fast</span>
                            <span className="text-sm text-muted-foreground">Delivery</span>
                        </motion.div>
                    </div>

                    <div className="prose dark:prose-invert max-w-full text-muted-foreground text-lg text-pretty font-sans text-center">
                        {DATA.summary}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
