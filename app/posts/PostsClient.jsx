"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

const PostsClient = ({ posts }) => {
    const [search, setSearch] = useState("")
    const [selectedTag, setSelectedTag] = useState("")
    const [sortOrder, setSortOrder] = useState("desc")

    // Extraer todos los tags únicos
    const allTags = useMemo(() => {
        const tags = posts.flatMap(p => p.tags ?? [])
        return [...new Set(tags)].sort()
    }, [posts])

    // Filtrar y ordenar
    const filtered = useMemo(() => {
        return posts
            .filter(post => {
                const matchSearch =
                    search === "" ||
                    post.title.toLowerCase().includes(search.toLowerCase())
                const matchTag =
                    selectedTag === "" ||
                    post.tags?.includes(selectedTag)
                return matchSearch && matchTag
            })
            .sort((a, b) => {
                const diff = new Date(a.published_at) - new Date(b.published_at)
                return sortOrder === "desc" ? -diff : diff
            })
    }, [posts, search, selectedTag, sortOrder])

    return (
        <>
            {/* Header + Filtros */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white mb-1">
                    Posts <span className="text-cyan-500">&</span> Articles
                </h1>
                <p className="text-gray-500 text-sm mb-6">
                    {posts.length} publicaciones
                </p>

                <div className="flex flex-col md:flex-row gap-3">
                    {/* Búsqueda por título */}
                    <input
                        type="text"
                        placeholder="Buscar por título..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-1 bg-gray-900 border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5
              placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />

                    {/* Filtro por tag */}
                    <select
                        value={selectedTag}
                        onChange={e => setSelectedTag(e.target.value)}
                        className="bg-gray-900 border border-gray-700 text-sm rounded-lg px-4 py-2.5
              focus:outline-none focus:border-cyan-500 transition-colors
              text-white md:w-48 cursor-pointer"
                    >
                        <option value="">Todas las etiquetas</option>
                        {allTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>

                    {/* Ordenar por fecha */}
                    <select
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                        className="bg-gray-900 border border-gray-700 text-sm rounded-lg px-4 py-2.5
              focus:outline-none focus:border-cyan-500 transition-colors
              text-white md:w-44 cursor-pointer"
                    >
                        <option value="desc">Más recientes</option>
                        <option value="asc">Más antiguos</option>
                    </select>
                </div>

                {/* Tag pills activos */}
                {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            onClick={() => setSelectedTag("")}
                            className={`text-xs px-3 py-1 rounded-full border transition-colors cursor-pointer
                ${selectedTag === ""
                                    ? "border-cyan-500 text-cyan-500 bg-cyan-500/10"
                                    : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                                }`}
                        >
                            Todos
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                                className={`text-xs px-3 py-1 rounded-full border transition-colors cursor-pointer
                  ${selectedTag === tag
                                        ? "border-purple-400 text-purple-400 bg-purple-400/10"
                                        : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Resultados */}
            {filtered.length > 0 ? (
                <>
                    <p className="text-xs text-gray-600 mb-4">
                        {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
                        {search && ` para "${search}"`}
                        {selectedTag && ` en "${selectedTag}"`}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filtered.map(post => (
                            <div
                                className="group bg-gray-900 rounded-lg overflow-hidden border border-transparent hover:border-gray-700 transition-colors"
                                key={post.id}
                            >
                                <Link href={`/posts/${post.slug}`}>
                                    <div className="h-40 overflow-hidden bg-gray-800">
                                        {post.cover_image ? (
                                            <Image
                                                src={post.cover_image}
                                                alt={post.title}
                                                width={400}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-700 text-xs">
                                                sin portada
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {post.tags?.slice(0, 2).map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-semibold text-purple-400 tracking-wider uppercase border-b border-purple-400 pb-px"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-600 group-hover:text-gray-500">
                                            {new Date(post.published_at).toLocaleDateString('es-PE', {
                                                year: 'numeric', month: 'short', day: 'numeric'
                                            })}
                                        </p>
                                        <h3 className="text-lg font-bold line-clamp-2 text-white mt-1 group-hover:text-cyan-500 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                                            {post.summary}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center mt-16">
                    <p className="text-gray-600 text-sm">
                        No se encontraron posts{search && ` para "${search}"`}{selectedTag && ` con etiqueta "${selectedTag}"`}.
                    </p>
                    <button
                        onClick={() => { setSearch(""); setSelectedTag("") }}
                        className="mt-4 text-xs text-cyan-500 hover:underline cursor-pointer"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}
        </>
    )
}

export default PostsClient;