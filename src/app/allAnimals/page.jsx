// "use client";

// import LoadingAnimation from '@/components/LoadingAnimation';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const AllAnimals = () => {
//     const [models, setModels] = useState([]);
//     const [sortOrder, setSortOrder] = useState("");

//     useEffect(() => {
//         const fetchAnimals = async () => {
//             const res = await fetch("https://qurbanihat-server-vdun.onrender.com/models");
//             const data = await res.json();
//             setModels(data);
//         };
//         fetchAnimals();
//     },[]);

//     const sortedModels = [...models].sort((a, b) => {
//         if (sortOrder === "High to Low") {
//             return b.price - a.price;
//         }

//         if (sortOrder === "Low to High") {
//             return a.price - b.price;
//         }
//         return 0;
//     })

//     return (
        
//         <div className='px-7 py-10'>
//             <div className='flex justify-center'>
//                 <LoadingAnimation></LoadingAnimation>
//             </div>
            
//             <div>
//                 <h1 className='text-4xl font-semibold text-taupe-500 text-center pb-6'>Choose your Best animal here</h1>
//             </div>
//             <select
//                 onChange={(e) => setSortOrder(e.target.value)}
//                 defaultValue="Sort by Price" className="select appearance-none my-4 pt-1">
//                 <option disabled={true}>Sort by Price</option>
//                 <option>High to Low</option>
//                 <option>Low to High</option>

//             </select>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {sortedModels.map((model) => (
//                     <div key={model.id} className="border p-3 rounded-lg shadow-sm">

//                         <Image
//                             src={model.image.trim()}
//                             alt={model.name}
//                             width={300}
//                             height={200}
//                             className="rounded-md object-cover w-full h-48"
//                         />

//                         <h2 className="mt-3 text-lg font-semibold">{model.name}</h2>
//                         <div className='flex justify-end'>
//                             <Link href={`/allAnimals/${model.id}`}>
//                                 <Button className="bg-taupe-500 hover:bg-taupe-300 text-white my-2 hover:t">
//                                     View Details
//                                 </Button>
//                             </Link>

//                         </div>


//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// };

// export default AllAnimals;


"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllAnimals = () => {
    const [models, setModels] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    "https://qurbanihat-server-vdun.onrender.com/models"
                );
                const data = await res.json();

                setModels(data);
            } catch (error) {
                console.error("Error fetching animals:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimals();
    }, []);

    const sortedModels = [...models].sort((a, b) => {
        if (sortOrder === "High to Low") return b.price - a.price;
        if (sortOrder === "Low to High") return a.price - b.price;
        return 0;
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <LoadingAnimation />
            </div>
        );
    }

    return (
        <div className="px-7 py-10">
            <h1 className="text-4xl font-semibold text-taupe-500 text-center pb-6">
                Choose your Best animal here
            </h1>

            <select
                onChange={(e) => setSortOrder(e.target.value)}
                defaultValue="Sort by Price"
                className="select appearance-none my-4 pt-1"
            >
                <option disabled>Sort by Price</option>
                <option>High to Low</option>
                <option>Low to High</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedModels.map((model) => (
                    <div key={model.id} className="border p-3 rounded-lg shadow-sm">
                        <Image
                            src={model.image.trim()}
                            alt={model.name}
                            width={300}
                            height={200}
                            className="rounded-md object-cover w-full h-48"
                        />

                        <h2 className="mt-3 text-lg font-semibold">{model.name}</h2>

                        <div className="flex justify-end">
                            <Link href={`/allAnimals/${model.id}`}>
                                <Button className="bg-taupe-500 hover:bg-taupe-300 text-white my-2">
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

export default AllAnimals;