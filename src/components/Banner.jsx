import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <section className="relative h-125 w-full rounded-2xl overflow-hidden">
  
  <div className="absolute inset-0 bg-[url('/banner2.png')] bg-cover bg-center" />
  <div className="absolute" />

  <Button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-linear-to-r from-taupe-500 via-lime-500 to-taupe-500 text-white px-16 py-3">
    Browse Animals
  </Button>

</section>
  );
};

export default Banner;