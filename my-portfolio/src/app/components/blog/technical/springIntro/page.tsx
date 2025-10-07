'use client';
import PostContent from '../content/springIntro.mdx';

export default function Page() {
  return (
    <div className="relative"> {/* Wrapper with relative positioning */}
      {/* Background gradient */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 69, 255, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%)'
        }}
      ></div>
    <article className="max-w-3xl mx-auto px-3 py-3 bg-white/90 backdrop-blur-md rounded-xl shadow-xl text-gray-900">
      <PostContent />
    </article>
    </div>
  );
}
