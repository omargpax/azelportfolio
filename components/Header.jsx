"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png"
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

function useIsDecember() {
    const [isDecember, setIsDecember] = useState(false);

    useEffect(() => {
        setIsDecember(new Date().getMonth() === 11);
    }, []);

    return isDecember;
}

const Header = () => {
    const isDecember = useIsDecember();
    return (
        <nav className="fixed w-full top-0 left-0 py-4 text-white bg-gray-950 z-50 shadow-sm border-b-2 border-gray-900 px-6 md:px-4">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                    <Image src={logo} alt="Logo" width={30} className="-hue-rotate-45 contrast-125 saturate-150"></Image>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link
                        href="mailto:omargpax.dev@gmail.com"
                        className={`relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 overflow-visible ${isDecember
                                ? "bg-red-800 text-white shadow-lg hover:bg-red-700 mt-2" // Rojo Navidad + Margen superior para la nieve
                                : "bg-cyan-500 text-gray-900 hover:bg-cyan-600"
                            }`}
                    >
                        {/* ❄️ EFECTO DE NIEVE ACUMULADA (Solo Diciembre) */}
                        {isDecember && (
                            <>
                                {/* Capa principal de nieve (centrada y detrás del texto) */}
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-2 bg-white rounded-full z-0 pointer-events-none shadow-sm" />

                                {/* Pequeños montículos para dar forma más natural */}
                                <span className="absolute top-0 left-6 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-0 pointer-events-none" />
                                <span className="absolute top-0 right-6 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-0 pointer-events-none" />
                            </>
                        )}

                        {/* Texto del botón (con z-10 para que quede sobre la capa de nieve de fondo si se superponen) */}
                        <span className={`relative z-10 ${isDecember ? "drop-shadow-sm" : ""}`}>
                            Let's talk
                        </span>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </nav>
    );
};

export default Header;