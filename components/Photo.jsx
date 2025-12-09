"use client";

import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

function useIsDecember() {
    const [isDecember, setIsDecember] = useState(false);

    useEffect(() => {
        setIsDecember(new Date().getMonth() === 11);
    }, []);

    return isDecember;
}

function Photo() {
    const isDecember = useIsDecember();
    return (
        <>
            <Head>
                <link rel="preload" href="/assets/avatar.png" as="image" />
            </Head>

            <div className="w-full h-full relative z-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                    }}
                >
                    {/* avatar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4, duration: 0.7, ease: "easeIn" },
                        }}
                        className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute mt-1.5 ml-1.5"
                    >
                        <Image
                            src="/assets/avatar.png"
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-contain"
                        />
                    </motion.div>
                    {/* circle: christmas animation (red/green) when december, otherwise original blue animation */}
                    {isDecember ? (
                        <motion.svg
                            className="w-[260px] xl:w-[411px] h-[260px] xl:h-[411px]"
                            fill="transparent"
                            viewBox="0 0 506 506"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* red strokes */}
                            <motion.circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#D42426"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ strokeDasharray: "24 10 0 0" }}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate: [120, 360]
                                }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                            />

                            {/* green strokes, complementary dasharray to interleave with red  G: #16A34A    R: #D42426*/}
                            <motion.circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#16A34A"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ strokeDasharray: "24 10 0 0" }}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate: [120, 360]
                                }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            className="w-[260px] xl:w-[411px] h-[260px] xl:h-[411px]"
                            fill="transparent"
                            viewBox="0 0 506 506"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#0967b3"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ strokeDasharray: "24 10 0 0" }}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate: [120, 360]
                                }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </motion.svg>
                    )}
                </motion.div>
            </div>
        </>
    );
}

export default Photo;
