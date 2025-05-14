"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Heart } from 'lucide-react';
import { useState } from "react";

function Gallery() {
    const [loaded, setLoaded] = useState(Array(gallery.length).fill(false));

    const handleImageLoad = (idx) => {
        setLoaded((prev) => {
            const updated = [...prev];
            updated[idx] = true;
            return updated;
        });
    };

    return (
        <div className="min-h-[80vh] flex py-12 xl:py-0 font-jetbrains px-6 md:px-0">
            <div className="container mx-auto w-full h-full pb-12">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                    {gallery.map((item, index) => (
                        <li
                            key={index}
                            className="w-[100%] h-[250px] rounded-xl overflow-hidden relative group"
                        >
                            {!loaded[index] && (
                                <div className="absolute inset-0 bg-gray-800 animate-pulse z-10" />
                            )}
                            <Image
                                src={item.img}
                                fill
                                className={`object-cover transition-transform duration-300 group-hover:scale-102 ease-in-out ${!loaded[index] ? 'invisible' : 'visible'}`}
                                alt={item.category}
                                onLoad={() => handleImageLoad(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Gallery;