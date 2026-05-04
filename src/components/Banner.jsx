"use client";
import { Button } from "@heroui/react";

const Banner = () => {
  const handleScroll = () => {
    const section = document.getElementById('featured-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="relative h-125 w-full rounded-2xl overflow-hidden">

      <div className="absolute inset-0 bg-[url('/banner2.png')] bg-cover bg-center h-full" />
      <div className="absolute inset-0 flex flex-col items-center text-taupe-500 pt-5">
        <h1 className="text-7xl font-bold">QURBANI</h1>
        <p className="text-4xl font-bold ml-38 ">1447 | 2026</p>
        <p className="text-3xl font-semibold mt-8 text-white">Book your livestock Here</p>
        <Button onClick={handleScroll} className="mt-14 bg-linear-to-r from-taupe-500 via-lime-500 to-taupe-500 text-white px-16 py-3">
          Browse Animals
        </Button>
      </div>



    </section>
  );
};

export default Banner;