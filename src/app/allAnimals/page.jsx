import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const allAnimals = async () => {
    const res = await fetch("https://qurbanihat-server-vdun.onrender.com/models", { cache: "no-store" });
    const models = await res.json()
    return (
        <div className='px-7 py-10'>
            <div>
                <h1 className='text-4xl font-semibold text-taupe-500 text-center pb-6'>Choose your Best animal here</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {models.map((model) => (
                    <div key={model.id} className="border p-3 rounded-lg shadow-sm">

                        <Image
                            src={model.image.trim()}
                            alt={model.name}
                            width={300}
                            height={200}
                            className="rounded-md object-cover w-full h-48"
                        />

                        <h2 className="mt-3 text-lg font-semibold">{model.name}</h2>
                        <div className='flex justify-end'>
                            <Link href={`/allAnimals/${model.id}`}>
                            <Button className="bg-taupe-500 hover:bg-taupe-300 text-white my-2 hover:t">
                                View Details
                            </Button>
                            </Link>
                            
                        </div>


                    </div>
                ))}
            </div>
        </div>

    );
};

export default allAnimals;