"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { useState, useEffect } from "react";

function Gallery() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200); // 1.2s loading simulation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="min-h-[80vh] flex py-12 xl:py-0 font-jetbrains px-6 md:px-0"
        >
            <div className="container mx-auto w-full h-full pb-12">
                {isLoading ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <li
                                key={index}
                                className="w-[100%] h-[250px] rounded-xl bg-gray-800 animate-pulse"
                            ></li>
                        ))}
                    </ul>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                        {gallery.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="w-[100%] h-[250px] rounded-xl overflow-hidden relative group"
                                >
                                    <Image
                                        src={item.img}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-102 ease-in-out"
                                        alt={item.category}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Gallery;