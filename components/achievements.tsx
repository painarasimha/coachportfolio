'use client';

//TODO: fix the restart of the counter

import { useState, useEffect, ReactElement } from 'react';
import { useScrollAppear } from '@/hooks/useScrollAppear';

interface CountsState {
  countries: number;
  programs: number;
  students: number;
}

interface TargetsType {
  countries: number;
  programs: number;
  students: number;
}

export default function AchievementsCounter(): ReactElement {
  const [counts, setCounts] = useState<CountsState>({
    countries: 0,
    programs: 0,
    students: 0
  });

  const { ref, isVisible } = useScrollAppear();

  const targets: TargetsType = {
    countries: 25,
    programs: 500,
    students: 1000000
  };

  useEffect(() => {
    if (!isVisible) return;

    // Reset to zero before starting count up
    setCounts({ countries: 0, programs: 0, students: 0 });

    const duration: number = 2000; // Total animation duration
    const frameRate: number = 20; // Frame update rate
    const steps: number = duration / frameRate; // Number of steps in the animation

    let step: number = 0;
    const interval = setInterval(() => {
      step++;

      setCounts({
        countries: Math.min(Math.ceil((targets.countries / steps) * step), targets.countries),
        programs: Math.min(Math.ceil((targets.programs / steps) * step), targets.programs),
        students: Math.min(Math.ceil((targets.students / steps) * step), targets.students)
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isVisible]);

  const formatStudentCount = (count: number): string => {
    if (count >= 1000000) return '1M+';
    return count.toLocaleString();
  };

  return (
    <div
      ref={ref}
      className={`bg-white py-16 w-full transition-opacity transform duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mx-auto container">
        <div className="flex flex-row justify-around items-center text-center">
          <div className="px-4">
            <h2 className="font-bold text-[#f78921] text-5xl">{counts.countries}+</h2>
            <p className="mt-2 font-semibold text-gray-700 text-lg uppercase">COUNTRIES</p>
          </div>

          <div className="px-4">
            <h2 className="font-bold text-[#f78921] text-7xl">{counts.programs}+</h2>
            <p className="mt-2 font-semibold text-gray-700 text-lg uppercase">TRAINING PROGRAMS</p>
          </div>

          <div className="px-4">
            <h2 className="font-bold text-[#f78921] text-5xl">{formatStudentCount(counts.students)}</h2>
            <p className="mt-2 font-semibold text-gray-700 text-lg uppercase">HAPPY STUDENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
