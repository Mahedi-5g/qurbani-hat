import Image from 'next/image';
import React from 'react';

const animalDetails = async ({ params }) => {
    const { details } = await params;
    const res = await fetch("http://localhost:8000/models", { cache: "no-store" });
    const models = await res.json();
    const model = models.find(m => m.id == details)

    return (
        <div className='px-8 p-10 pb-14'>
            <h2 className='text-4xl font-bold text-center pb-4'>Details here</h2>
            <div className="hero bg-base-200 h-fit p-8 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={model.image.trim()}
                        alt={model.name}
                        width={400}
                        height={400}
                        className="rounded-md w-full h-96 shadow-lg"
                    />
                    <div className="space-y-3 w-full">
                        <h1 className="text-3xl font-semibold text-taupe-500">{model.name}</h1>

                        <p><span className="font-semibold">Type:</span> {model.type}</p>
                        <p><span className="font-semibold">Breed:</span> {model.breed}</p>
                        <p><span className="font-semibold">Age:</span> {model.age} years</p>
                        <p><span className="font-semibold">Weight:</span> {model.weight} kg</p>
                        <p><span className="font-semibold">Location:</span> {model.location}</p>

                        <p className="text-gray-600 mt-2">{model.description}</p>

                        <h2 className="text-2xl font-bold text-green-600">
                            price: {model.price}
                        </h2>

                        <button className="btn btn-primary mt-4 hover:scale-105 transition duration-300">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default animalDetails;