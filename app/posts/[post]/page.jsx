import { supabase } from "@/lib/supabase"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from 'remark-breaks'
import { notFound } from "next/navigation"
import Link from "next/link";
import CoverImage from "./CoverImage"   

export async function generateStaticParams() {
  const { data } = await supabase
    .from('posts')
    .select('slug')
    .eq('is_published', true)
  return (data ?? []).map(p => ({ post: p.slug }))
}

const PostPage = async ({ params }) => {
  const { post: slug } = await params

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!post || error) notFound()

  return (
    <article className="container mx-auto font-jetbrains pb-16 px-6 md:px-0 lg:w-6xl xl:w-7xl">
    
    		{/* bakck */}
                <div className="mb-8">
                    <Link
                        href="/posts"
                        className="text-white/70 hover:text-white transition-colors underline"
                    >
                        ← Back to posts
                    </Link>
                </div>

      {/* Portada con lightbox */}
      {post.cover_image && (
        <CoverImage src={post.cover_image} alt={post.title} />
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-2 flex-wrap mb-3">
          {post.tags?.map(tag => (
            <span key={tag} className="text-xs font-semibold text-purple-400 tracking-wider uppercase border-b-2 border-purple-400 pb-px">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {post.title}
        </h1>
        <p className="text-gray-500 text-sm">
          {post.author} · {new Date(post.published_at).toLocaleDateString('es-PE', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </p>
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          {post.summary}
        </p>
      </div>

      <hr className="border-gray-800 mb-8" />

      {/* Contenido Markdown */}
      <div className="prose prose-invert prose-cyan max-w-none
        prose-headings:font-bold prose-headings:text-white
        prose-p:text-gray-200 prose-p:leading-relaxed
        prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
        prose-code:text-cyan-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
        prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
        prose-blockquote:border-purple-500 prose-blockquote:text-gray-400
        prose-strong:text-white prose-li:text-gray-300 mb-2">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {post.content.replace(/\\n/g, '\n')}
        </ReactMarkdown>
      </div>
      
      <div className="text-gray-500 text-sm mt-4">
         <p>Fuente: <Link href={post.source_link} className="hover:font-bold hover:text-cyan-400 text-purple-800">{post.source}</Link> </p>
      </div>
    </article>
  )
}

export default PostPage;
