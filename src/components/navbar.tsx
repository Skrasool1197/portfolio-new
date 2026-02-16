"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 justify-center">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <div className="z-50 pointer-events-auto relative flex items-center gap-1 rounded-full bg-background/50 border border-border/20 shadow-md px-4 h-14 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-primary/20 hover:bg-gradient-to-br hover:from-background/80 hover:via-background/60 hover:to-primary/10 hover:scale-[1.02] hover:-translate-y-1">
                {DATA.navbar.map((item) => (
                    <TooltipProvider key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "rounded-full hover:bg-muted size-10 hover:scale-125 transition-all duration-300"
                                    )}
                                >
                                    <item.icon className="size-5" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
                <Separator orientation="vertical" className="h-6" />
                {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                        <TooltipProvider key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "rounded-full hover:bg-muted size-10 hover:scale-125 transition-all duration-300"
                                        )}
                                    >
                                        <social.icon className="size-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                <Separator orientation="vertical" className="h-6" />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={DATA.url}
                                target="_blank"
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "rounded-full hover:bg-muted size-10 hover:scale-125 transition-all duration-300"
                                )}
                            >
                                <FileText className="size-5" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Resume</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Separator orientation="vertical" className="h-6" />
                <ModeToggle />
            </div>
        </div>
    );
}
