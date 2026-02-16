"use client";

import { DATA } from "@/data/resume";
import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ skill }: { skill: string }) => (
    <div className="mx-2 px-8 py-4 bg-card rounded-full border border-border/50 shadow-sm text-lg font-medium text-foreground whitespace-nowrap hover:scale-120 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-default">
        {skill}
    </div>
);

export default function Skills() {
    const skills = DATA.skills;
    const half = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, half);
    const secondRow = skills.slice(half);

    return (
        <section id="skills" className="py-24 overflow-hidden relative">
            <div className="container max-w-4xl mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight inline-block transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-500 to-blue-500 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">Skills</h2>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto" />
            </div>

            <div className="relative max-w-[100vw]">
                {/* First Row - Moves Left */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-6">
                    <div className="flex">
                        {firstRow.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex">
                        {firstRow.map((skill, index) => (
                            <SkillBadge key={`dup-${index}`} skill={skill} />
                        ))}
                    </div>
                    {/* Duplicate again for wide screens */}
                    <div className="flex">
                        {firstRow.map((skill, index) => (
                            <SkillBadge key={`dup2-${index}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Moves Right */}
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                    <div className="flex">
                        {secondRow.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex">
                        {secondRow.map((skill, index) => (
                            <SkillBadge key={`dup-${index}`} skill={skill} />
                        ))}
                    </div>
                    {/* Duplicate again for wide screens */}
                    <div className="flex">
                        {secondRow.map((skill, index) => (
                            <SkillBadge key={`dup2-${index}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Fade Edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </section>
    );
}
