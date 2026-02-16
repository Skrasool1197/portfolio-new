"use client";

import { badgeVariants } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="container max-w-6xl mx-auto py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center tracking-tight inline-block w-full transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-500 to-blue-700 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                >Featured Projects</h2>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DATA.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <Link href={project.href} target="_blank" className="block h-full">
                                <Card className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-card to-primary/5 rounded-2xl border border-border/20 shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-border/60 hover:from-card hover:to-primary/10 transition-all duration-500 group">
                                    <div className="relative aspect-video w-full overflow-hidden bg-muted/30">
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-grow bg-secondary/10 dark:bg-secondary/10">
                                        <CardHeader className="px-6 pt-6 pb-2">
                                            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                                                {project.dates}
                                            </div>
                                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                                                {project.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="px-6 pb-4 flex-grow">
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-[1.01] hover:font-medium transition-all duration-300 cursor-default">
                                                {project.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <div key={tech} className={cn(badgeVariants({ variant: "secondary" }), "bg-card text-secondary-foreground text-[10px] px-2 py-0.5 rounded-md border border-border/50 shadow-sm")}>
                                                    {tech}
                                                </div>
                                            ))}
                                        </CardFooter>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
