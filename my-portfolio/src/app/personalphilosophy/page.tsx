"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
  
    const goToPrevious = (e: { stopPropagation: () => void; }) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    const goToNext = (e: { stopPropagation: () => void; }) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    
    return (
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {/* <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button> */}
          {/* <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button> */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      );
    };

export default function PersonalPhilosophy() {
    
  return (
    <section className="min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-start"
        >
          <div className="bg-white shadow-xl rounded-3xl p-2 border border-gray-100">
            <Image
              src="/ikigai2.jpeg"
              alt="Personal Philosophy Visual"
              width={320}
              height={480}
              className="rounded-3xl object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Mission Cards */}
        <div className="flex flex-col gap-4">
          {/* Personal Mission Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-3xl border border-gray-100 p-6"
          >
            <h2 className="text-sm font-semibold text-gray-600 mb-2 tracking-wide">Personal Mission</h2>
            <h3 className="text-3xl font-bold mb-4 italic">
              Find my Ikigai, practice it, share it with the world.
            </h3>
            <div className="flex items-start gap-2">
            <a 
                href="https://www.japan.go.jp/kizuna/2022/03/ikigai_japanese_secret_to_a_joyful_life.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-200 hover:border-gray-400 transition-colors cursor-pointer"
              >
                IKIGAI
              </a>
              <p>
              <span className="font-semibull">Ikigai</span> (生き甲斐) whispers to us from Japanese wisdom—<em>"a reason for being"</em> that transcends the ordinary pursuit of success.
              It sits at the intersection of What you <span className="font-semibold">love</span>, what you're <span className="font-semibold">good at</span>, what the world <span className="font-semibold">needs</span>, and what you can be <span className="font-semibold">paid for</span>
              </p>

            </div>
          </motion.div>

          {/* Two Column Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-md rounded-3xl p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-2 italic">Visioneer</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strategize solutions from idea to product to solve human-centric problems I care about.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-md rounded-3xl p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-2 italic">I love organizing.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                giving shape to scattered ideas, code, or teams.
              </p>
            </motion.div>
          </div>

          {/* Three Column Cards */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-md rounded-3xl p-5 border border-gray-100"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                Driving ethical, inclusive <span className="font-semibold">high-impact</span> innovations for the digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white shadow-md rounded-3xl p-5 border border-gray-100"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                Thriving in roles where <span className="font-semibold">tech execution</span> aligns with <span className="font-semibold">product strategy</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white shadow-md rounded-3xl p-5 border border-gray-100"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                Find <span className="font-semibold">efficient</span> ways to <span className="font-semibold">Get. Things. Done.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
        
      {/* Divider */}
      <div className="w-32 h-1 bg-gradient-to-r from-[#761180] to-blue-400 mx-auto my-16 rounded-full" />

      {/* Life Outside Code Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Life Outside Code
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
                title: "Mentorship",
                subtitle: "Empowering the next generation",
                images: ["/values/mentorship/mentor1.jpeg", "/values/mentorship/mentor2.jpeg"],
                description: "I love guiding and sharing whatever knowledge I’ve gained, no matter how small. I also believe in reverse mentoring — learning from juniors keeps me grounded and curious. Growth, to me, happens when we lift each other up.",
              },
            {
              title: "Hiking",
              subtitle: "Finding peace in nature's embrace",
              images: ["/values/hiking/hike1.jpeg", "/values/hiking/hike2.jpeg", "/values/hiking/hike3.jpeg", "/values/hiking/hike4.jpeg",
                "/values/hiking/hike5.jpeg","/values/hiking/hike6.jpeg"],
              description: "I’ve always been an ocean person, but my first hike at Multnomah Falls in Portland made me realize I actually enjoy the calm and clarity that comes with every trail.",
            },
            {
              title: "Ocean Soul",
              subtitle: "Grounded by waves and wanderlust",
              images: ["/values/ocean/ocean1.jpg", "/values/ocean/ocean2.jpg", "/values/ocean/ocean3.jpg","/values/ocean/ocean4.jpg","/values/ocean/ocean5.JPG"],
              description: "I feel most at peace near water — it helps me find my rhythm. From deep blues to emerald tides, the ocean always reminds me to flow with life",
            },
            {
              title: "Avid Reader",
              subtitle: "Exploring worlds through words",
              images: ["/values/books/book1.png","/values/books/book2.png","/values/books/book3.png","/values/books/book4.jpg"],
              description: "I enjoy romance and fantasy novels (currently on a binge-reading hiatus!). I can talk about them for hours — PS: ACOTAR is the greatest of all time, and Velaris is my second home."},
            {
              title: "Anime Enthusiast",
              subtitle: "Stories that spark imagination",
              images: ["values/anime/anime1.jpg","values/anime/anime2.jpg","values/anime/anime3.jpg","values/anime/anime4.jpg","values/anime/anime5.jpg"],
              description: "I repeat, anime is not cartoons! It’s storytelling, emotion, and artistry at its best. Also, Naruto will forever be the greatest.",
            },
            {
              title: "Culinary Explorer",
              subtitle: "Cooking with curiosity",
              images: ["values/food/food1.jpeg","values/food/food2.jpeg","values/food/food3.jpeg","values/food/food4.jpeg","values/food/food5.jpeg","values/food/food6.jpeg"],
              description: "I love cooking (and eating, obviously). I often experiment with Indian flavors but I’m open to any cuisine — nothing beats a good bowl of miso ramen!",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-lg group h-80"
            >
              {/* Image carousel */}
              <div className="absolute inset-0">
                <ImageSlider images={item.images} />
              </div>
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-left pointer-events-none">
                <h3 className="text-white !text-white text-2xl font-semibold">{item.title}</h3>
                <p className="text-white/80 !text-white">{item.subtitle}</p>
              </div>
              
              {/* Hover flip content */}
              <div className="absolute inset-0 bg-white/95 text-gray-800 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl">
                <p className="text-base leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}