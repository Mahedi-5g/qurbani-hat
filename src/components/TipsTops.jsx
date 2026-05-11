import Image from 'next/image';
import React from 'react';

const TipsTops = () => {
    return (
        <div className="mx-7 ">
            <h1 className="text-4xl font-semibold text-taupe-600">Qurbani Tips and Top Breeds
            </h1>
            <div className="w-full flex justify-end pt-5">
                <div className="hero bg-base-200 w-3/4 rounded-2xl transition duration-300 ease-in-out 
    hover:scale-102 hover:shadow-lg">
                    <div className="hero-content flex-col lg:flex-row gap-10">
                        <Image src="/tips1.png" alt="tips" width={300} height={200} className="rounded-md h-52" />
                        <div>
                            <h1 className="text-3xl font-semibold">Goat Qurbani Guide</h1>

                            <ul className="py-6 space-y-3 text-lg">
                                <li>* Choose a healthy and active goat (clear eyes, shiny coat)</li>
                                <li>* Ensure the goat is at least 1 year old</li>
                                <li>* Avoid goats with defects (blind, lame, or sick)</li>
                                <li>* Provide proper food and clean water before Qurbani</li>
                                <li>* Follow Islamic rules and maintain hygiene during sacrifice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-start py-5">
                <div className="hero bg-base-200 w-3/4 rounded-2xl transition duration-300 ease-in-out 
    hover:scale-102 hover:shadow-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <Image src="/tips4.png" alt="tips" width={300} height={200} className="rounded-md h-52" />
                        <div>
                            <h1 className="text-3xl font-semibold">Cow Qurbani Guide</h1>

                            <ul className="py-6 space-y-3 text-lg">
                                <li>* Choose a healthy and strong cow (bright eyes, smooth skin)</li>
                                <li>* Ensure the cow is at least 2 years old</li>
                                <li>* Avoid cows that are weak, injured, or sick</li>
                                <li>* Feed nutritious food and provide enough water</li>
                                <li>* Follow proper Islamic rules and ensure a clean environment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <div className="hero bg-base-200 w-3/4 rounded-2xl transition duration-300 ease-in-out 
    hover:scale-102 hover:shadow-lg">
                    <div className="hero-content flex-col lg:flex-row gap-10">
                        <Image src="/tips5.png" alt="tips" width={300} height={200} className="rounded-md h-52" />
                        <div>
                            <h1 className="text-3xl font-semibold">Sheep Qurbani Guide</h1>

                            <ul className="py-6 space-y-3 text-lg">
                                <li>* Select a healthy and active sheep (clean wool, bright eyes)</li>
                                <li>* Ensure the sheep is at least 1 year old</li>
                                <li>* Avoid sheep with defects (blind, weak, or diseased)</li>
                                <li>* Provide proper feeding and clean water before Qurbani</li>
                                <li>* Perform Qurbani according to Islamic guidelines and hygiene</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsTops;