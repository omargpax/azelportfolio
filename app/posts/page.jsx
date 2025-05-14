"use client";
import Image from "next/image"
import Link from "next/link";
import { featurePost, posts, status } from "@/data/posts";

const Posts = () => {
  return (
    <div className="container mx-auto font-jetbrains pb-16 px-6 md:px-0 lg:w-6xl xl:w-7xl">
      {/*<span className="text-xl animate-pulse">Currently {status[0]}</span>*/}
      {/* Featured Post */}
      <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
        <Link href={featurePost.link} className="flex flex-col md:flex-row">
          <div className="relative h-64 md:h-full w-full md:w-2/3 rounded-lg overflow-hidden">
            <Image
              src={featurePost.image}
              alt="tasks scheduled"
              width={800}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 p-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase border-b-2 border-purple-400 pb-px">
                {featurePost.source}
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-4">{featurePost.date}</p>
            <h2 className="text-2xl font-bold line-clamp-2 text-white mt-2 md:line-clamp-2 md:text-2xl
            " >
              {featurePost.titleParts.map((part, index) =>
                typeof part === 'string'
                  ? part
                  : <b key={index} className="text-cyan-500">{part.text}</b>
              )}
            </h2>
            <p className="text-gray-400 mt-4 text-justify line-clamp-2 md:line-clamp-3 lg:line-clamp-7 text-sm">
              {featurePost.description}
            </p>
          </div>
        </Link>
      </div>
      {/* grid posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => {
          return (
            <div className="group bg-gray-900 rounded-lg overflow-hidden" key={index}>
              <Link href={post.link}>
                <div className="h-40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="inline-block">
                    <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase border-b-2 border-purple-400 pb-px group-hover:text-purple-500 group-hover:border-purple-500">
                      {post.source}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2 group-hover:text-gray-500">
                    {post.date}
                  </p>
                  <h3 className="text-lg font-bold line-clamp-2 text-white md:line-clamp-2 md:text-xl group-hover:text-cyan-500">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Posts;