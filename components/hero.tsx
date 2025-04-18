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
        className="z-0 blur-[2px] md:object-center"
      />
      
      {/* Content */}
      <div className="z-20 relative space-y-6 bg-white/75 shadow-lg px-3 py-3 rounded-3xl max-w-xl text-center">
        <h1 className="font-bold text-black text-2xl md:text-4xl leading-tight">
          Transform Your Life with <span className="text-[#f78921]">Akshita</span>
        </h1>
        <div className='bg-black/60 m-5 h-0.5'></div>
        <p className="font-bold text-black text-lg md:text-xl">
          Manifest Your Dream Life: Health, Love, Success & Abundance
        </p>
        <button className="bg-[#F2A154] hover:bg-orange-400 mb-2 px-6 py-3 rounded-full font-bold text-white text-lg md:text-xl transition">
          Explore Courses
        </button>
      </div>
    </section>
  );
}