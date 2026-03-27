import { supabase } from "@/lib/supabase"
import PostsClient from "./PostsClient"

export const dynamic = 'force-dynamic'; // Forzar renderizado dinámico en cada request

const Posts = async () => {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, slug, title, summary, cover_image, tags, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) console.error('Error fetching posts:', error)

  return (
    <div className="container mx-auto font-jetbrains pb-16 px-6 md:px-0 lg:w-6xl xl:w-7xl">
      <PostsClient posts={posts ?? []} />
    </div>
  )
}

export default Posts;
