'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center px-6 w-full min-h-screen text-[#2F3A44]">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Background"
        fill
        priority
        className="z-0 object-center"
      />
      
      {/* Content */}
      <div className="z-20 relative space-y-6 bg-white/80 shadow-lg px-3 py-3 border-[#8e8e8e] border-r-4 rounded-lg max-w-2xl text-center">
        <h1 className="font-bold text-4xl sm:text-5xl leading-tight">
          Transform Your Life with <span className="text-[#f78921]">Akshita</span>
        </h1>
        <p className="text-lg sm:text-xl">
          Unlock your full potential with powerful Law of Attraction strategies. Align your mindset, manifest your vision, and step into the life you desire.
        </p>
        <button className="bg-[#F2A154] hover:bg-orange-400 mb-2 px-6 py-3 rounded-full text-white text-lg transition">
          Explore Courses
        </button>
      </div>
    </section>
  );
}