import { Button } from "@heroui/react";
import Image from "next/image";


const FeaturedAnimals = async () => {
    const res = await fetch("http://localhost:8000/models", { cache: "no-store" });
    const models = await res.json();
    const firstFour = models.slice(0, 4);
    return (
        <div className="relative px-6">
            <h1 className="text-2xl font-bold my-8 text-center">
                Featured Animals
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {firstFour.map((model) => (
                    <div key={model.id} className="border p-3 rounded-lg shadow-sm">

                        <Image
                            src={model.image.trim()}
                            alt={model.name}
                            width={300}
                            height={200}
                            className="rounded-md object-cover w-full h-48"
                        />

                        <h2 className="mt-3 text-lg font-semibold">{model.name}</h2>
                        <p className="text-sm text-gray-500">{model.type}</p>
                    </div>
                ))}
            </div>


            <Button className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-linear-to-r from-taupe-500 via-lime-500 to-taupe-500 text-white px-16 py-3">
                View All...
            </Button>
        </div>
    );
};

export default FeaturedAnimals;
