"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const CoverImage = ({ src, alt }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setOpen(false)
        }
        if (open) {
            document.addEventListener("keydown", handleKey)
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.removeEventListener("keydown", handleKey)
            document.body.style.overflow = ""
        }
    }, [open])

    return (
        <>
            {/* Portada con botón */}
            <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8 group">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
                {/* Botón ver imagen — esquina inferior derecha */}
                <button
                    onClick={() => setOpen(true)}
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white
            rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs
            opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer backdrop-blur-sm"
                    title="Ver imagen completa"
                >
                    {/* Icono expand */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                    Ver portada
                </button>
            </div>

            {/* Modal lightbox */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={() => setOpen(false)}
                >
                    {/* Botón cerrar */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
                        title="Cerrar (Esc)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Imagen — click en ella no cierra el modal */}
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={1400}
                            height={900}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Hint ESC */}
                    <p className="absolute bottom-4 text-white/30 text-xs">
                        Presiona ESC o haz clic fuera para cerrar
                    </p>
                </div>
            )}
        </>
    )
}

export default CoverImage;
