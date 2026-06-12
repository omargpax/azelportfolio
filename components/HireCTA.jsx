import Link from "next/link";
import Social from "@/components/Social";

const HireCTA = () => {
  return (
    <section className="container mx-auto py-20 px-6 md:px-0 font-jetbrains">
      <div className="max-w-2xl mx-auto text-center">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 
                        bg-green-500/10 border border-green-500/20 
                        rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-mono">
            Available for new opportunities
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Looking for a Backend or Data role
        </h2>

        <p className="text-white/60 text-base leading-relaxed mb-4">
          I'm actively seeking full-time or contract positions as a{" "}
          <span className="text-cyan-400">Backend Developer</span> or{" "}
          <span className="text-purple-400">Data Analyst / Data Engineer</span>.
          Remote-first, open to hybrid in Peru.
        </p>

        <p className="text-white/40 text-sm mb-10">
          If you need someone who builds the API{" "}
          <em>and</em> understands what the data inside it means — let's talk.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:omargpax.dev@gmail.com"
            className="px-8 py-4 bg-cyan-500 text-gray-900 rounded-full 
                       font-bold hover:bg-cyan-400 transition-colors 
                       text-sm tracking-wide uppercase"
          >
            Send me an email
          </a>
          
          <a
            href="/omargpax_cv_EN_.pdf"
            download
            className="px-8 py-4 border border-white/20 text-white 
                       rounded-full font-bold hover:border-cyan-500 
                       hover:text-cyan-500 transition-colors 
                       text-sm tracking-wide uppercase"
          >
            Download CV
          </a>
        </div>

        {/* Social */}
        <Social
          containerStyles="flex gap-5 justify-center"
          iconStyles="w-9 h-9 border border-white/20 rounded-full 
                      flex justify-center items-center text-white/60 
                      hover:border-cyan-500 hover:text-cyan-400 
                      transition-all duration-300 text-base"
        />

        {/* Meta info */}
        <p className="text-white/20 text-xs mt-8 font-mono">
          Trujillo, Peru · UTC-5 · Available immediately
        </p>
      </div>
    </section>
  );
};

export default HireCTA;