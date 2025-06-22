"use client";

import { motion } from "framer-motion";
interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-8">
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 300"
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                >
                    <title>DigiSetu</title>
                    <motion.path
                        d="M 950 90 
                           C 1250 150, 1050 240, 600 260
                           C 250 260, 150 240, 150 150
                           C 150 60, 350 40, 600 40
                           C 850 40, 950 90, 950 90"
                        fill="none"
                        strokeWidth="8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-purple-600 dark:text-purple-400 opacity-90"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl text-black dark:text-white tracking-tighter flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export { HandWrittenTitle } 