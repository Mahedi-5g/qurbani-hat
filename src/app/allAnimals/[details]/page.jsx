

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FindError from "@/components/FindError";
import Link from "next/link";
import { Button } from "@heroui/react";
import LoadingAnimation from "@/components/LoadingAnimation";
import { authClient } from "@/lib/auth-client";

const AnimalDetailsPage = () => {
    const { details } = useParams();

    const router = useRouter();

    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        const fetchAnimal = async () => {
            try {
                const res = await fetch(
                    "https://qurbanihat-server-vdun.onrender.com/models",
                    {
                        cache: "no-store",
                    }
                );

                const data = await res.json();

                const singleAnimal = data.find(
                    (m) => m.id == details
                );

                setModel(singleAnimal);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimal();
    }, [details]);

    const handleBooking = (e) => {
        e.preventDefault();

        if (!session) {
            toast.error("Please signin first!");

            router.push("/signIn");

            return;
        }

        const form = e.target;

        const bookingData = {
            animalName: model.name,
            animalImage: model.image,
            animalPrice: model.price,
            bookedBy: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
        };

        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        existingBookings.push(bookingData);

        localStorage.setItem(
            "bookings",
            JSON.stringify(existingBookings)
        );

        toast.success("Animal booked successfully!");

        form.reset();

        router.push("/cart");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <LoadingAnimation />
            </div>
        );
    }

    if (!model) {
        return (
            <div className="flex justify-center items-center mb-7">
                <div className="w-110 h-110">
                    <FindError />
                    <Link href="/" className="flex justify-center items-center"><Button>Back to HomePage</Button></Link>
                </div>
            </div>
        );
    }

    return (
        <div className="px-5 md:px-10 py-10 pb-14">

            <h2 className="text-4xl font-bold text-center pb-8">
                Animal Details
            </h2>

            <div className="hero bg-base-200 rounded-3xl shadow-xl p-6">

                <div className="hero-content flex-col lg:flex-row gap-10">

                    <Image
                        src={model.image}
                        alt={model.name}
                        width={500}
                        height={500}
                        className="rounded-2xl w-full lg:w-122.5 h-87.5 object-cover shadow-lg"
                    />

                    <div className="space-y-4 w-full">

                        <h1 className="text-4xl font-bold text-taupe-500">
                            {model.name}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                            <p>
                                <span className="font-semibold">
                                    Type:
                                </span>{" "}
                                {model.type}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Breed:
                                </span>{" "}
                                {model.breed}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Age:
                                </span>{" "}
                                {model.age} years
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Weight:
                                </span>{" "}
                                {model.weight} kg
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Location:
                                </span>{" "}
                                {model.location}
                            </p>

                        </div>

                        <p className="text-gray-600 leading-7">
                            {model.description}
                        </p>

                        <h2 className="text-3xl font-bold text-green-600">
                            ৳ {model.price}
                        </h2>

                    </div>

                </div>

            </div>

            {/* BOOKING FORM */}

            <fieldset className="bg-base-200 border border-base-300 rounded-3xl p-8 shadow-xl w-full mt-10">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-taupe-500">
                        Booking Form
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Fill up the form to book your favorite animal
                    </p>

                </div>

                {!session && (

                    <div className="bg-red-100 border border-red-300 text-red-600 rounded-xl p-4 text-center mb-6">

                        Please signin first to book an animal.

                    </div>

                )}

                <form
                    onSubmit={handleBooking}
                    className="space-y-6"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                            <label className="label font-semibold mb-2 block">
                                Full Name
                            </label>

                            <input
                                required
                                name="name"
                                type="text"
                                className="input input-bordered w-full rounded-xl transition duration-300 ease-in-out 
    hover:scale-103 hover:shadow-lg"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="label font-semibold mb-2 block">
                                Email Address
                            </label>

                            <input
                                required
                                name="email"
                                type="email"
                                className="input input-bordered w-full rounded-xl transition duration-300 ease-in-out 
    hover:scale-103 hover:shadow-lg"
                                placeholder="Enter your email"
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                            <label className="label font-semibold mb-2 block">
                                Phone Number
                            </label>

                            <input
                                required
                                name="phone"
                                type="tel"
                                className="input input-bordered w-full rounded-xl transition duration-300 ease-in-out 
    hover:scale-103 hover:shadow-lg"
                                placeholder="+8801XXXXXXXXX"
                            />
                        </div>

                        <div>
                            <label className="label font-semibold mb-2 block">
                                Address
                            </label>

                            <input
                                required
                                name="address"
                                type="text"
                                className="input input-bordered w-full rounded-xl transition duration-300 ease-in-out 
    hover:scale-103 hover:shadow-lg"
                                placeholder="Your address"
                            />
                        </div>

                    </div>

                    <div className="text-center pt-3">

                        <button
                            type="submit"
                            className="btn bg-taupe-500 hover:bg-taupe-400 text-white px-10 rounded-xl text-lg hover:scale-105 transition duration-300"
                        >
                            Book Now
                        </button>

                    </div>

                </form>

            </fieldset>

        </div>
    );
};

export default AnimalDetailsPage;