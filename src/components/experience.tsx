"use client";

import { DATA } from "@/data/resume";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
    return (
        <section id="experience" className="container max-w-5xl mx-auto py-24 px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center tracking-tight inline-block w-full transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-500 to-blue-600 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">Work Experience</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12" />
            <div className="space-y-12">
                {DATA.work.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        // className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 relative bg-white rounded-2xl p-8 sm:p-12 border border-black/5 shadow-sm hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                        className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 relative bg-gradient-to-br from-card to-primary/5 rounded-2xl p-8 sm:p-12 border border-border/20 shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-border/60 hover:from-card hover:to-primary/10 transition-all duration-500" //can use
                    // className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 relative bg-white rounded-2xl p-8 sm:p-12 border border-transparent shadow-lg bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-primary/20 before:to-secondary/20 before:p-[2px] hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300"
                    // className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 relative bg-white rounded-2xl p-8 sm:p-12 border border-primary/20 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 hover:border-primary hover:bg-gradient-to-br hover:from-white hover:to-primary/10 transition-all duration-400"

                    >
                        {/* Date Column (Left) */}
                        <div className="md:col-span-1 text-left md:text-right pt-2">
                            <span className="text-xs sm:text-sm font-mono font-semibold text-muted-foreground uppercase tracking-widest">
                                {work.start} — {work.end}
                            </span>
                            <div className="hidden md:block text-xs font-mono text-muted-foreground/60 mt-2">
                                {work.location}
                            </div>
                        </div>

                        {/* Content Column (Right) */}
                        <div className="md:col-span-3 relative pl-0 md:pl-8 border-l-0 md:border-l-2 border-primary/20 md:border-dashed">
                            {/* Timeline Dot (Desktop only) -> Redesigned */}
                            <div className="hidden md:block absolute -left-[9px] top-[8px] size-4 rounded-full bg-background border-[3px] border-primary shadow-sm" />

                            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                                <div className="relative size-16 overflow-hidden rounded-2xl border bg-card shadow-sm shrink-0 flex items-center justify-center p-1">
                                    <Image src={work.logoUrl} alt={work.company} fill className="object-contain p-1" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground font-sans tracking-tight hover:text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block">{work.company}</h3>
                                    <p className="text-lg font-medium text-primary font-sans">{work.title}</p>
                                    <div className="md:hidden text-xs font-mono text-muted-foreground mt-1">
                                        {work.location}
                                    </div>
                                </div>
                            </div>

                            {work.description.length > 0 && (
                                <>
                                    <div className="mb-6 p-4 w-[95%] bg-primary/5 border-l-[6px] border-primary rounded-r-xl rounded-l-sm shadow-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:translate-x-1">
                                        <span className="block text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1 select-none">Impact</span>
                                        <p className="text-sm sm:text-base font-medium text-foreground/90 italic font-sans" dangerouslySetInnerHTML={{ __html: work.description[0] }} />
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed marker:text-primary/60 font-sans">
                                        {work.description.slice(1).map((desc, i) => (
                                            <li key={i} className="pl-1 text-pretty hover:text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-[1.01] hover:font-medium transition-all duration-300 cursor-default" dangerouslySetInnerHTML={{ __html: desc }} />
                                        ))}
                                    </ul>
                                </>
                            )}
                            {work.technologies && work.technologies.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {work.technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="hover:scale-110 hover:bg-primary/20 transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
